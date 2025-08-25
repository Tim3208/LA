import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const BASE_URL = import.meta.env.VITE_BASE_URL;

/** AI 후기 분석 탭 CP */
const AiPageAnalysisCP = () => {
  const [analysisList, setAnalysisList] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // 추천 게시물 조회 API 호출
  useEffect(() => {
    async function fetchAnalysis() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${BASE_URL}:8081/api/analysis/results`);
        setAnalysisList(res.data);
        console.log(res.data);
      } catch (err) {
        setError("서버에서 게시물을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }
    fetchAnalysis();
  }, []);

  // 페이지네이션 : 한 페이지당 2개(itemsPerPage)씩 보이도록
  const pagedData = analysisList.results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(analysisList.results.length / itemsPerPage);

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">
          행사 후기 분석 📊
        </h2>
        <p className="text-gray-100">
          실제 참가자들의 후기를 분석해 행사의 만족도를 알려드려요
        </p>
      </div>

      <div className="grid gap-6">
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p className="p-6 bg-white shadow-md rounded-lg">{error}</p>
        ) : (
          pagedData.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.review.festivalName}</CardTitle>
                <CardDescription>참가자 후기 종합 분석</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 감정 분석 */}
                <div>
                  <h4 className="font-medium text-black mb-3">
                    😊 전체 만족도
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600">긍정적</span>
                      <span className="text-sm font-medium">
                        {event.positivePercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-40 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${event.positivePercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-600">부정적</span>
                      <span className="text-sm font-medium">
                        {event.negativePercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-40 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${event.negativePercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* 주요 키워드 */}
                <div>
                  <h4 className="font-medium text-black mb-3">
                    🔑 주요 키워드
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="text-sm font-medium text-green-800 mb-2">
                        👍 좋았던 점
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {JSON.parse(event.positiveKeywords).map((keyword) => (
                          <Badge
                            variant="outline"
                            className="text-green-700 border-green-300"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="text-sm font-medium text-red-800 mb-2">
                        👎 아쉬운 점
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {JSON.parse(event.negativeKeywords).map((keyword) => (
                          <Badge
                            variant="outline"
                            className="text-red-700 border-red-300"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI 요약 */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">
                    🤖 AI 종합 평가
                  </h4>
                  <p className="text-sm text-blue-800">{event.aiSummary}</p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          이전
        </button>
        <span className="flex items-center">
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </>
  );
};
export default AiPageAnalysisCP;
