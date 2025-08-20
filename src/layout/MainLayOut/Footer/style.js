import styled from "styled-components";

export const MainLayOutFooterStyled = styled.footer`
  /* 전체 푸터 */
  width: 100%;
  background-color: var(--navy);
  color: var(--gray-90);
  padding: 2.6rem 0;

  /* 푸터 콘텐츠 래퍼 (중앙 정렬) */
  & > div {
    width: 75vw;
    max-width: 1440px;
    margin: 0 auto;
  }

  /* 사이트 타이틀 */
  & > div .site-info > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    padding-bottom: 0.5rem;
    margin-bottom: 0.6rem;
  }

  /* 사이트 설명 */
  & > div .site-info {
    width: 50%;
    line-height: 1.6rem;
  }

  /* 메뉴 리스트 (서비스, 고객지원, Front, Back) */
  & > div .list a {
    color: var(--gray-90);
  }

  & > div .list {
    width: 40%;
  }

  & > div .list ul {
    flex: 0.25;
    text-align: right;
  }

  & > div .list li {
    padding-bottom: 1.2rem;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  & > div .list li:hover {
    color: white;
  }

  /* 리스트 제목 (ul-title) */
  & .ul-title {
    color: white;
    font-weight: 700;
  }

  /* 하단 영역 (카피라이트, GitHub 링크 포함) */
  & > div .bottom {
    margin-top: 2rem;
    height: 58px;
    border-top: 1px solid var(--gray-6);
  }

  /* GitHub 아이콘 */
  & .icon {
    font-size: 1.5rem;
    color: var(--gray-90);
  }

  /* 핸드폰 */
  @media screen and (max-width: 768px) {
    & > div {
      flex-wrap: wrap;
    }
    & > div > div {
      width: 100% !important;
      flex-wrap: wrap;
    }

    & > div > div > div,
    & .list {
      width: 100% !important;
      margin-top: 1.5rem;
    }

    & > div .list ul {
      flex: unset;
      text-align: center;
      font-size: 0.85rem;
    }
  }
`;
