import styled from "styled-components";

const OutLineButtonCPStlye = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: "8px 12px";
  border-radius: "8px";
  color: var(${color});
  background: ${({ bgColor }) => (bgColor ? `var(${bgColor})` : "none")};
  border: 1px solid
    ${({ borderColor, color }) => `var(${borderColor})` || `var(${color})`};
`;

/**
 *
 * @param children 태그 속 내용
 * @param {ReactNode} icon 버튼 좌측에 표시할 아이콘 컴포넌트
 * @param {string} color 글자와 테두리 색을 정한다. (기본값: #FFF)
 * @param {string} borderColor 테두리 색을 정한다. (기본값: color와 동일)
 * @param {string} bgColor 배경 색을 정한다. (기본값: none)
 * @returns OutLineButtonCP 는 _common에 속하며, 해당 태그로 감싼 글자를 span으로 color의 테두리와 글자색을 만드는 css 적용
 */
const OutLineButtonCP = ({ icon, children, color = "#FFF", borderColor }) => {
  return (
    <OutLineButtonCPStlye color={color} borderColor={borderColor}>
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
    </OutLineButtonCPStlye>
  );
};
export default OutLineButtonCP;
