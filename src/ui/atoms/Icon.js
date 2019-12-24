import React, { PureComponent } from 'react';

class Icon extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    return (
      <i className={`${className || ''} icon-${this.props.icon}`} {...rest} />
    );
  }
}

export default Icon;
