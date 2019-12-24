import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class Radio extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    onChange: PropTypes.func,
  };

  render() {
    const checked = this.props.checked || false;

    return (
      <RadioCont checked={checked} huge={this.props.huge}>
        <Input type="radio" {...this.props} />
      </RadioCont>
    );
  }
}

const RadioCont = styled.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid ${p => p.theme.colors.grays.regular};
  text-align: center;
  border-radius: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  ${p =>
    p.checked &&
    css`
      &:after {
        position: absolute;
        display: block;
        content: '';
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        top: 2px;
        left: 2px;
        border-radius: 50%;
        background: ${p => p.theme.colors.black};
        ${p => p.theme.max('md')`
          top: 4px;
          left: 4px;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
        `}
      }
    `};
  ${p => p.theme.max('md')`
    width: 36px;
    height: 36px;
  `}
  ${p => p.huge && css`
    width: 28px;
    height: 28px;
    &:after {
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      top: 3px;
      left: 3px;
    }
  `}
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export default Radio;
