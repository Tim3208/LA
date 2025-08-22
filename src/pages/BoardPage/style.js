import styled from "styled-components";

/* ========== Container ========== */
export const Container = styled.main`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  background: #f9fafb;
  color: #000;
  font-family: "Pretendard", sans-serif;
  width: 100%;
`;

export const Header = styled.header``;

/* ========== Recommend Section ========== */
export const RecommendSection = styled.section`
  background: #f0f7ff;
  border: 1px solid #bedbff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto 40px auto;
  box-shadow: 0px 0px 4px 0px #0000004d;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecommendLeft = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #2563eb;
  gap: 8px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 6px;
  background: ${(props) => props.bg || "#2563eb"};
  color: ${(props) => props.color || "#fff"};
`;

export const RecommendRight = styled.div`
  gap: 18px;
`;

export const ButtonSmall = styled.span`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #bcc4d5;
  border-radius: 8px;
  cursor: pointer;
`;

/* ========== Board List ========== */
export const BoardList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoardItem = styled.article`
  background: #fff;
  border: 1px solid #dceaff;
  border-radius: 6px;
  margin-top: 16px;
  box-shadow: 0px 0px 3px 0px #00000040;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoardHeader = styled.div`
  margin: 24px 0 8px 0;
`;

export const BoardTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  margin-left: -1px;
`;

export const BoardDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #7b8292;
  margin-bottom: 8px;
  margin-left: -1px;
`;

export const BoardReason = styled.p`
  font-size: 16px;
  color: #2563eb;
  border-radius: 4px;
  margin-bottom: 24px;
`;

/* ========== Toolbar ========== */
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: #2563eb;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border-radius: 6px;
  margin-right: 16px;
  height: 40px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #bcc4d5;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  width: 600px;
  height: 40px;
`;

export const Filters = styled.div`
  display: flex;
`;

export const FilterButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 16px;
  border: 1px solid #bcc4d5;
  background: #fff;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

/* ========== Pagination ========== */
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  gap: 6px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #bcc4d5;
  background: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border-radius: 8px;
  cursor: pointer;
`;
