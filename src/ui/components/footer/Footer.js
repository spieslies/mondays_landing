import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Link } from "ui/atoms";

const SFooter = styled.div`
  padding: 24px 0 25px;
  background-color: ${p => p.theme.colors.bg};
  color: #8e94a5;
  font-size: 14px;
`;
const Legals = styled.div`
  margin-left: auto;
`
const FooterLink = styled(Link)`
  color: inherit;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

class Footer extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SFooter>
        <Container>
          <Flex>
            <span>© 2019 Premium Cosmetics</span>
            <Legals>
            <FooterLink href="#">Условия</FooterLink>
            <FooterLink href="">Конфиденциальность</FooterLink>
            </Legals>
          </Flex>
        </Container>
      </SFooter>
    );
  }
}

export default Footer;
