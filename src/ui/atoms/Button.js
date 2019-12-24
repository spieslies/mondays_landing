import styled, { css } from 'styled-components';
import { hiddenMixin } from 'ui/helpers';

export const Button = styled.button`
  background: ${p => p.theme.colors.gradientBlue};
  color: white;
  width: 279px;
  height: 48px;
  border-radius: 24px;
  font-size: ${p => p.theme.font.size.smaller};
  padding: 0.7em 5em;
  font-weight: 900;
  cursor: pointer;
  outline: none;
  border: 0
  &:hover {
    box-shadow: ${p => p.theme.shadows.level1};
  }
  &:disabled {
    border-color: ${p => p.theme.colors.grays.light};
    background-color: ${p => p.theme.colors.grays.light};
  }
  ${p => p.rounded && css`
    border-radius: 100px;
  `}
  ${p => p.huge && css`
    font-size: 15px;
    font-weight: bold;
    padding: 1em 6em;
  `}
  ${p => p.unstyled && css`
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    &:hover {
      box-shadow: none;
    }
  `}
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
  ${p => p.default && css`
    background: transparent;
    border: transparent;
    font-weight: normal;
    &:hover {
      box-shadow: none;
    }
  `}
  ${p => p.dangerDot && css`
    position:relative;
    &:after {
      content: "";
      position:absolute;
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${p => p.theme.colors.danger};
      top: 50%;
      left: 10px;
      transform: translate(0, -50%);
    }
  `}
  ${p => p.outline && css`
    background: transparent;
    color: ${p => p.theme.colors.black};
    border-color: ${p => p.theme.colors.black};
    &:hover {
      background: ${p => p.theme.colors.black};
      color: white;
    }
  `};
  ${p => p.disabled && css`
    background: ${p => p.theme.colors.grays.light};
    border-color: ${p => p.theme.colors.grays.light};
    &:hover {
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
  ${p => p.black && css`
    background-color: ${p => p.theme.colors.black};
    border-color: ${p => p.theme.colors.black};
    color: white;
  `};
  ${hiddenMixin}
`;

export default Button;
