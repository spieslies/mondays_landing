import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import IconAtom from 'ui/atoms/Icon';

class Select extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
  };

  state = {
    selected: this.props.options[0] && this.props.options[0].value,
  };

  componentDidMount() {
    const { selected } = this.props;
    if (selected !== undefined) {
      this.setState({ selected });
      this.props.onChange && this.props.onChange(selected);
    }
  }

  onChange = e => {
    this.setState({ selected: e.target.value });
    this.props.onChange && this.props.onChange(e.target.value);
  };

  render() {
    const { name, options, readOnly } = this.props;
    const { selected } = this.state;
    const selectedOption = options.find(o => o.value === selected) || {};

    return (
      <SelectCont>
        <Selected className={this.props.className} readOnly={readOnly}>
          {selectedOption.title}
          <Icon icon="cared_down" />
        </Selected>
        <Input name={name} onChange={this.onChange} value={selected} disabled={readOnly}>
          {options.map(({ value, title }, i) => (
            <option key={`${value}-${i}`} value={value}>
              {title}
            </option>
          ))}
        </Input>
      </SelectCont>
    );
  }
}

const SelectCont = styled.div`
  position: relative;
`;

// FIXME: color: black and border-bottom-color: black are leaking in and overriding these styles
const Selected = styled.p`
  width: 100%;
  border-bottom: ${props => props.theme.general.borderWidth} solid white;
  background: transparent;
  font-weight: 300;
  padding: 10px 0;
  color: white;
  line-height: 1.5;
  ${p => p.readOnly && css`
      border-color: ${p.theme.colors.grays.light} !important;
      color: ${p.theme.colors.grays.regular} !important;
    `
  }
`;

const Icon = styled(IconAtom)`
  position: absolute;
  font-size: 10px;
  top: 19px;
  right: 0;
`;

const Input = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

export default Select;
