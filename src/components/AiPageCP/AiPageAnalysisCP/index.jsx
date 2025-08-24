import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

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

/** AI 후기 분석 탭 CP */
const AiPageAnalysisCP = () => {
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
        {eventSummaries.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>참가자 후기 종합 분석</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 감정 분석 */}
              <div>
                <h4 className="font-medium text-black mb-3">😊 전체 만족도</h4>
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
              {/* FIXME: ai 데이터로 수정 */}
              <div>
                <h4 className="font-medium text-black mb-3">🔑 주요 키워드</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="text-sm font-medium text-green-800 mb-2">
                      👍 좋았던 점
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-green-700 border-green-300"
                      >
                        분위기 좋음
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-green-700 border-green-300"
                      >
                        음식 맛있음
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-green-700 border-green-300"
                      >
                        접근성 좋음
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="text-sm font-medium text-red-800 mb-2">
                      👎 아쉬운 점
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-red-700 border-red-300"
                      >
                        대기시간 길음
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-red-700 border-red-300"
                      >
                        주차 어려움
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 요약 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">
                  🤖 AI 종합 평가
                </h4>
                <p className="text-sm text-blue-800">
                  전반적으로 만족도가 높은 행사입니다. 특히 분위기와 경험에 대한
                  평가가 좋으며, 얻어가는게 많다는 의견이 다수입니다. 다만,
                  트래픽 몰림으로 인해 네트워크 품질이 낮을 수 있으므로
                  주의하시고, 전반적으로 온도가 낮고 에어컨 조정이 쉽지 않다는
                  의견이 많으므로 담요등을 준비하시는 것을 추천드려요.
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
export default AiPageAnalysisCP;
