import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * 임시 AI 요약 데이터
 * @param {number} id
 * @param {string} title 행사 이름
 * @param {string} originalInfo 원본 정보
 * @param {string} aiSummary AI 요약본
 * @param {string[]} tags 태그(키워드) 배열
 * @param {Object} sentiment 긍정(num)/부정(num)적 반응 비율
 */
const eventSummaries = [
  {
    id: 1,
    title: "멋쟁이 사자처럼 13기 해커톤",
    originalInfo:
      "오는 8월 25일(월)~26일(화), 전국의 아기사자들이 한자리에 모이는 무박 2일 해커톤이 개최됩니다. 1년 간의 활동 중, 아이디어를 실제 프로덕트로 구현하는...",
    aiSummary:
      "서초구  |  08.25 ~ 08.26  |  aT센터  |  개발체험 + 부스체험 + 심사",
    tags: ["문화", "네트워킹", "개발", "체험"],
    sentiment: { positive: 85, negative: 15 },
  },
  {
    id: 2,
    title: "강남 겨울 축제",
    originalInfo:
      "강남구에서 주최하는 대규모 문화축제로 다양한 공연과 체험부스가 마련되어 있습니다.",
    aiSummary: "강남구  |  12.22  |  광장  |  문화공연 + 부스체험 + 푸드트럭",
    tags: ["문화", "공연", "음식", "체험"],
    sentiment: { positive: 77, negative: 23 },
  },
];

/** AI 행사 요약 탭 CP */
const AiPageSummaryCP = () => {
  const [summaryList, setSummaryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 추천 게시물 조회 API 호출
  useEffect(() => {
    async function fetchSummaries() {
      setLoading(true);
      setError(null);
      try {
        // FIXME: ai summaries api url 연결
        const res = await axios.get(`${BASE_URL}/ai`);
        setSummaryList(res.data);
      } catch (err) {
        // FIXME: 현재 서버가 없어 에러가 나므로 강제로 eventSummaries 불러와서 쓰는중.
        // setError("서버에서 게시물을 불러오는 중 오류가 발생했습니다.");
        setSummaryList(eventSummaries);
      } finally {
        setLoading(false);
      }
    }
    fetchSummaries();
  }, []);

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">AI 행사 요약 📋</h2>
        <p className="text-gray-90">
          복잡한 행사 정보를 한눈에 보기 쉽게 정리해드려요
        </p>
      </div>

      <div className="grid gap-6">
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p className="p-6 bg-white shadow-md rounded-lg">{error}</p>
        ) : (
          summaryList.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-100" />
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-black mb-2">🤖 AI 요약</h4>
                  <div className="bg-blue-light2 p-4 rounded-lg">
                    <p className="font-medium text-blue-100">
                      {event.aiSummary}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-black mb-2">
                    🏷️ 분위기 태그
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-black mb-2">📝 원본 정보</h4>
                  <p className="text-sm text-gray-90 bg-blue-light2 p-3 rounded-lg">
                    {event.originalInfo}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default AiPageSummaryCP;
