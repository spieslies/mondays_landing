import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 14px;
  ${p =>
    p.block &&
    css`
      display: block !important;
    `}
  ${p =>
    p.required &&
    css`
      &:after {
        content: '*';
        position: relative;
        color: ${p => p.theme.colors.danger};
        left: 5px;
      }
    `} ${p =>
  p.bold &&
  css`
    font-weight: 500;
  `}
  > small {
    display: block;
    font-weight: 300;
  }
`;

export default Label;
