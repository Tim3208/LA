import styled from "styled-components";

export const Container = styled.div`
  max-width: 670px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FirstCard = styled.div`
  height: 424px;
  border: 0.75px solid #98a1b4;
  border-radius: 10px;
  padding: 22px;
  background: #fff;
  gap:21px;
  margin-top:64px;
`;

export const SecondCard = styled.div`
  height: 265px;
  border: 0.75px solid #98a1b4;
  border-radius: 10px;
  padding: 22px;
  background: #fff;
  gap:21px;
`;

export const ThirdCard = styled.div`
  height: 290px;
  border: 0.75px solid #98a1b4;
  border-radius: 10px;
  padding: 22px;
  background: #fff;
  gap:21px;
`;

export const FourthCard = styled.div`
  height: 153px;
  border: 0.75px solid #98a1b4;
  border-radius: 10px;
  padding: 22px;
  background: #fff;
  gap:21px;
`;

export const LastCard = styled.div`
  height: 209px;
  border: 0.75px solid #98a1b4;
  border-radius: 10px;
  padding: 22px;
  background-color:#eff6ff;
  gap:21px;
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const SubTitle = styled.h1`
  font-size:14px;
  font-weight: 400;
  color: #4A5565;
  margin-bottom: 10px;
  flex-direction: column;
`;
export const InputWrapper=styled.div`
  display: flex;
  flex-direction: column; 
  gap: 3px; 
  margin-right: 22px;
`;

export const InputTitle= styled.h1`
  font-size:14px;
  font-weight:400;
`;

export const StyledInput = styled.input`
  width:302px;
  height:40px;
  border-radius:5px;
  border: 0.75px solid #98A1B4;
  padding: 10px 12px;
  color: #000; 
  &::placeholder {
    color: #98A1B4;

  }

`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectWrapper=styled.div`
  display: flex;
  flex-direction: column; 
  gap: 3px; 
`;

export const SelectTitle= styled.h1`
  font-size:14px;
  font-weight:400;
`;

export const StyledSelect = styled.select`
  width:302px;
  height:40px;
  border-radius:5px;
  border: 0.75px solid #98A1B4;
  color: #000;
  &::placeholder {
    color: #98a1b4;
  }

`;

export const Row = styled.div`
  width:626px;
  height: 60px;
  display: flex;

`;
export const TextWrapper=styled.div`
`;

export const TextTitle=styled.h2`
  margin-top:21px;
  margin-bottom:3px;
  font-size:14px;
`;

export const Textarea = styled.textarea`
  border: 1px solid #98a1b4;
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 16px;
  color:#98a1b4;
  width:626px;
  height: 206px;
  color: #000;
  &::placeholder {
    color: #98a1b4;
  }
`;
export const TagWrapper=styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px; 
  margin-top: 21px;
`;
export const TagTitle = styled.h2`
  font-size:17px;
;`

export const TagRow = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 8px; 
`;


export const TagInput = styled.input`
  width:567px;
  height:43px;
  border: 1px solid #98A1B4;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #000;
  &::placeholder {
    color: #98a1b4;
  }
`;

export const Button = styled.button`
  justify-content:space-between;
  width:43px;
  height:43px;
  background: #2563EB66;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #1e40af;
  }
`;

export const Select = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 14px;
`;

export const TagContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 13px;
`;


export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileUploadWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:626px;
  height:192px;
  padding: 15px;
  border: 1.5px dashed #A8A8A8;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;

  p {
    margin: 13px 0;
    font-size: 20px;
    color: #000000;
  }

  small {
    font-size: 16px;
    background: var(--light-grey);

}
`;

export const FileName = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: #6b7280;
`;

export const UploadIcon = styled.div`
  font-size: 24px;
  color: #9ca3af;
`;

export const UploadButton = styled.button`
  width:99px;
  height:40px;
  border-radius:8px;
  border: 1px solid #D2D2D2;
  margin-top:13px;
  font-size: 20px;
  color: var(--grey, #4B5563);

  &:hover {
    background-color: #f9fafb;
  }
`;


// FourthCard 안 체크박스 컨테이너
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column; // 위아래 배치
  gap: 22px; // 체크박스 사이 간격
  padding-top:21px;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  input {
    margin-right: 6px; 
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const GuideList = styled.ul`
  font-size: 16px;
  color: #7b8292;
  list-style: disc;
  padding-left: 24px;
  padding-top:32px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SubmitButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #1e40af;
  }
  margin-bottom:64px;

`;
