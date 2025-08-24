import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import { LocationProvider } from "@/contexts/LocationContext";

// 페이지 모음
import MainPage from "./pages/MainPage";
import AiPage from "./pages/AiPage";
import ListPage from "./pages/ListPage";
import MyPage from "./pages/MyPage";
import FaqPage from "./pages/FaqPage";
import BoardPage from "./pages/BoardPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<MainPage />} />

          {/* 게시판 목록 페이지 */}
          <Route path="/list" element={<ListPage />} />

          <Route path="/board/:boardId" element={<BoardPage />} />

          {/* Ai 페이지 */}
          <Route path="/ai" element={<AiPage />} />

          {/* 마이페이지 */}
          <Route path="/myPage" element={<MyPage />} />

          {/* 게시물 작성 페이지 */}
          <Route path="/create" element={<CreatePage />} />

          {/* FAQ 페이지 */}
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
