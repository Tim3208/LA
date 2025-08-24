import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Bot, Loader2, Send } from "lucide-react";

/** AI 챗봇 탭 CP */
const AiPageChatbotCP = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">
          AI 행사 큐레이터 🤖
        </h2>
        <p className="text-gray-100">
          궁금한 것을 자연스럽게 물어보세요. 딱 맞는 행사를 추천해드릴게요!
        </p>
      </div>

      <Card className="min-h-[600px] max-h-[800px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-100" />
            LA AI 큐레이터
          </CardTitle>
          <CardDescription>
            예시: "이번 주말 데이트할 만한 행사 없어?", "아이와 함께 갈 수 있는
            축제 추천해줘"
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
                      chat.type === "user" ? "text-white" : "text-gray-90"
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
            <Button type="submit" disabled={isLoading || !chatMessage.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {/* 추천 질문 */}
          <div className="mt-4">
            <p className="text-sm text-gray-100 mb-2">💡 이런 질문은 어때요?</p>
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
    </>
  );
};
export default AiPageChatbotCP;
