import MainLayOutFooter from "./Footer";
import MainLayOutHeader from "./Header";

/** Header, Footer를 배치하고 사이에 <div>{children}</div> 부여하는 레이아웃*/
const MainLayOut = ({ children }) => {
  return (
    <div>
      <>
        <MainLayOutHeader />
        {/* FIXME: 헤더 픽스 여부에 따라 스타일 조정  style={{ paddingTop: "70px" }}*/}
        <div>{children}</div>
        <MainLayOutFooter />
      </>
    </div>
  );
};
export default MainLayOut;
