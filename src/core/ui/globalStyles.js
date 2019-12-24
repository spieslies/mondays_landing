import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import TT_THIN from '../assets/fonts/TT-Norms-Pro-Thin.ttf';
import TT_EXTRALIGHT from '../assets/fonts/TT-Norms-Pro-ExtraLight.ttf';
import TT_LIGHT from '../assets/fonts/TT-Norms-Pro-Light.ttf';
import TT_REGULAR from '../assets/fonts/TT-Norms-Pro-Normal.ttf';
import TT_MEDIUM from '../assets/fonts/TT-Norms-Pro-Medium.ttf';
import TT_DEMIBOLD from '../assets/fonts/TT-Norms-Pro-DemiBold.ttf';
import TT_BOLD from '../assets/fonts/TT-Norms-Pro-Bold.ttf';
import TT_EXTRABOLD from '../assets/fonts/TT-Norms-Pro-ExtraBold.ttf';
import TT_BLACK from '../assets/fonts/TT-Norms-Pro-Black.ttf';

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
    font-family: 'TT';
    src: url(${TT_THIN});
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_EXTRALIGHT});
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_LIGHT});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_REGULAR});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_MEDIUM});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_DEMIBOLD});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_BOLD});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_EXTRABOLD});
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT';
    src: url(${TT_BLACK});
    font-weight: 900;
    font-style: normal;
  }
`;

export default GlobalStyle;
