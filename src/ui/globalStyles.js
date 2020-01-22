import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import M_REGULAR from 'assets/fonts/Montserrat-Regular.ttf';
import M_MEDIUM from 'assets/fonts/Montserrat-Medium.ttf';
import M_DEMIBOLD from 'assets/fonts/Montserrat-SemiBold.ttf';
import M_BOLD from 'assets/fonts/Montserrat-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
    outline: none !important;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  #root {
    ${p => p.theme.max('md')`
      overflow: hidden;
      width: 100vw;
    `}
  }
  ::selection {
    background: #fffe90;
  }
  *:not(input, textarea) {
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
  }
  body {
    font-family: ${p => p.theme.font.family.text};
    line-height: ${p => p.theme.font.lineHeight.normal};
    font-weight: normal;
  }
  p {
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.font.size.base};
  }
  .reorder-wrapper-item {
    position: relative;
    transition: top 1s ease-in;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${M_REGULAR});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${M_MEDIUM});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${M_DEMIBOLD});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${M_BOLD});
    font-weight: 700;
    font-style: normal;
  }
`;

export default GlobalStyle;
