import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    /* FIXME: css 내부 import -> public/index.html의 <head>에서 link 태그 이용해서 import하기 (렌더링 성능 향상) */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap');
    /* FIXME: Pretendard 폰트 추가 */

    :root {
      /* 파란색 계열 */
      --blue-120: #2626EB;
      --blue-110: #1447E6;
      --blue-100: #2563EB;
      --blue-90: #2B7FFF;
      --blue-80: #51A2FF;
      --blue-70: #8EC5FF;
      --blue-60: #BEDBFF;
      --blue-light-1: #7499EB;
      --blue-light-2: #EFF6FF;

      /* 배경 색상 */
      --main-page-bg: #F9FAFB;

      /* 포인트 그린 */
      --green-accent: #22C55E;

      /* 무채색 계열 */
      --black: #000000;
      --gray-100: #4A5565;
      --gray-90: #6A7282;
      --gray-80: #7B8292;
      --gray-70: #98A1B4;
      --gray-60: #BCC4D5;
      --gray-50: #CDD4E4;
      --gray-40: #E5E5E5;
      --gray-30: #F5F5F5;

      /* Footer Background Color */
      --navy: #111827;
    }



  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  body {
	  line-height: 1;
    font-family: 'Noto Sans KR', 'Roboto', 'Nanum Gothic', 'Ubuntu', 'Gothic A1', sans-serif;
  }
  ol, ul {
	  list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  }
  a, a:link, a:visited, a:hover, a:active{
    color: #202123;
    text-decoration: none;
  }

  /* Scrollbar style */
  -ms-overflow-style: auto; /* IE and Edge */
  scrollbar-width: thin; /* Firefox */

  // 가로의 중앙
  .flexWidthCenter {
    display: flex;
    justify-content: center;
  }

  // 세로의 중앙
  .flexHeightCenter {
    display: flex;
    align-items: center;
  }

  // 정중앙
  .flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flexBetween{
    display: flex;
    justify-content: space-between;
  }

  .flexBetweenCol{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

`;

export default GlobalStyle;
