import {min, max, between, getCurrentBreakpoint} from 'ui/responsiveUtils';

const BIG_SHADOW = 'rgba(118, 152, 207, 0.5)';
const SMALLER_SHADOW = 'rgba(0, 0, 0, 0.24)';

export const theme = {
  breakpoints: {
    xs: 449,
    sm: 767,
    md: 980,
    lg: 1420,
  },
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#BB6BD9',
    secondary: '#DEA8F2',
    grays: {
      darker: '#444444',
      dark: '#555555',
      regular: '#8E8E8E',
      light: '#e4e4e4',
      lighter: '#f2f2f2'
    },
    danger: '#C70018',
    warning: '#ffa836',
    info: '#6654ff',
    success: '#46ff3e',
    bg: '#181929',
  },
  borderRadius: {
    smaller: '20px',
    small: '24px',
    circle: '50%'
  },
  general: {
    gridSize: 12,
    gridGap: '12px',
    mobilePadding: '30px',
    borderWidth: '1px',
    headerHeight: '60px',
    menuShift: '52px',
    modalBackdropColor: 'rgba(0, 0, 0, .8)',
    overlayColor: 'rgba(30, 30, 30, .85)',
    containerWidth: {
      xs: '449',
      sm: '767px',
      md: '980px',
      lg: '1440px'
    }
  },
  transitions: {
    fast: '.2s ease',
    medium: '.5s ease',
    slow: '.8s ease'
  },
  zIndex: {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5'
  },
  shadows: {
    level1: `0 2px 8px ${BIG_SHADOW}`,
    level2: `0 0 8px ${SMALLER_SHADOW}`
  },
  opacity: {
    big: '0.5',
    normal: '0.8',
    small: '0.9',
    null: '1'
  },
  font: {
    size: {
      huge: '44px',
      big: '38px',
      normal: '18px',
      small: '16px',
      smaller: '14px'
    },
    lineHeight: {
      huge: '56px',
      big: '28px',
      normal: 1.3,
      small: '22px',
      smaller: '18px'
    },
    letterSpacing: {
      base: 'normal',
      accent: '0.2em'
    },
    family: {
      text: 'Montserrat',
      header: 'Montserrat',
      accent: 'Montserrat'
    }
  },
  min,
  max,
  between,
  getCurrentBreakpoint
};

export default theme;
