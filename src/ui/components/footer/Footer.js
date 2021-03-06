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
  ${p => p.theme.max("sm")`
    margin-left: 0;
  `}
`;
const FooterLink = styled(Link)`
  color: inherit;
  transition: color 133ms ease-in-out;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;
const CustomFlex = styled(Flex)`
  ${p => p.theme.max("sm")`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;
const Copyright = styled.span`
  ${p => p.theme.max("sm")`
      margin-top: 20px;
  `}
`;

class Footer extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SFooter>
        <Container>
          <CustomFlex>
            <Copyright>© 2019 Premium Cosmetics</Copyright>
            <Legals>
              <FooterLink href="#">Условия</FooterLink>
              <FooterLink href="">Конфиденциальность</FooterLink>
            </Legals>
          </CustomFlex>
        </Container>
      </SFooter>
    );
  }
}

export default Footer;
