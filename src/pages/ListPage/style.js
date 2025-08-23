import styled, { createGlobalStyle } from "styled-components";


/* ========================
   Reset & 기본 스타일
   ======================== */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pretendard", sans-serif;
  }

  body {
    background-color: #f5f6fa;
    color: #333;
  }
`;

/* ========================
   Header
   ======================== */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  height: 65px;
`;

/* ========================
   Layout
   ======================== */
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 384px;
  gap: 32px;
  width:1440px;
  margin: 0 auto;
  box-sizing: border-box;
`;

/* ========================
   Boards
   ======================== */
export const IconWrapper = styled.div`
  background-color: #2563eb ;
  padding: 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

export const Boards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 64px 0 250px 0;
`;

export const BoardCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:496px;
  height: 144px;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px #00000040;

`;


export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;  
  gap: 12px;                
`;


export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const BoardTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const BoardText = styled.p`
  font-size: 16px;
  color: #7b8292;
  margin: 0;
`;

export const InfoTodayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin: 0;
`;

export const Today = styled.p`
  color: #2563eb;
  margin: 0;
`;

/* ========================
   Sidebar
   ======================== */
export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 64px;
`;

export const SidebarBox = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
  width: 384px;
`;

export const Recent = styled(SidebarBox)`
  height: 420px;
  weight: 384px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px #0000004D;

`;

export const Guide = styled(SidebarBox)`
  height: 209px;
  padding: 24px;
  box-shadow: 0px 0px 5px 0px #0000004D;
  margin-bottom: 100px;
`;

/* Sidebar 타이틀, 텍스트, 리스트 */
export const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 8px;
  margin: 0;
`;

export const SectionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 32px;
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7b8292;
  margin:0;
`;

export const SidebarList = styled.ul`
  list-style: disc;
  padding-left: 24px;
  padding-bottom: 32px;
  font-size: 16px;
  font-weight: 400;
  color: #7b8292;
  margin-bottom: 8px;
  font-family: Work Sans;
  li {
    margin-bottom: 8px; 
  }

`;

/* ========================
   Post Card
   ======================== */
export const PostCard = styled.div`
  background: #f9fafb;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  height: 91px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const PostSectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;

export const Category = styled.span`
  width: 64px;
  height: 18px;
  padding: 2px 6px;
  border-radius: 6px;
  border: 0.75px solid #BCC4D5;
  font-size: 10px;
  text-align: center;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 6px;
  color: #fff;
  background: ${({ type }) => 
    type === "hot" ? "#ff4d4f" : "#2563eb"};
`;

export const Title = styled.h5`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const Meta = styled.span`
  font-size: 12px;
  color: #949494;
`;