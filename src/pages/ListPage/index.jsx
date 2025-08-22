import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayOut from "../../layout/MainLayOut";
import styled from "styled-components";

import {
  Container,
  Boards,
  BoardCard,
  BoardTitle,
  BoardText,
  InfoTodayWrapper,
  Info,
  Today,
  Sidebar,
  Recent,
  Guide,
  SectionHeaderWrapper,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  PostCard,
  PostHeader,
  Category,
  Tag,
  Title,
  Meta,
  SidebarList,
  TextWrapper,
  InfoWrapper,
} from "./style";

import { MessageSquare, Bell, Users, Newspaper, TrendingUp } from "lucide-react";

const IconWrapper = styled.div`
  background-color: #2563eb;
  padding: 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

const boards = [
  { id: "free", title: "자유게시판", desc: "자유롭게 소통하는 공간", icon: MessageSquare, total: 1234, today: 45 },
  { id: "promo", title: "홍보게시판", desc: "개인 및 소상공인 홍보", icon: Bell, total: 567, today: 23 },
  { id: "local", title: "지역홍보게시판", desc: "공식 지역 홍보 게시물", icon: Users, total: 234, today: 8 },
  { id: "news", title: "뉴스게시판", desc: "지역 관련 뉴스와 소식", icon: Newspaper, total: 890, today: 34 },
  { id: "hot", title: "핫게시판", desc: "인기 있는 게시글 모음", icon: TrendingUp, total: 456, today: 67 },
];

const BoardListPage = () => {
  const navigate = useNavigate();

  /* ✅ recentPosts는 변동 가능 (state 관리) */
  const [recentPosts, setRecentPosts] = useState([]);

  // 지금은 더미 데이터로 세팅 (나중에 API 연결 가능)
  useEffect(() => {
    const dummyPosts = [
      { id: 1, category: "자유게시판", tag: "HOT", title: "게시물의 제목을 입력하는 란입니다", meta: "뉴스봇 · 8시간 전" },
      { id: 2, category: "홍보게시판", tag: "공식", title: "게시물의 제목을 입력하는 란입니다", meta: "관리자 · 10시간 전" },
      { id: 3, category: "뉴스게시판", tag: "뉴스", title: "게시물의 제목을 입력하는 란입니다", meta: "뉴스봇 · 1일 전" },
    ];
    setRecentPosts(dummyPosts);
  }, []);

  return (
    <MainLayOut>
      <Container>
        {/* Left - Boards */}
        <Boards>
          {boards.map((board) => {
            const Icon = board.icon;
            return (
              <BoardCard key={board.id} onClick={() => navigate(`/boards/${board.id}`)}>
                <InfoWrapper>
                  <IconWrapper>
                    <Icon size={32} color="white" />
                  </IconWrapper>
                  <TextWrapper>
                    <BoardTitle>{board.title}</BoardTitle>
                    <BoardText>{board.desc}</BoardText>
                  </TextWrapper>
                </InfoWrapper>
                <InfoTodayWrapper>
                  <Info>총 {board.total}개 게시글</Info>
                  <Today>오늘 +{board.today}</Today>
                </InfoTodayWrapper>
              </BoardCard>
            );
          })}
        </Boards>

        {/* Right - Sidebar */}
        <Sidebar>
          {/* Recent Posts */}
          <Recent>
            <SectionHeaderWrapper>
              <SectionHeader>최근 게시글</SectionHeader>
              <SectionSubtitle>강남구의 최신 소식</SectionSubtitle>
            </SectionHeaderWrapper>

            {recentPosts.map((post) => (
              <PostCard key={post.id}>
                <PostHeader>
                  <Category>{post.category}</Category>
                  <Tag type={post.tag === "HOT" ? "hot" : ""}>{post.tag}</Tag>
                </PostHeader>
                <Title>{post.title}</Title>
                <Meta>{post.meta}</Meta>
              </PostCard>
            ))}
          </Recent>

          {/* Guide */}
          <Guide>
            <SectionTitle>게시판 이용 안내</SectionTitle>
            <SidebarList>
              <li>서로 존중하며 건전한 소통을 해주세요</li>
              <li>개인정보 및 연락처 공개를 금지합니다</li>
              <li>상업적 홍보는 홍보게시판을 이용해주세요</li>
              <li>허위정보 유포 시 제재를 받을 수 있습니다</li>
            </SidebarList>
          </Guide>
        </Sidebar>
      </Container>
    </MainLayOut>
  );
};

export default BoardListPage;
