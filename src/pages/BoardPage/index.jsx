import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  RecommendList,
  RecommendItem,
  BoardList,
  BoardItem,
  BoardHeader,
  CategoryBadge,
  TagBadge,
  BoardTitle,
  BoardDesc,
  BoardReason,
  Toolbar,
  SectionLeft,
  Input,
  Filters,
  FilterButton,
  IconWrapper,
  Grid2X2Icon,
  ListIcon,
  Pagination,
  PageButton,
} from "./style";

import {
  Sparkles,
  Clock,
  Heart,
  MessageSquare,
  Grid2X2,
  List,
} from "lucide-react";

const BoardPage = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [activePage, setActivePage] = useState(1);
  const [activeIcon, setActiveIcon] = useState("list");
  const [filter, setFilter] = useState("latest");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const boardNames = {
    free: "자유게시판",
    promo: "홍보게시판",
    local: "지역홍보게시판",
    news: "뉴스게시판",
    hot: "핫게시판",
  };

  const boardTitle = boardNames[boardId] || boardId || "게시판";

  const currentBoard = { title: boardId || "게시판" };
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const sortParam = filter === "latest" ? "asc" : "desc";
      const response = await fetch(
        `${BASE_URL}:3001/posts?category=${
          boardId || "free"
        }&page=${activePage}&limit=10&search=${search}&sort=${sortParam}`
      );

      if (!response.ok) throw new Error("게시글 불러오기 실패");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
      alert("게시글 로딩 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [activePage, filter, search, boardId]);

  const isHotBoard = boardId === "hot";

  return (
    <MainLayOut>
      <Header>{boardTitle}</Header>
      <Container>
        <RecommendSection>
          <SectionTitle>
            <RecommendLeft>
              <Sparkles size={24} color="#2563eb" />
              AI 맞춤 추천 <Badge>개인화</Badge>
            </RecommendLeft>
            <RecommendRight>
              <ButtonSmall onClick={fetchPosts}>새로고침</ButtonSmall>
            </RecommendRight>
          </SectionTitle>
          <RecommendList>{/* 추천글 API 연동 가능 */}</RecommendList>
        </RecommendSection>

        <Toolbar>
          <SectionLeft
            onClick={() => !isHotBoard && navigate("/create")}
            style={{
              cursor: isHotBoard ? "not-allowed" : "pointer",
              opacity: isHotBoard ? 0.5 : 1,
            }}
          >
            + 글쓰기
          </SectionLeft>
          <Input
            placeholder="게시글 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setActivePage(1)}
          />
          <Filters>
            <FilterButton
              active={filter === "latest"}
              onClick={() => setFilter("latest")}
            >
              <Clock size={24} /> 최신순
            </FilterButton>
            <FilterButton
              active={filter === "popular"}
              onClick={() => setFilter("popular")}
            >
              <Heart size={24} /> 인기순
            </FilterButton>
            <FilterButton
              active={filter === "comment"}
              onClick={() => setFilter("comment")}
            >
              <MessageSquare size={24} /> 댓글순
            </FilterButton>
          </Filters>
          <IconWrapper>
            <Grid2X2Icon
              active={activeIcon === "grid"}
              onClick={() => setActiveIcon("grid")}
            >
              <Grid2X2 size={24} />
            </Grid2X2Icon>
            <ListIcon
              active={activeIcon === "list"}
              onClick={() => setActiveIcon("list")}
            >
              <List size={24} />
            </ListIcon>
          </IconWrapper>
        </Toolbar>

        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <BoardList viewMode={activeIcon}>
            {posts.map((post) => (
              <BoardItem key={post.id} viewMode={activeIcon}>
                <BoardHeader>
                  {post.category && (
                    <CategoryBadge>{boardNames[post.category]}</CategoryBadge>
                  )}
                  {post.tags?.map((tag) => (
                    <TagBadge key={tag}>{tag}</TagBadge>
                  ))}
                  {post.likes >= 10 && <Badge type="hot">HOT</Badge>}
                </BoardHeader>
                <BoardTitle>{post.title}</BoardTitle>
                <BoardDesc>{post.content}</BoardDesc>
                <BoardReason>
                  {post.author_name} ·{" "}
                  {new Date(post.created_at).toLocaleString()}
                </BoardReason>
              </BoardItem>
            ))}
          </BoardList>
        )}

        <Pagination>
          <PageButton
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
          >
            &lt; 이전
          </PageButton>
          {[...Array(3)].map((_, i) => (
            <PageButton
              key={i + 1}
              active={activePage === i + 1}
              onClick={() => setActivePage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          <PageButton onClick={() => setActivePage((prev) => prev + 1)}>
            다음 &gt;
          </PageButton>
        </Pagination>
      </Container>
    </MainLayOut>
  );
};

export default BoardPage;
