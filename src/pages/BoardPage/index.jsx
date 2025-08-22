import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayOut from "../../layout/MainLayOut";
import {
  Container,
  Header,
  RecommendSection,
  SectionTitle,
  RecommendLeft,
  Badge,
  RecommendRight,
  ButtonSmall,
  BoardList,
  BoardItem,
  BoardHeader,
  BoardTitle,
  BoardDesc,
  BoardReason,
  Toolbar,
  SectionLeft,
  Input,
  Filters,
  FilterButton,
  Pagination,
  PageButton,
} from "./style";

import {
  Sparkles,
  Clock,
  Heart,
  MessageSquare,
  Grid2x2,
  List,
} from "lucide-react";

const BoardPage = () => {
  const [activePage, setActivePage] = useState(1);

  const recommendPosts = [
    {
      id: 1,
      category: "홍보게시판",
      match: "66%매치",
      title: "[홍보] 새로 오픈한 카페 방문해보세요!",
      desc: "강남역 2번 출구 근처 새 카페 오픈, 이벤트 진행 중!",
      reason: "추천 이유: 최근 맛집/카페 관련 게시글을 자주 보셨어요.",
    },
    {
      id: 2,
      category: "홍보게시판",
      match: "68%매치",
      tag: "공식",
      title: "[홍보] 지역 소상공인 지원 프로그램 안내드립니다.",
      desc: "강남구 소상공인 분들을 위한 다양한 지원책을 소개합니다.",
      reason: "추천 이유: 공식 계정의 신뢰할 수 있는 공지예요.",
    },
  ];

  const posts = [
    {
      id: 1,
      hot: true,
      news: true,
      tags: ["#교통", "#공사", "#뉴스"],
      title: "강남구 교통 개선 관련 최신 소식",
      desc: "강남대로 일대 교통 체계 개선 공사가 다음 달부터 시작됩니다. 우회 경로를 미리 확인해주세요.",
      meta: "뉴스봇 · 8시간 전",
    },
    {
      id: 2,
      hot: true,
      news: false,
      tags: ["#공지", "#공식", "#지원"],
      title: "[홍보] 지역 소상공인 지원 프로그램 안내드립니다.",
      desc: "강남구에서 소상공인을 위한 다양한 지원 프로그램을 운영하고 있습니다. 자세한 내용은 구청 홈페이지를 확인해주세요.",
      meta: "강남구청 · 9시간 전",
    },
    {
      id: 3,
      hot: false,
      news: false,
      tags: ["#교통", "#맛집", "#활동"],
      title: "게시물 제목을 입력하는 란입니다",
      desc: "게시물에 대한 내용을 요약해서 적는 란입니다.",
      meta: "이용자 · 10시간 전",
    },
    {
      id: 4,
      hot: false,
      news: false,
      tags: ["#공지", "#행사"],
      title: "게시물 제목을 입력하는 란입니다",
      desc: "게시물의 내용이 들어가는 공간입니다.",
      meta: "뉴스봇 · 1일 전",
    },
    {
      id: 5,
      hot: false,
      news: false,
      tags: ["#소통", "#잡담"],
      title: "게시물 제목을 입력하는 란입니다",
      desc: "게시물의 내용이 들어가는 공간입니다.",
      meta: "이용자 · 2일 전",
    },
  ];

  return (
    <MainLayOut>
      <Container>
        <RecommendSection>
          <SectionTitle>
            <RecommendLeft>
              <Sparkles size={24} color="#2563eb" />
              AI 맞춤 추천 <Badge>개인화</Badge>
            </RecommendLeft>
            <RecommendRight>
              <ButtonSmall>새로고침</ButtonSmall>
              <ButtonSmall>숨기기</ButtonSmall>
            </RecommendRight>
          </SectionTitle>

          <BoardList>
            {recommendPosts.map((post) => (
              <BoardItem key={post.id}>
                <BoardHeader>
                  {post.category && (
                    <Badge bg="#fff" color="#000">
                      {post.category}
                    </Badge>
                  )}
                  {post.match && <Badge>{post.match}</Badge>}
                  {post.tag && <Badge bg="#51A2FF">{post.tag}</Badge>}
                </BoardHeader>
                <BoardTitle>{post.title}</BoardTitle>
                {post.desc && <BoardDesc>{post.desc}</BoardDesc>}
                {post.reason && <BoardReason>{post.reason}</BoardReason>}
              </BoardItem>
            ))}
          </BoardList>
        </RecommendSection>

        <Toolbar>
          <SectionLeft>+ 글쓰기</SectionLeft>
          <Input placeholder="게시글 검색..." />
          <Filters>
            <FilterButton>
              <Clock size={24} color="#000" />
              최신순
            </FilterButton>
            <FilterButton>
              <Heart size={24} color="#000" />
              인기순
            </FilterButton>
            <FilterButton>
              <MessageSquare size={24} color="#000" />
              댓글순
            </FilterButton>
          </Filters>
          {/* <IconWrapper>
            <Grid2x2 size={20} color="#000" />
          </IconWrapper>
          <IconWrapper>
            <List size={20} color="#000" />
          </IconWrapper> */}
        </Toolbar>

        <BoardList>
          {posts.map((post) => (
            <BoardItem key={post.id}>
              <BoardHeader>
                {post.hot && <Badge bg="#ef4444">HOT</Badge>}
                {post.news && <Badge bg="#f54900">뉴스</Badge>}
                {post.tags.map((tag) => (
                  <Badge key={tag} bg="#fff" color="#000">
                    {tag}
                  </Badge>
                ))}
              </BoardHeader>
              <BoardTitle>{post.title}</BoardTitle>
              <BoardDesc>{post.desc}</BoardDesc>
              <BoardReason>{post.meta}</BoardReason>
            </BoardItem>
          ))}
        </BoardList>

        <Pagination>
          <PageButton
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
          >
            이전
          </PageButton>
          {[1, 2, 3].map((num) => (
            <PageButton
              key={num}
              active={activePage === num}
              onClick={() => setActivePage(num)}
            >
              {num}
            </PageButton>
          ))}
          <PageButton
            onClick={() => setActivePage((prev) => Math.min(prev + 1, 3))}
          >
            다음
          </PageButton>
        </Pagination>
      </Container>
    </MainLayOut>
  );
};

export default BoardPage;
