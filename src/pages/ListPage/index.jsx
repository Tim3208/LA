import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
import MainLayOut from "../../layout/MainLayOut";
import { MainPageMainStyle } from "./style";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BoardListPage = () => {
  return (
    <MainPageMainStyle>
      <MainLayOut>
        {/* 메인 타이틀 */}
        <MainPageTitleCP />

        {/* 게시판 목록 */}
        <main className="container">
          {/* Left */}
          <section className="boards">
            <div className="board-card">
              <h3>자유게시판</h3>
              <p>자유롭게 소통하는 공간</p>
              <div className="info">
                총 1,234개 게시글 <span className="today">오늘 +45</span>
              </div>
            </div>

            <div className="board-card">
              <h3>홍보게시판</h3>
              <p>개인 및 소상공인 홍보</p>
              <div className="info">
                총 567개 게시글 <span className="today">오늘 +23</span>
              </div>
            </div>

            <div className="board-card">
              <h3>지역홍보게시판</h3>
              <p>공식 지역 홍보 게시물</p>
              <div className="info">
                총 234개 게시글 <span className="today">오늘 +8</span>
              </div>
            </div>

            <div className="board-card">
              <h3>뉴스게시판</h3>
              <p>지역 관련 뉴스와 소식</p>
              <div className="info">
                총 890개 게시글 <span className="today">오늘 +34</span>
              </div>
            </div>

            <div className="board-card">
              <h3>핫게시판</h3>
              <p>인기 있는 게시글 모음</p>
              <div className="info">
                총 456개 게시글 <span className="today">오늘 +67</span>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="sidebar">
            <div className="recent">
              <div class="section-title">최근 게시글</div>
              <p>강남구의 최신 소식</p>

              <div className="post-card">
                <div className="post-header">
                  <span className="category">자유게시판</span>
                  <span className="tag hot">HOT</span>
                </div>
                <p className="title">게시물의 제목을 입력하는 란입니다</p>
                <p className="meta">뉴스봇 · 8시간 전</p>
              </div>

              <div className="post-card">
                <div className="post-header">
                  <span className="category">홍보게시판</span>
                  <span className="tag official">공식</span>
                </div>
                <p className="title">게시물의 제목을 입력하는 란입니다</p>
                <p className="meta">뉴스봇 · 8시간 전</p>
              </div>

              <div className="post-card">
                <div className="post-header">
                  <span className="category">뉴스게시판</span>
                  <span className="tag news">뉴스</span>
                </div>
                <p className="title">게시물의 제목을 입력하는 란입니다</p>
                <p className="meta">뉴스봇 · 8시간 전</p>
              </div>
            </div>

            <div className="guide">
              <div class="section-title">게시판 이용 안내</div>
              <ul>
                <li>서로 존중하며 건전한 소통을 해주세요</li>
                <li>개인정보 및 연락처 공개를 금지합니다</li>
                <li>상업적 홍보는 홍보게시판을 이용해주세요</li>
                <li>허위정보 유포 시 제재를 받을 수 있습니다</li>
              </ul>
            </div>
          </aside>
        </main>
      </MainLayOut>
    </MainPageMainStyle>
  );
};

export default BoardListPage;
