import { MainPageTitleCPMainStyle } from "./style";
import { ButtonCP } from "../../_common/ButtonCP";
import { useState } from "react";
import { OutLineButtonCP } from "@/components/_common/OutLineButtonCP";
import { Bot, Calendar, Sparkles, TrendingUp } from "lucide-react";
/**
 * 메인 페이지 타이틀 컴포넌트
 */
const MainPageTitleCP = () => {
  const [position, setPosition] = useState("강남구");

  return (
    <MainPageTitleCPMainStyle className="flexCenter">
      <div className="container">
        {/* <!-- AI 추천 카드 --> */}
        <section className="ai-card">
          <div>
            <p className="label">AI 큐레이터 서비스</p>
            <div>
              <h2 className="title">
                AI가 찾아주는 <span className="text-blue-60">{position}</span>의
                <br />
                완벽한 행사 추천
              </h2>
              <p className="desc">
                “이번 주말 데이트할 만한 곳 없어요?” 자연스럽게 물어보세요.
                <br />
                AI가 당신의 취향을 분석해 딱 맞는 지역 행사를 추천해드려요.
              </p>
              <div className="top-buttons">
                <ButtonCP icon={<Bot className="w-6" />} bgColor="--blue-80">
                  AI 큐레이터 사용하기
                </ButtonCP>
                <OutLineButtonCP icon={<Calendar className="w-5" />}>
                  이벤트 캘린더
                </OutLineButtonCP>
              </div>
            </div>
          </div>
          <div className="bottom-features">
            <div>
              <div>
                <Sparkles className="w-5" />
                <strong>맞춤 추천</strong>
              </div>
              취향 분석으로 92% 매치
            </div>
            <div>
              <div>
                <Bot className="w-5" />
                <strong>AI 챗봇</strong>
              </div>
              일상 대화하듯 편리하게
            </div>
            <div>
              <div>
                <TrendingUp className="w-5" />
                <strong>후기 분석</strong>
              </div>
              실시간 만족도 분석
            </div>
          </div>
        </section>
      </div>
    </MainPageTitleCPMainStyle>
  );
};
export default MainPageTitleCP;
