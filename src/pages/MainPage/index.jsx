import MainPageTitleCP from "../../components/MainPageCP/MainPageTitleCP";
import MainLayOut from "../../layout/MainLayOut";
import { MainPageMainStyle } from "./style";

const MainPage = () => {
  return (
    <MainPageMainStyle>
      <MainLayOut>
        {/* 메인 타이틀 */}
        <MainPageTitleCP />

        {/* 메인 카드 */}

        {/* 하단 베너 */}
      </MainLayOut>
    </MainPageMainStyle>
  );
};

export default MainPage;
