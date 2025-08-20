import { MainLayOutFooterStyled } from "./style";

const MainLayOutFooter = () => {
  return (
    <MainLayOutFooterStyled className="flexBetweenCol">
      {/* 중앙 */}
      <div>
        {/* 상단 */}
        <div className="flexBetween">
          {/* 사이트정보 */}
          <div className="site-info">
            {/* title */}
            <h2>LA</h2>
            {/* 설명 */}
            <p>
              우리지역의 다양한 이벤트를 한눈에 확인 <br />
              하고 저장할 수 있는 플랫폼
            </p>
          </div>

          {/* 목록 */}
          <nav className="flexBetween list">
            <ul>
              <li className="ul-title">서비스</li>
              <li>캘린더</li>
              <li>게시판</li>
              <li>AI 큐레이터</li>
            </ul>
            <ul>
              <li className="ul-title">고객지원</li>
              <li>FAQ</li>
              <li>Q&A</li>
            </ul>
            <ul>
              <li className="ul-title">Front</li>
              <a href="">
                <li>박정우</li>
              </a>
              <a href="">
                <li>오금서</li>
              </a>
            </ul>
            <ul>
              <li className="ul-title">Back</li>
              <a href="">
                <li>김나혜</li>
              </a>
              <a href="">
                <li>이찬영</li>
              </a>
            </ul>
          </nav>
        </div>
        {/* 하단 */}
        <div className="bottom flexBetween flexHeightCenter">
          <span>© 2025 LocalAi. All rights reserved.</span>
          <a href="https://github.com/Tim3208/LA" className="icon">
            {/* FIXME: ICON 추가 */}
          </a>
        </div>
      </div>
    </MainLayOutFooterStyled>
  );
};
export default MainLayOutFooter;
