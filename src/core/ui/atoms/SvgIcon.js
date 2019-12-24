import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  fill: currentColor;
`;

const SvgContainer = ({width, height, className, children, ...rest}) => (
  <SVG
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </SVG>
);

const User = () => (
  <SvgContainer width="24" height="24">
    <path  d="M16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7ZM3.5 21.5C3.5 17.0817 7.30558 13.5 12 13.5C16.6944 13.5 20.5 17.0817 20.5 21.5H3.5Z"/>
  </SvgContainer>
);

const Envelope = () => (
  <SvgContainer width={24} height={24}>
    <path d="M20.5469 7.20897C18.8531 8.6195 13.3525 13.2 12 13.2C10.4694 13.2 3 7.25804 3 6.83426C3 6.30961 3.13893 5.67448 3.4168 5.32466C3.6947 4.97492 4.09148 4.80005 4.60708 4.80005H19.3928C19.8279 4.80005 20.2047 4.95806 20.5228 5.27427C20.8409 5.5904 21 6.83426 21 6.83426C20.9272 6.89232 20.7701 7.02313 20.5469 7.20897ZM3 17.5898V9.60005C3.14623 9.76316 9.91603 15.1281 12 15.1281C14.084 15.1281 20.8549 9.76218 21 9.60005V17.5898C21 18.0328 20.8428 18.4116 20.5279 18.727C20.2132 19.0424 19.8348 19.2 19.3929 19.2H4.60718C4.16519 19.2 3.78677 19.0424 3.47207 18.727C3.1573 18.4117 3 18.0328 3 17.5898Z"/>
  </SvgContainer>
);

export {
  User,
  Envelope
}
