import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import theme from "./style/theme";

// 페이지 모음
import MainPage from "./pages/MainPage";
import AiPage from "./pages/AiPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />

        {/* 게시판 목록 */}

        {/* Ai 페이지 */}
        <Route path="/ai" element={<AiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
