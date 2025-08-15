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

const AiPage = () => {
  return (
    <AiPageMainStyle>
      <MainLayOut>
        <div className="w-full">
          <ul className="grid w-full grid-cols-4">
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              맞춤 추천
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              행사 요약
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              후기 분석
            </li>
            <li className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              AI 챗봇
            </li>
          </ul>

          {/* 맞춤형 추천 */}
        </div>
      </MainLayOut>
    </AiPageMainStyle>
  );
};

export default AiPage;
