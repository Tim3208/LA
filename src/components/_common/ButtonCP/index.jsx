import styled from "styled-components";

const ButtonCPStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: "8px 12px";
  border-radius: "8px";
  background-color: var(${bgColor});
  color: var(${fontColor});
`;

/**
 *
 * @param children 태그 속 내용
 * @param {ReactNode} icon 버튼 좌측에 표시할 아이콘 컴포넌트
 * @param {string} bgColor 배경 색을 정한다. (기본값: --blue-100)
 * @param {string} fontColor 글자 색을 정한다. (기본값: white)
 * @returns ButtonCP 는 _common에 속하며, 해당 태그로 감싼 글자를 span으로 blue css 적용
 */
const ButtonCP = ({
  onClick,
  children,
  icon,
  bgColor = "--blue-100",
  fontColor = "white",
}) => {
  return (
    <ButtonCPStyle bgColor={bgColor} fontColor={fontColor} onClick={onClick}>
      {icon && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginRight: "0.5em",
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </ButtonCPStyle>
  );
};
export default ButtonCP;
