import MainLayOut from "@/layout/MainLayOut";

import AiPageRecommendationCP from "@/components/AiPageCP/AiPageRecommendationCP";
import AiPageSummaryCP from "@/components/AiPageCP/AiPageSummaryCP";
import AiPageAnalysisCP from "@/components/AiPageCP/AiPageAnalysisCP";
import AiPageChatbotCP from "@/components/AiPageCP/AiPageChatbotCP";

import { AiPageMainStyle } from "./style";
import { Bot, Sparkles, TrendingUp, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AiPage = () => {
  return (
    <MainLayOut>
      <AiPageMainStyle>
        <Tabs
          defaultValue="recommendations"
          className="flex flex-col w-full max-w-1440 gap-y-8 mt-8"
        >
          {/* 탭 리스트 */}
          <TabsList className="flex justify-between w-full mx-auto bg-gray-40">
            <TabsTrigger
              value="recommendations"
              className="flex items-center gap-2 w-full"
            >
              <Sparkles className="w-6 h-6 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline-block">맞춤 추천</span>
            </TabsTrigger>
            <TabsTrigger
              value="summaries"
              className="flex items-center gap-2 w-full"
            >
              <Calendar className="w-6 h-6 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline-block">행사 요약</span>
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="flex items-center gap-2 w-full"
            >
              <TrendingUp className="w-6 h-6 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline-block">후기 분석</span>
            </TabsTrigger>
            <TabsTrigger
              value="chatbot"
              className="flex items-center gap-2 w-full"
            >
              <Bot className="w-6 h-6 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline-block">AI 챗봇</span>
            </TabsTrigger>
          </TabsList>

          {/* 맞춤형 추천 */}
          <TabsContent value="recommendations">
            <AiPageRecommendationCP />
          </TabsContent>

          {/* 행사 요약 */}
          <TabsContent value="summaries">
            <AiPageSummaryCP />
          </TabsContent>

          {/* 후기 분석 */}
          <TabsContent value="analysis">
            <AiPageAnalysisCP />
          </TabsContent>

          {/* AI 챗봇 */}
          <TabsContent value="chatbot">
            <AiPageChatbotCP />
          </TabsContent>
        </Tabs>
      </AiPageMainStyle>
    </MainLayOut>
  );
};

export default AiPage;
