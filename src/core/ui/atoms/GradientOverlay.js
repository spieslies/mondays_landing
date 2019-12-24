import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class GradientOverlay extends PureComponent {
  static propTypes = {
    deg: PropTypes.number,
  };

  static defaultProps = {
    deg: 224.34,
  };

  render() {
    return (
      <Overlay {...this.props} />
    );
  }
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(${p => p.deg}deg, ${p => p.theme.colors.primary} 0.75%, ${p => p.theme.colors.secondary} 87.48%);
`;

export default GradientOverlay;
