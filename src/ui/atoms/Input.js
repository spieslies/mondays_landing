import styled, { css } from 'styled-components';

export const Input = styled.input`
  display: block;
  border: 0;
  width: 100%;
  line-height: 1.7;
  background: transparent;
  font-weight: 700;
  padding-left: 8px;
  :read-only {
    border-color: ${p => p.theme.colors.grays.light};
    color: ${p => p.theme.colors.grays.regular};
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${p => p.theme.colors.grays.regular};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${p => p.theme.colors.grays.regular};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${p => p.theme.colors.grays.regular};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${p => p.theme.colors.grays.regular};
  }
  ${p =>
    p.error &&
    css`
      border-color: ${p => p.theme.colors.red};
    `};
`;

export default Input;
