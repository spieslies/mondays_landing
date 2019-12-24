import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Icon from './Icon';

class Checkbox extends PureComponent {
  render() {
    const checked = this.props.checked || false;

    return (
      <CheckboxCont checked={checked} >
        <Input type="checkbox" {...this.props} />
        {checked && <CheckIcon />}
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  display:inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid ${p => p.theme.colors.grays.regular};
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  ${p => p.theme.max('md')`
    width: 32px;
    height: 32px;
  `}
`;

const CheckIcon = styled(p => <Icon icon="check" {...p} />)`
  position: absolute;
  left: 15%;
  top: -27%;
  font-size: 20px;
  line-height: 1;
  pointer-events: none;
  color: ${p => p.theme.colors.black};
  ${p => p.theme.max('md')`
    font-size: 35px;
  `}
`;

const Input = styled.input`
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export default Checkbox;
