import React, { PureComponent } from "react";
import styled from "styled-components";

const SStripesOverlay = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 10;
  ${p => p.theme.max("md")`
    display: none;
  `}
`;
const StripesOverlayItem = styled.div`
  width: 25%;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

class StripesOverlay extends PureComponent {
  render() {
    return (
      <SStripesOverlay>
        <StripesOverlayItem />
        <StripesOverlayItem />
        <StripesOverlayItem />
        <StripesOverlayItem />
      </SStripesOverlay>
    );
  }
}

export default StripesOverlay;
