import { useState } from "react";
import styled from "styled-components";
import { Check, ChevronDown } from "lucide-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.div`
  border-bottom: 1px solid var(--gray-60);
`;

/** 질문버튼, 누르면 answer 내용 드랍 */
const Header = styled.button`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  text-align: left;
  border-radius: 8px 8px 0 0;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    background: var(--gray-30);
  }
`;

/** 질문버튼 내부 question 내용 */
const Question = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const StyledIcon = styled.span`
  width: 15px;
  height: 15px;
  color: var(--blue-100);
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.4s ease;
`;

const AnswerWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const Answer = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  color: var(--gray-5);
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

/**
 *
 * @param {{Array}} items 질문과 답변의 배열. 객체 배열로, 각 객체는 id, question, answer 속성을 가짐.
 * @returns SimpleAccordionCP는 질문을 클릭하면 답변이 드랍다운 형태로 나타나는 컴포넌트.
 */
function SimpleAccordionCP({ items }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  return (
    <Container>
      {items.map((item) => {
        const isOpen = openItem === item.id;
        return (
          <Item key={item.id}>
            <Header onClick={() => toggleItem(item.id)}>
              <Question>{item.question}</Question>
              <StyledIcon>
                <ChevronDown isOpen={isOpen} />
              </StyledIcon>
            </Header>
            <AnswerWrapper isOpen={isOpen}>
              <Answer isOpen={isOpen}>{item.answer}</Answer>
            </AnswerWrapper>
          </Item>
        );
      })}
    </Container>
  );
}

export default SimpleAccordionCP;
