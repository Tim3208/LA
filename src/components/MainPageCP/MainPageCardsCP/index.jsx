import {
  MainPageCardsCPMainStyle,
  Container,
  ContentColumn,
  Events,
  ViewAll,
  EventList,
  Recommendations,
  RecCards,
  RecItem,
  Chatbot,
} from "./style";
import { useState } from "react";
import {
  Bot,
  Calendar,
  MapPin,
  Heart,
  Sparkles,
  MessageSquare,
  Bell,
  Users,
  ChevronRight,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLocationContext } from "@/contexts/LocationContext";

/**
 * 메인 페이지 카드 레이아웃 컴포넌트
 */
const MainPageCardsCP = () => {
  const [heartCount, setHeartCount] = useState(0);
  const { selectedLocation, setSelectedLocation } = useLocationContext();

  const handleLikesClick = () => {
    setHeartCount(heartCount + 1);
  };
  const hotPosts = [
    {
      id: 1,
      title: "강남구 맛집 추천해주세요!",
      category: "자유게시판",
      comments: 23,
      likes: 45,
      time: "2시간 전",
    },
    {
      id: 2,
      title: "[홍보] 지역 소상공인 지원 프로그램 안내",
      category: "홍보게시판",
      comments: 12,
      likes: 67,
      time: "4시간 전",
    },
    {
      id: 3,
      title: "강남구 교통 개선 관련 소식",
      category: "뉴스게시판",
      comments: 34,
      likes: 89,
      time: "6시간 전",
    },
  ];

  return (
    <MainPageCardsCPMainStyle className="flexCenter">
      <Container>
        <ContentColumn>
          <div className="left-content">
            {/* Card: 다가오는 이벤트 */}
            <Events>
              <div>
                <div>
                  <div>
                    <Calendar />
                    <h3>다가오는 이벤트</h3>
                  </div>
                  <div className="subtitle">
                    {selectedLocation}에서 열리는 행사와 축제
                  </div>
                </div>
                <ViewAll className="hover:cursor-pointer hover:text-blue-100">
                  전체보기 &gt;
                </ViewAll>
              </div>
              <EventList>
                {/* FIXME: 실제 이벤트 데이터 map으로 렌더링 */}
                <li>
                  <div>
                    <div className="info-top">
                      <span>행사</span>
                      <span>12/25 ~ 12/28</span>
                    </div>
                    <div className="info-title">
                      멋쟁이 사자처럼 13기 해커톤
                    </div>
                    <div className="info-bottom">
                      <MapPin className="w-5" />
                      <span>서초구 aT센터</span>
                    </div>
                  </div>
                  <div>
                    <Heart
                      onClick={handleLikesClick}
                      className="hover:cursor-pointer w-6"
                    />
                    <span>{heartCount}</span>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="info-top">
                      <span>행사</span>
                      <span>12/25 ~ 12/28</span>
                    </div>
                    <div className="info-title">test</div>
                    <div className="info-bottom">
                      <MapPin className="w-5" />
                      <span>서초구 aT센터</span>
                    </div>
                  </div>
                  <div>
                    <Heart
                      onClick={handleLikesClick}
                      className="hover:cursor-pointer w-6"
                    />
                    <span>{heartCount}</span>
                  </div>
                </li>
              </EventList>
            </Events>

            {/* Card: AI 맞춤 추천 */}
            <Recommendations>
              <div className="flexBetween">
                <div className="flex flex-col gap-1 text-blue-100">
                  <div className="flexHeightCenter gap-2">
                    <Sparkles />
                    <h3>AI 맞춤 추천</h3>
                  </div>
                  <p>당신만을 위한 개인화된 행사 추천</p>
                </div>
                <ViewAll className="hover:cursor-pointer text-blue-100">
                  전체보기 &gt;
                </ViewAll>
              </div>
              <RecCards>
                <RecItem>
                  <div>
                    <Badge className="bg-blue-100 text-white">85% 매치</Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-70 text-blue-100"
                    >
                      청년창업
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-70 text-blue-100"
                    >
                      도전정신
                    </Badge>
                  </div>
                  <h4>지역 청년 창업 박람회</h4>
                  <p>
                    청년들의 도전정을 응원하는 자리로, 창의적인 아이디어와 다양
                    한 창업 사례를 통해 미래의 가능성을 함께 나누는 축제입니다.
                  </p>
                  <div className="date-info">
                    <div>
                      <span>
                        <Calendar className="w-3 h-3" />
                        09.24
                      </span>
                      <span>
                        <MapPin className="w-3 h-3" />
                        서초구청
                      </span>
                    </div>
                  </div>
                </RecItem>
                <RecItem>
                  <div>
                    <Badge className="bg-blue-100 text-white">92% 매치</Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-70 text-blue-100"
                    >
                      힐링
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-70 text-blue-100"
                    >
                      감성
                    </Badge>
                  </div>
                  <h4>멋쟁이 사자처럼 13기 해커톤</h4>
                  <p>
                    멋쟁이 사자처럼 13기, 아이디어에 열정을 더해 현실로
                    만들어가는 우리들의 첫 해커톤!
                  </p>
                  <div className="date-info">
                    <div>
                      <span>
                        <Calendar className="w-3 h-3" />
                        08.25
                      </span>
                      <span>
                        <MapPin className="w-3 h-3" />
                        서초구 aT센터
                      </span>
                    </div>
                  </div>
                </RecItem>
              </RecCards>

              <Chatbot>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-60 rounded-lg">
                    <Bot className="w-5 h-5 text-blue-100" />
                  </div>
                  <div>
                    <h4>AI 챗봇과 대화해보세요</h4>
                    <p>
                      "이번 주말 데이트할 만한 곳 없어?" 자연스럽게 물어보세요
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href="/ai?tab=chatbot">
                    <Button size="sm" className="bg-blue-100 hover:bg-blue-110">
                      <MessageSquare className="w-4 h-4" />
                      지금 대화하기
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline">
                    예시 보기
                  </Button>
                </div>
              </Chatbot>
            </Recommendations>
          </div>

          <div className="right-content">
            {/* Quick Menu */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">빠른 메뉴</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row flex-wrap md:gap-3 gap-2">
                <Link to="/board/free" className="w-full md:w-[calc(50%-8px)]">
                  <Button
                    variant="outline"
                    className="w-full h-20 flex flex-col items-center gap-1"
                  >
                    <MessageSquare style={{ width: "20px", height: "20px" }} />
                    <span className="text-base">자유게시판</span>
                  </Button>
                </Link>
                <Link
                  to="/board/promotion"
                  className="w-full md:w-[calc(50%-8px)]"
                >
                  <Button
                    variant="outline"
                    className="w-full h-20 flex flex-col items-center gap-1"
                  >
                    <Bell style={{ width: "20px", height: "20px" }} />
                    <span className="text-base">홍보게시판</span>
                  </Button>
                </Link>
                <Link to="/board/hots" className="w-full md:w-[calc(50%-8px)]">
                  <Button
                    variant="outline"
                    className="w-full h-20 flex flex-col items-center gap-1"
                  >
                    <Flame style={{ width: "20px", height: "20px" }} />
                    <span className="text-base">인기게시판</span>
                  </Button>
                </Link>
                <Link to="/ai" className="w-full md:w-[calc(50%-8px)]">
                  <Button
                    variant="outline"
                    className="w-full h-20 flex flex-col items-center gap-1"
                  >
                    <Bot style={{ width: "20px", height: "20px" }} />
                    <span className="text-base">AI 큐레이터</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hot Posts */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Flame />
                  인기 게시글
                </CardTitle>

                <Link
                  to="/board/hot"
                  className="flex justify-end hover:text-blue-100"
                >
                  더보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardHeader>
              <CardContent className="space-y-3">
                {hotPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-3 bg-mainPageBg rounded-lg hover:bg-gray-30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.time}</span>
                    </div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </ContentColumn>
      </Container>
    </MainPageCardsCPMainStyle>
  );
};
export default MainPageCardsCP;
