import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height:700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #d1d5db;
  border-radius:8px;
  margin-bottom:38px;
`;
export const Header = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 8px;
  padding-top: 64px;
  padding-left: 120px;
`;
export const PostWrapper = styled.div`
   padding: 22px 22px 0 22px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;

`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.span`
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 13px;
  width:50px;
`;

export const ContentWrapper = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 12px;
   height:520px;
`;

export const Content = styled.p`
  font-size: 16px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 30px;

`;

/* 댓글 모달 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height:700px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  padding: 20px;

`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    align-self: flex-end;
    padding: 8px 12px;
    cursor: pointer;
  }
`;

export const CommentList = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

export const CommentInput = styled.input`
  width: 700px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
`;


export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; // 필요에 따라 flex-end로 바꿔서 오른쪽 정렬 가능
  align-items: center;
  gap: 10px;
  
  position: absolute;   // 모달 기준으로 절대 위치
  bottom: 40px;         // 모달 아래에서 20px 위
  left: 20px;           // 왼쪽 여백
  right: 20px;          // 필요시 오른쪽 여백

`;
export const SubmitButton = styled.div`
  width: 60px;
  height: 30px;
  display: flex;             // Flex 컨테이너로 변경
  justify-content: center;   // 가로 중앙
  align-items: center;       // 세로 중앙
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color:#2563eb;
  color:#fff;
`;

export const CloseButton = styled.div`
   position: absolute;  // 부모 Modal 기준
  top: 20px;           // 위에서 20px
  right: 20px;         // 오른쪽에서 20px
  cursor: pointer;     // 클릭 커서

`;