import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
import MainPageCardsCP from "../../components/MainPageCP/MainPageCardsCP";
import MainLayOut from "../../layout/MainLayOut";
import { MainPageMainStyle } from "./style";
import { useState } from "react";

const MainPage = () => {
  const [position, setPosition] = useState("강남구");
  return (
    <MainLayOut>
      {/* Ai 추천 카드 */}
      <MainPageTitleCP />

      {/* 게시판 카드 목록 */}
      <MainPageCardsCP />
    </MainLayOut>
  );
};

export default MainPage;
