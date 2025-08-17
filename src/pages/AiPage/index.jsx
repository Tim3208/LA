import MainLayOut from "../../layout/MainLayOut";
import { AiPageMainStyle } from "./style";
import {
  ArrowLeft,
  Bot,
  Sparkles,
  TrendingUp,
  Calendar,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AiPage = () => {
  /**
   * 임시 AI 추천 데이터
   *
   * @param {number} id
   * @param {string} title 행사 이름
   * @param {date} date 날짜
   * @param {string} location 위치
   * @param {string[]} tags 태그(키워드) 배열
   * @param {string} summary 행사 요약설명
   * @param {string} matchReason 추천 이유
   * @param {number} confidence 매칭 신뢰도
   */
  const aiRecommendations = [
    {
      id: 1,
      title: "멋쟁이 사자처럼 13기 해커톤",
      date: "2025.08.25",
      location: "서초구 aT센터",
      tags: ["힐링", "감성"],
      summary:
        "멋쟁이 사자처럼 13기, 아이디어에 열정을 더해 현실로 만들어가는 우리들의 첫 해커톤!",
      matchReason:
        "추천 이유: 멋쟁이 사자처럼 13기에 소속되어 계시고, 개발관련 행사에 자주 참여하시는 것 같아요",
      confidence: 92,
    },
    {
      id: 2,
      title: "가족 친화 겨울축제",
      date: "2025.12.22",
      location: "강남역 광장",
      tags: ["가족", "체험", "활기찬"],
      summary:
        "아이들과 함께 즐길 수 있는 다양한 체험 부스와 공연이 준비되어 있어요 👨‍👩‍👧‍👦",
      matchReason: "가족 단위 활동을 자주 검색하시는 패턴이 보여요",
      confidence: 88,
    },
    {
      id: 3,
      title: "지역 청년 창업 박람회",
      date: "2025.09.20",
      location: "강남구청",
      tags: ["네트워킹", "교육", "미래지향"],
      summary:
        "새로운 아이디어와 사람들을 만날 수 있는 기회, 미래를 준비하는 시간 💡",
      matchReason: "커리어 관련 게시글에 관심을 보이셨어요",
      confidence: 85,
    },
  ];

  //임시 AI 행사 요약
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
  return (
    <AiPageMainStyle className>
      <MainLayOut>
        <section className="flex justify-center bg-mainPageBg px-4 sm:px-0 py-8">
          <Tabs
            defaultValue="recommendations"
            className="flex flex-col w-full max-w-1440 gap-y-8"
          >
            {/* 탭 리스트 */}
            <TabsList className="flex justify-between w-full mx-auto bg-gray-40">
              <TabsTrigger
                value="recommendations"
                className="flex items-center gap-2 w-full"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline-block">맞춤 추천</span>
              </TabsTrigger>
              <TabsTrigger
                value="summaries"
                className="flex items-center gap-2 w-full"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline-block">행사 요약</span>
              </TabsTrigger>
              <TabsTrigger
                value="analysis"
                className="flex items-center gap-2 w-full"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline-block">후기 분석</span>
              </TabsTrigger>
              <TabsTrigger
                value="chatbot"
                className="flex items-center gap-2 w-full"
              >
                <Bot className="w-4 h-4" />
                <span className="hidden sm:inline-block">AI 챗봇</span>
              </TabsTrigger>
            </TabsList>

            {/* 맞춤형 추천 */}
            <TabsContent value="recommendations">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-2">
                  당신을 위한 맞춤 추천 ✨
                </h2>
                <p className="text-gray-100">
                  활동 패턴과 관심사를 분석해 개인화된 행사를 추천해드려요
                </p>
              </div>

              <div className="grid gap-6">
                {aiRecommendations.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-blue-100">
                              {event.confidence}% 매치
                            </Badge>
                            {event.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold text-black mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-90 mb-3">{event.summary}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-90 mb-3">
                            <span>📅 {event.date}</span>
                            <span>📍 {event.location}</span>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-110">
                              <strong>추천 이유:</strong> {event.matchReason}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-100 hover:bg-blue-120"
                        >
                          관심 등록
                        </Button>
                        <Button size="sm" variant="outline">
                          자세히 보기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 행사 요약 */}
            <TabsContent value="summaries">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-2">
                  AI 행사 요약 📋
                </h2>
                <p className="text-gray-90">
                  복잡한 행사 정보를 한눈에 보기 쉽게 정리해드려요
                </p>
              </div>

              <div className="grid gap-6">
                {eventSummaries.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bot className="w-5 h-5 text-blue-100" />
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-black mb-2">
                          🤖 AI 요약
                        </h4>
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
                        <h4 className="font-medium text-black mb-2">
                          📝 원본 정보
                        </h4>
                        <p className="text-sm text-gray-90 bg-blue-light2 p-3 rounded-lg">
                          {event.originalInfo}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 후기 분석 */}
            <TabsContent value="analysis">
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
                        <h4 className="font-medium text-black mb-3">
                          😊 전체 만족도
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-green-600">
                              긍정적
                            </span>
                            <span className="text-sm font-medium">
                              {event.sentiment.positive}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
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
                          <div className="w-full bg-gray-200 rounded-full h-2">
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
                        <h4 className="font-medium text-black mb-3">
                          🔑 주요 키워드
                        </h4>
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
                          전반적으로 만족도가 높은 행사입니다. 특히 분위기와
                          경험에 대한 평가가 좋으며, 얻어가는게 많다는 의견이
                          다수입니다. 다만, 트래픽 몰림으로 인해 네트워크 품질이
                          낮을 수 있으므로 주의하시고, 전반적으로 온도가 낮고
                          에어컨 조정이 쉽지 않다는 의견이 많으므로 담요등을
                          준비하시는 것을 추천드려요.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </MainLayOut>
    </AiPageMainStyle>
  );
};

export default AiPage;
