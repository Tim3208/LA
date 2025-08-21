import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import { LocationProvider } from "@/contexts/LocationContext";

// 페이지 모음
import MainPage from "./pages/MainPage";
import AiPage from "./pages/AiPage";
import ListPage from "./pages/ListPage";
import MyPage from "./pages/MyPage";

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

          {/* 마이페이지 */}
          <Route path="/myPage" element={<MyPage />} />

          {/* Ai 페이지 */}
          <Route path="/ai" element={<AiPage />} />
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
