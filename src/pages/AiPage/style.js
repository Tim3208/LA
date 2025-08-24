import styled from "styled-components";

export const AiPageMainStyle = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--main-page-bg);
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
