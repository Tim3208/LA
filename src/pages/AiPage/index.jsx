import MainLayOut from "../../layout/MainLayOut";
import { AiPageMainStyle } from "./style";
import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  Sparkles,
  TrendingUp,
  Calendar,
  Send,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AiPage = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage.trim();
    setChatMessage("");
    setIsLoading(true);

    // 사용자 메시지 추가
    setChatHistory((prev) => [
      ...prev,
      { type: "user", message: userMessage, timestamp: new Date() },
    ]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      let aiResponse = "";
      if (userMessage.includes("데이트") || userMessage.includes("연인")) {
        aiResponse = "데이트하는건 꼴받아서 안알려드리겠습니다 XP";
      } else if (userMessage.includes("가족") || userMessage.includes("아이")) {
        aiResponse =
          "가족과 함께 즐길 수 있는 행사를 추천드려요! 👨‍👩‍👧‍👦\n\n가족 친화 겨울축제가 12월 22일에 강남역 광장에서 열려요.\n아이들이 좋아할 체험 부스도 많고, 안전하게 즐길 수 있는 공간이에요.\n\n특히 페이스페인팅이나 만들기 체험이 인기가 많더라고요!";
      } else if (userMessage.includes("음식") || userMessage.includes("맛집")) {
        aiResponse =
          "맛있는 음식을 즐길 수 있는 행사를 찾아드릴게요! 🍽️\n\n겨울 야시장이 강남역에서 열려요. \n따뜻한 길거리 음식부터 이색 요리까지 다양하게 맛볼 수 있어요.\n\n특히 호떡, 붕어빵 같은 겨울 간식이 정말 맛있다고 후기가 좋더라고요!";
      } else {
        aiResponse =
          "안녕하세요! LA AI 큐레이터예요. ✨\n\n어떤 종류의 행사를 찾고 계신가요? 예를 들어:\n\n• '가족들과 가기 좋은 축제'\n\n이런 식으로 말씀해주시면 딱 맞는 행사를 추천해드릴게요!\n\n\n\nDEVKEY: 데이트, 연인, 가족, 아이, 음식, 맛집";
      }

      setChatHistory((prev) => [
        ...prev,
        { type: "ai", message: aiResponse, timestamp: new Date() },
      ]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "ai",
          message: "죄송해요, 일시적인 오류가 발생했어요. 다시 시도해주세요.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AiPageMainStyle>
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

            {/* AI 챗봇 */}
            <TabsContent value="chatbot" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-2">
                  AI 행사 큐레이터 🤖
                </h2>
                <p className="text-gray-100">
                  궁금한 것을 자연스럽게 물어보세요. 딱 맞는 행사를
                  추천해드릴게요!
                </p>
              </div>

              <Card className="min-h-[600px] max-h-[800px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-blue-100" />
                    LA AI 큐레이터
                  </CardTitle>
                  <CardDescription>
                    예시: "이번 주말 데이트할 만한 행사 없어?", "아이와 함께 갈
                    수 있는 축제 추천해줘"
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* 채팅 내역 */}
                  <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96">
                    {/* 채팅내역이 없을 경우 */}
                    {chatHistory.length === 0 && (
                      <div className="text-center text-gray-90 py-8">
                        <Bot className="w-12 h-12 mx-auto mb-4 text-gray-70" />
                        <p>안녕하세요! 어떤 행사를 찾고 계신가요?</p>
                        <p className="text-sm mt-2">
                          자연스럽게 말씀해주시면 딱 맞는 추천을 해드릴게요 ✨
                        </p>
                      </div>
                    )}

                    {/* 채팅내역이 존재할 경우 */}
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          chat.type === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            chat.type === "user"
                              ? "bg-blue-100 text-white"
                              : "bg-gray-30 text-black border border-gray-40"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{chat.message}</p>
                          <p
                            className={`text-xs mt-3 ${
                              chat.type === "user"
                                ? "text-white"
                                : "text-gray-90"
                            }`}
                          >
                            {chat.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-30 text-black border border-gray-40 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>생각하는 중...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 입력 폼 */}
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="어떤 행사를 찾고 계신가요?"
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !chatMessage.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>

                  {/* 추천 질문 */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-100 mb-2">
                      💡 이런 질문은 어때요?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "이번 주말 데이트할 만한 곳",
                        "아이와 함께 갈 수 있는 행사",
                        "맛있는 음식 축제",
                        "실내에서 즐길 수 있는 행사",
                      ].map((suggestion) => (
                        <Button
                          key={suggestion}
                          variant="outline"
                          size="sm"
                          onClick={() => setChatMessage(suggestion)}
                          disabled={isLoading}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </MainLayOut>
    </AiPageMainStyle>
  );
};

export default AiPage;
