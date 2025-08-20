import { css } from "styled-components";

export const flexWidthCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexHeightCenter = css`
  display: flex;
  align-items: center;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const flexBetweenCol = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

// 사용법 예시
// import styled from 'styled-components';
// import { flexCenter, flexBetween } from '../style/mixins';

// const CenteredBox = styled.div`
//   ${flexCenter};
//   height: 100px;
//   background-color: ${({ theme }) => theme.colors.blue[90]};
//   background-color: var(--blue-90);
//   color: white;
// `;
