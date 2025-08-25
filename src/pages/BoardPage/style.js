import styled,{css} from "styled-components";
import { Grid2X2, List } from "lucide-react";

export const Header = styled.header`
  font-size: 36px;
  font-weight:800;
  display: flex;
  color:#2563eb;
  margin-top:40px;
  margin-left:120px;
  margin-bottom:10px;
  
`;
/* ========== Container ========== */
export const Container = styled.main`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  background: #f9fafb;
  color: #000;
  font-family: "Pretendard", sans-serif;
  width: 100%;
`;

/* ========== Recommend Section ========== */
export const RecommendSection = styled.section`
  background: #f0f7ff;
  border: 1px solid #bedbff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 1440px;
  height:423px;
  margin: 0 auto 40px auto;
  box-shadow: 0px 0px 4px 0px #0000004d;
  box-sizing: border-box;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  margin-bottom: 0;
`;

export const RecommendLeft = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #2563eb;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;


export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  weight:35px;
  height:27px;
  font-weight: 400;
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;

    ${(props) =>
    props.type === "hot" &&
    css`
      background-color: #ef4444;
      color: #fff;
    `}

  ${(props) =>
    props.type === "news" &&
    css`
      background-color: #f54900;
      color: #fff;
    `}

  ${(props) =>
    props.type === "tags" &&
    css`
      background-color: #f3f4f6;
      color: #000;
      border: 1px solid #d1d5db;
    `}
`;

export const RecommendRight = styled.div`
  gap: 16px;
`;

export const ButtonSmall = styled.span`
  width:45px;
  height:19px;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #bcc4d5;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    background-color:  RGB(188, 196, 213,90);
  }
`;



/* ========== RecommendList ========== */
export const RecommendList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
  margin-top:-16px;

`;

export const RecommendItem = styled.article`

  width: 1376px;
  height:146px;
  background: #fff;
  border: 1px solid #dceaff;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px #00000040;

  display: flex;            
  flex-direction: column;  
  justify-content: center;  

  padding: 0 32px;
  box-sizing: border-box;
  padding-top: 24px;
  margin-top: 16px;
`;

export const BoardHeader = styled.div`
  display: flex;
  gap: 9px;       
  align-items: center; 
`;

export const CategoryBadge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  border: 0.75px solid #bcc4d5;
  width:73px;
  height:22px;
  font-size: 12px;
`;

export const MatchBadge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  background: #2563eb;
  color: #fff;
  border: 0.75px solid #bcc4d5;
  width:65px;
  height:22px;
  font-size: 12px;
`;

export const TagBadge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  background: #51a2ff;
  color: #fff;
  border: 0.75px solid #bcc4d5;
  width:40px;
  height:22px;
  font-size: 12px;
`;

export const BoardTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  margin-left: -1px;
  margin-top: 8px;
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
  width: 1440px;
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

  &:hover{
    background-color:#2563eb;
  }
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
  margin-right:292px;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 16px;
  border: 1px solid #bcc4d5;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  display: flex;              
  align-items: center;         
  justify-content: center;     
  gap: 8px;
  background: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")}; 

`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 8px;
  padding: 8px; 
  cursor: pointer;
  background: ${(props) => (props.active ? "#51a2ff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#bcc4d5")}; 
`;

export const Grid2X2Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#51a2ff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#bcc4d5")}; 

`;


export const BoardList = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  display: grid;
  gap: 16px;
  grid-template-columns: ${(props) =>
    props.viewMode === "grid" ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
`;

export const BoardItem = styled.article.withConfig({
  shouldForwardProp: (prop) => prop !== "viewMode"
})`
  height: 146px;   
  width: ${(props) => (props.viewMode === "grid" ? "712px" : "1440px")};
  background: #fff;
  border: 1px solid #dceaff;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px #00000040;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px 32px 0 32px;
  box-sizing: border-box;
  margin-top: 16px;
`;

/* ========== Pagination ========== */
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 6px;
  margin-bottom: 38px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #bcc4d5;
  background: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border-radius: 8px;
  cursor: pointer;
`;

