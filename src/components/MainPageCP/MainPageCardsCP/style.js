import styled from "styled-components";

export const MainPageCardsCPMainStyle = styled.main`
  background: var(--main-page-bg);
  padding: 0 2rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-bottom: 4rem;
`;

// ----- Content Column -----
export const ContentColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > div:nth-child(1) {
    flex: 1;
  }

  & > div:nth-child(2) {
    width: 384px;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

// ----- 이벤트 (왼쪽 박스) -----
export const Events = styled.section`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Title, 전체보기 wrapper */
  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Icon + Title */
  & > div > div > div:nth-child(1) {
    display: flex;
    gap: 5px;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .subtitle {
    color: var(--gray-80);
  }
`;

export const ViewAll = styled.a`
  display: block;
  text-align: right;
  margin-top: 10px;
`;

export const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & li {
    display: flex;
    background: var(--gray-30);
    padding: 20px;
    border-radius: 8px;
    justify-content: space-between;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 7px;

      .info-top {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 300;
        gap: 12px;

        & > span:nth-child(1) {
          background: var(--gray-40);
          border-radius: 8px;
          padding: 6px 10px;
          color: black;
        }

        & > span:nth-child(2) {
          color: var(--gray-90);
        }
      }

      .info-title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .info-bottom {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--gray-90);
        font-size: 1rem;
        font-weight: 400;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--gray-90);
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
`;

// ----- 맞춤 추천 -----
export const Recommendations = styled.section`
  background-color: var(--blue-light-2);
  padding: 2rem;
  border: 1px solid var(--blue-70);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const RecCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RecItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem;
  border: 1px solid var(--blue-60);
  border-radius: 8px;
  gap: 0.5rem;

  & > div:nth-child(1) {
    display: flex;
    gap: 0.5rem;
  }

  & > h4 {
    font-size: 1.5rem;
    font-weight: 800;
    color: black;
  }

  & > p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-70);
  }

  .date-info {
    display: flex;
    justify-content: space-between;
  }

  .date-info > div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--gray-90);

    & > span {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;

// ----- 챗봇 -----
export const Chatbot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1.25rem;
  border: 1px solid var(--blue-60);
  border-radius: 8px;

  & > div > div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h4 {
      font-size: 1.5rem;
      font-weight: 700;
      color: black;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--gray-70);
    }
  }
`;
