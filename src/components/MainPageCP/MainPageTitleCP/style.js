import styled from "styled-components";

export const MainPageTitleCPMainStyle = styled.main`
  background: var(--main-page-bg);
  background: #aaf;
  padding: 0 2rem;

  .container {
    margin: 4rem auto;
    max-width: 1440px;
  }

  // AI 추천 카드
  .ai-card {
    background-color: var(--blue-100);
    color: #fff;
    padding: 40px 45px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > section > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > section > div:nth-child(1) > div {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }

  .label {
    width: 150px;
    padding: 10px 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.25);
    font-weight: 600;
    font-size: 1rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 38px;
  }

  .desc {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 26px;
  }

  /* 버튼 */
  .top-buttons {
    display: flex;
    gap: 23px;
  }

  /* Bottom features */
  .bottom-features {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      background: rgba(255, 255, 255, 0.15);
      flex: 1;
      padding: 12px 14px;
      border-radius: 8px;
      text-align: left;
      font-size: 0.75rem;
      font-weight: 300;
    }

    // 아이콘, strong 배치
    & > div > div {
      display: flex;
      justfiy-content: flex-start;
      gap: 9px;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
