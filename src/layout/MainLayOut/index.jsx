import MainLayOutFooter from "./Footer";
import MainLayOutHeader from "./Header";

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
