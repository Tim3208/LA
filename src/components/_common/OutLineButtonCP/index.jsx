import styled from "styled-components";

const OutLineButtonCPStlye = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ fontColor }) => `var(${fontColor})`};
  background: ${({ bgColor }) => (bgColor ? `var(${bgColor})` : "none")};
  border: 1px solid
    ${({ borderColor, fontColor }) =>
      borderColor
        ? borderColor.startsWith("--")
          ? `var(${borderColor})`
          : borderColor
        : fontColor.startsWith("--")
        ? `var(${fontColor})`
        : fontColor};
`;

/**
 *
 * @param children 태그 속 내용
 * @param {ReactNode} icon 버튼 좌측에 표시할 아이콘 컴포넌트
 * @param {string} fontColor 글자색을 정한다. (기본값: #FFF)
 * @param {string} borderColor 테두리 색을 정한다. (기본값: color와 동일)
 * @param {string} bgColor 배경 색을 정한다. (기본값: none)
 * @returns OutLineButtonCP 는 _common에 속하며, 해당 태그로 감싼 글자를 span으로 color의 테두리와 글자색을 만드는 css 적용
 */
export const OutLineButtonCP = ({
  icon,
  children,
  fontColor = "white",
  borderColor,
  bgColor,
}) => {
  return (
    <OutLineButtonCPStlye
      fontColor={fontColor}
      borderColor={borderColor}
      bgColor={bgColor}
    >
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
