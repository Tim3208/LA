import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalstyle";
import theme from "./style/theme";

// 페이지 모음
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
