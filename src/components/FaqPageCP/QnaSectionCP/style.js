import styled from "styled-components";

export const QnaSection = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(1) {
    flex-direction: column;
    align-items: start;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    color: var(--blue-100);
    margin-right: 1rem;
  }

  & h3 {
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--blue-100);
  }

  & > div > div > p {
    color: var(--gray-100);
    font-size: 1rem;
    font-weight: 300;
  }

  /* 자주 이용하는 기능 섹션 */
  & > section > h2 {
    font-size: 1.3rem;
    font-weight: 500;
    padding-top: 1rem;
    color: var(--blue-100);
    border-top: 1px solid var(--gray-50);
  }
`;
