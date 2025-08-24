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

/**
 * 임시 AI 분석 데이터
 *
 * @param {number} id
 * @param {string} title 행사 이름
 * @param {Object} sentiment 긍정(num)/부정(num)적 반응 비율
 * @param {string[]} positiveKeyword 주요 키워드 - 좋았던 점
 * @param {string[]} negativeKeyword 주요 키워드 - 아쉬운 점
 * @param {string} opinion AI 종합 평가
 */
const aiAnalysis = [
  {
    id: 1,
    title: "멋쟁이 사자처럼 13기 해커톤",
    sentiment: { positive: 85, negative: 15 },
    positiveKeyword: ["분위기 좋음", "재밌음", "실력 기름"],
    negativeKeyword: ["네트워크 느림", "추움"],
    opinion:
      "전반적으로 만족도가 높은 행사입니다. 특히 분위기와 경험에 대한 평가가 좋으며, 얻어가는게 많다는 의견이 다수입니다. 다만, 트래픽 몰림으로 인해 네트워크 품질이 낮을 수 있으므로 주의하시고, 전반적으로 온도가 낮고 에어컨 조정이 쉽지 않다는 의견이 많으므로 담요등을 준비하시는 것을 추천드려요.",
  },
  {
    id: 2,
    title: "강남 겨울 축제",
    sentiment: { positive: 77, negative: 23 },
    positiveKeyword: ["분위기 좋음", "음식 맛있음", "접근성 좋음"],
    negativeKeyword: ["대기시간 길음", "주차 어려움"],
    opinion:
      "전반적으로 만족도가 높은 행사입니다. 특히 분위기와 음식에 대한 평가가 좋으며, 접근성도 우수합니다. 다만 인기가 많아 대기시간이 길 수 있으니 여유를 두고 방문하시는 것을 추천드려요.",
  },
];

/** AI 후기 분석 탭 CP */
const AiPageAnalysisCP = () => {
  const [analysisList, setAnalysisList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 추천 게시물 조회 API 호출
  useEffect(() => {
    async function fetchAnalysis() {
      setLoading(true);
      setError(null);
      try {
        // FIXME: ai analysis api url 연결
        const res = await axios.get(`${BASE_URL}/ai`);
        setAnalysisList(res.data);
      } catch (err) {
        // FIXME: 현재 서버가 없어 에러가 나므로 강제로 aiAnalysis 불러와서 쓰는중.
        // setError("서버에서 게시물을 불러오는 중 오류가 발생했습니다.");
        setAnalysisList(aiAnalysis);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalysis();
  }, []);

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
          analysisList.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
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
                        {event.sentiment.positive}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-40 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${event.sentiment.positive}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-600">부정적</span>
                      <span className="text-sm font-medium">
                        {event.sentiment.negative}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-40 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${event.sentiment.negative}%` }}
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
                        {event.positiveKeyword.map((keyword) => (
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
                        {event.negativeKeyword.map((keyword) => (
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
                  <p className="text-sm text-blue-800">{event.opinion}</p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
export default AiPageAnalysisCP;
