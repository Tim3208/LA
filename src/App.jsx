import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import { Toaster } from "sonner";
import { LocationProvider } from "@/contexts/LocationContext";

// 페이지 모음
import MainPage from "./pages/MainPage";
import AiPage from "./pages/AiPage";
import ListPage from "./pages/ListPage";
import MyPage from "./pages/MyPage";
import FaqPage from "./pages/FaqPage";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Toaster />
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<MainPage />} />

          {/* 게시판 목록 페이지 */}
          <Route path="/list" element={<ListPage />} />

          <Route path="/board" element={<BoardPage />} />

          {/* Ai 페이지 */}
          <Route path="/ai" element={<AiPage />} />

          {/* 마이페이지 */}
          <Route path="/myPage" element={<MyPage />} />

          {/* FAQ 페이지 */}
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
