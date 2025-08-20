import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
import MainLayOut from "../../layout/MainLayOut";
import { MainPageMainStyle } from "./style";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const MainPage = () => {
  // 이벤트와 추천 데이터
  const [events] = useState([
    { title: "멋쟁이 사자처럼 13기 해커톤", date: "2025.08.25", type: "행사", place: "서초구 aT센터", likes: 326 },
    { title: "지역 청년 창업 박람회", date: "2025.09.24", type: "행사", place: "서초구청", likes: 87 },
    { title: "겨울 야시장", date: "2025.12.22", type: "축제", place: "서초역 일대", likes: 123 }
  ]);

  const [recommendations] = useState([
    { title: "멋쟁이 사자처럼 13기 해커톤", match: "92%", description: "멋쟁이 사자처럼 13기, 아이디어에 열정을 더해 현실로 만들어가는 우리의 첫 해커톤!", date: "08.25", desc: "서초구 aT센터" },
    { title: "지역 청년 창업 박람회", match: "85%", description: "청년들의 도전정을 응원하는 자리로, 창의적인 아이디어와 다양한 창업 사례를 통해 미래의 가능성을 함께 나누는 축제입니다.", date: "09.24", desc: "서초구청" }
  ]);

  return (
    <MainPageMainStyle>
      <MainLayOut>
        {/* 메인 타이틀 */}
        <MainPageTitleCP />

        {/* AI 메인 카드 */}
        <section className="ai-card">
          <p className="label">AI 큐레이터 서비스</p>
          <h2>
            AI가 찾아주는 <span className="highlight">지역</span>의<br />
            완벽한 행사 추천
          </h2>
          <p className="desc">
            “이번 주말 데이트할 만한 곳 없어요?” 자연스럽게 물어보세요.<br />
            AI가 당신의 취향을 분석해 딱 맞는 지역 행사를 추천해드려요.
          </p>
          <div className="top-buttons">
            <Button className="primary">AI 큐레이터 사용하기</Button>
            <Button className="secondary">이벤트 캘린더</Button>
          </div>
          <div className="bottom-features">
            <div><strong>맞춤 추천</strong><br />취향 분석으로 92% 매치</div>
            <div><strong>AI 챗봇</strong><br />일상 대화하듯 편리하게</div>
            <div><strong>후기 분석</strong><br />실시간 만족도 분석</div>
          </div>
        </section>

        {/* 다가오는 이벤트 + 빠른 메뉴 */}
        <div className="content-row">
          {/* 왼쪽: 이벤트 */}
          <section className="events">
            <h3>다가오는 이벤트</h3>
            <p className="subtitle">지역에서 열리는 행사와 축제</p>
            <div className="event-list">
              {events.map((ev, idx) => (
                <div key={idx} className="event-item">
                  <div>
                    <strong>{ev.type}</strong> {ev.date}
                    <h3>{ev.title}</h3>
                    <small>{ev.place}</small>
                  </div>
                  <div>♡ {ev.likes}</div>
                </div>
              ))}
            </div>
            <a href="#" className="view-all">전체보기 &gt;</a>
          </section>

          {/* 오른쪽: 빠른 메뉴 */}
          <aside className="quick-menu">
            <h4>빠른 메뉴</h4>
            <Button>자유게시판</Button>
            <Button>홍보게시판</Button>
            <Button>인기게시판</Button>
            <Button>AI 큐레이터</Button>
          </aside>
        </div>

        {/* AI 맞춤 추천 + 인기 게시글 */}
        <div className="content-row">
          {/* 왼쪽: AI 맞춤 추천 */}
          <section className="recommendations">
            <h3>AI 맞춤 추천</h3>
            <p className="subtitle">당신만을 위한 개인화된 행사 추천</p>
            <div className="rec-cards">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="rec-item">
                  <strong>{rec.match} 매치</strong>
                  <p><b>{rec.title}</b></p>
                  <small>{rec.description}</small><br />
                  <small>{rec.date} · {rec.desc}</small>
                </div>
              ))}
            </div>

            <div className="chatbot">
              <p>
                <strong>AI 챗봇과 대화해보세요</strong><br />
                <small>“이번 주말 데이트할 만한 곳 없어요?”</small>
              </p>
              <br />
              <Button className="primary">지금 대화하기</Button>
              <Button className="secondary">예시 보기</Button>
            </div>
            <a href="#" className="view-all">전체보기 &gt;</a>
          </section>

          {/* 오른쪽: 인기 게시글 */}
          <aside className="popular">
            <h4>인기 게시글</h4>
            {["자유게시판", "홍보게시판", "뉴스게시판"].map((cat, idx) => (
              <div key={idx} className="post-card">
                <div className="post-header">
                  <span className="category">{cat}</span>
                  <span className={`tag ${cat === "자유게시판" ? "hot" : cat === "홍보게시판" ? "official" : "news"}`}>
                    {cat === "자유게시판" ? "HOT" : cat === "홍보게시판" ? "공식" : "뉴스"}
                  </span>
                </div>
                <p className="title">게시물의 제목을 입력하는 란입니다</p>
                <p className="meta">뉴스봇 · 8시간 전</p>
              </div>
            ))}
          </aside>
        </div>
      </MainLayOut>
    </MainPageMainStyle>
  );
};

export default MainPage;
