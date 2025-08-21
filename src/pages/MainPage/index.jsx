import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
import MainPageCardsCP from "../../components/MainPageCP/MainPageCardsCP";
import MainLayOut from "../../layout/MainLayOut";
import { MainPageMainStyle } from "./style";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
