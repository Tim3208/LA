import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
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

import {
 MessageSquare,
 Bell,
 Users,
 Newspaper,
 TrendingUp

} from "lucide-react";

const IconWrapper = styled.div`
  background-color: #2563eb ;
  padding: 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;


const BoardListPage = () => {
  return (
    <MainLayOut>
      <Container>
        {/* Left - Boards */}
        <Boards>
          <BoardCard>
            <InfoWrapper>
              <IconWrapper>
                <MessageSquare size={48} color="white" />
              </IconWrapper>
              <TextWrapper>
                <BoardTitle>자유게시판</BoardTitle>
                <BoardText>자유롭게 소통하는 공간</BoardText>
              </TextWrapper>
            </InfoWrapper>   
            <InfoTodayWrapper>
              <Info>총 1,234개 게시글</Info>
              <Today>오늘 +45</Today>
            </InfoTodayWrapper>
          </BoardCard>

          <BoardCard>
            <InfoWrapper>
              <IconWrapper>
                <Bell size={48} color="white"/>
              </IconWrapper>
              <TextWrapper>
                <BoardTitle>홍보게시판</BoardTitle>
                <BoardText>개인 및 소상공인 홍보</BoardText>
              </TextWrapper>
            </InfoWrapper>
            <InfoTodayWrapper>
              <Info>총 567개 게시글</Info>
              <Today>오늘 +23</Today>
            </InfoTodayWrapper>
          </BoardCard>

          <BoardCard>
            <InfoWrapper>
              <IconWrapper>
                <Users size={48} color="white"/>
              </IconWrapper>
              <TextWrapper>
              <BoardTitle>지역홍보게시판</BoardTitle>
              <BoardText>공식 지역 홍보 게시물</BoardText>
              </TextWrapper>
            </InfoWrapper>
            <InfoTodayWrapper>
              <Info>총 234개 게시글</Info>
              <Today>오늘 +8</Today>
            </InfoTodayWrapper>
          </BoardCard>

          <BoardCard>
            <InfoWrapper>
              <IconWrapper>
                <Newspaper size={48} color="white"/>
              </IconWrapper>
              <TextWrapper> 
                <BoardTitle>뉴스게시판</BoardTitle>
                <BoardText>지역 관련 뉴스와 소식</BoardText>
              </TextWrapper> 
            </InfoWrapper>
            <InfoTodayWrapper>
              <Info>총 890개 게시글</Info>
              <Today>오늘 +34</Today>
            </InfoTodayWrapper>
          </BoardCard>

          <BoardCard>
            <InfoWrapper>
              <IconWrapper>
                <TrendingUp size={48} color="white"/>
              </IconWrapper>
              <TextWrapper>
              <BoardTitle>핫게시판</BoardTitle>
                <BoardText>인기 있는 게시글 모음</BoardText>
              </TextWrapper>
            </InfoWrapper>
            <InfoTodayWrapper>
              <Info>총 456개 게시글</Info>
              <Today>오늘 +67</Today>
            </InfoTodayWrapper>
          </BoardCard>
        </Boards>

        {/* Right - Sidebar */}
        <Sidebar>
          {/* Recent Posts */}
          <Recent>
            <SectionHeaderWrapper>
            <SectionHeader>최근 게시글</SectionHeader>
            <SectionSubtitle>강남구의 최신 소식</SectionSubtitle>
            </SectionHeaderWrapper>

            <PostCard>
              <PostHeader>
                <Category>자유게시판</Category>
                <Tag type="hot">HOT</Tag>
              </PostHeader>
              <Title>게시물의 제목을 입력하는 란입니다</Title>
              <Meta>뉴스봇 · 8시간 전</Meta>
            </PostCard>

            <PostCard>
              <PostHeader>
                <Category>홍보게시판</Category>
                <Tag>공식</Tag>
              </PostHeader>
              <Title>게시물의 제목을 입력하는 란입니다</Title>
              <Meta>뉴스봇 · 8시간 전</Meta>
            </PostCard>

            <PostCard>
              <PostHeader>
                <Category>뉴스게시판</Category>
                <Tag>뉴스</Tag>
              </PostHeader>
              <Title>게시물의 제목을 입력하는 란입니다</Title>
              <Meta>뉴스봇 · 8시간 전</Meta>
            </PostCard>
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

