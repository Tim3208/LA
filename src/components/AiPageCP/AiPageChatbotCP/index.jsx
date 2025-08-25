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

const BASE_URL = import.meta.env.VITE_BASE_URL;

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
      const chatbotResponse = await fetch(`${BASE_URL}:8081/api/chatbot/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage,
        }),
      });

      if (!chatbotResponse.ok) {
        alert("문의 제출 중 오류가 발생했습니다.");
        throw new Error("Network response was not ok");
      }

      const result = await chatbotResponse.json();
      let aiResponse = result.answer;
      if (result.relatedEvents && result.relatedEvents.length > 0) {
        const eventsSummary = result.relatedEvents
          .map((event) => `- ${event.name} (${event.district}, ${event.date})`)
          .join("\n");
        aiResponse += `\n\n관련 행사 정보:\n${eventsSummary}`;
      }

      setChatHistory((prev) => [
        ...prev,
        { type: "ai", message: aiResponse, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("챗봇 호출 중 에러:", error);
      alert("챗봇 호출 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
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
