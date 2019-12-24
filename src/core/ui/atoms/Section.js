import React, {PureComponent} from 'react';
import styled from 'styled-components';


class Section extends PureComponent {
  render() {
    return (
      <SectionCont {...this.props}>
        {this.props.children}
      </SectionCont>
    )
  }
}

export const SectionCont = styled.div`
  position: relative;
  padding: 50px 0;
`;

export default Section;
