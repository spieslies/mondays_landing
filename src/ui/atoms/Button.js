import styled, { css } from 'styled-components';
import { hiddenMixin } from 'ui/helpers';

export const Button = styled.button`
  background: ${p => p.theme.colors.primary};
  color: white;
  width: 240px;
  height: 60px;
  border-radius: 5px;
  font-size: ${p => p.theme.font.size.smaller};
  font-weight: 900;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: background-color 133ms ease-in-out;
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
  ${p => p.link && css`
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
      box-shadow: none;
    }
  `}
  ${hiddenMixin}
`;

export default Button;
