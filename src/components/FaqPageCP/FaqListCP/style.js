import styled from "styled-components";

export const FaqsList = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 300;
  background: ${({ active }) => (active ? "var(--blue-100)" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "var(--gray-90)")};
`;
