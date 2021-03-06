import React, { PureComponent } from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Container, Flex, Button, Accent } from "ui/atoms";

import StripesOverlay from '../stripes-overlay/StripesOverlay'

import TOP_BG from "assets/images/top-image.jpg";

const Logo = styled.div`
  position: relative;
  margin-right: 60px;
  font-size: 24px;
  font-weight: 700;
  z-index: 10;
  ${p => p.theme.max("sm")`
    margin-right: auto;
    margin-left: auto;
  `}
`;

const Menu = styled(Flex)`
  ${p => p.theme.max("sm")`
      display: none;
  `}
`;

const MenuItem = styled(AnchorLink)`
  position: relative;
  margin-right: 60px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  transition: color 133ms ease-in-out;
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
  ${p => p.theme.max("md")`
    margin-right: 30px;
  `}
`;

const SHero = styled.div`
  position: relative;
  padding-top: 26px;
  min-height: 100vh;
  background-image: url(${TOP_BG});
  background-size: cover;
  background-position: 0 -120px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.6;
    z-index: 1;
  }
  ${p => p.theme.max("sm")`
      background-position: 70% 0;
  `}
  ${p => p.theme.between("sm", "md")`
      background-position: 70% 0;
  `}
`;

const HeroBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  height: 110px;
  width: 70%;
  background: ${p => p.theme.colors.bg};
  border-top-left-radius: 50px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -60px;
    display: block;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 60px;
    box-shadow: 30px 30px 0 5px ${p => p.theme.colors.bg};
  }
  ${p => p.theme.max("sm")`
      width: 50%;
  `}
`;

const HeroContent = styled.div`
  position: absolute;
  top: 213px;
  left: 150px;
  font-size: 80px;
  z-index: 100;
  ${p => p.theme.max("sm")`
      top: 35%;
      left: 50%;
      font-size: 50px;
      transform: translateX(-50%);
      text-align: center;
  `}
  ${p => p.theme.between("sm", "md")`
      left: 30px;
  `}
`;

const HeroContentItem1 = styled.span`
  font-weight: 700;
  color: ${p => p.theme.colors.secondary};
`;

const HeroContentItem2 = styled.span`
  font-weight: 400;
`;

const HeroLine = styled.div`
  width: 70%;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 150px;
  z-index: 10;
  ${p => p.theme.max("sm")`
    display: none;
  `}
`;

const HeroLineItem = styled.div`
  width: 25%;
  padding: 0 100px 0 35px;
  font-size: 14px;
  font-weight: 600;
  ${p => p.theme.max("md")`
    padding: 0 50px 0 0;
  `}
`;

class Hero extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SHero>
        <StripesOverlay/>
        <Container>
          <Flex alignItems="center">
            <Logo>Mondays.</Logo>
            <Menu center>
              <MenuItem href="#about">О чем это</MenuItem>
              <MenuItem href="#advantages">Преимущества</MenuItem>
              <MenuItem href="#hiw">Как это работает</MenuItem>
              <MenuItem href="#interface">Интерфейс</MenuItem>
            </Menu>
          </Flex>
          <HeroContent>
            <HeroContentItem1>Mondays</HeroContentItem1>.<br />
            <HeroContentItem2>Create</HeroContentItem2>
            <br />
            <Button>Создайте Mарафон</Button>
          </HeroContent>
          <HeroLine>
            <Flex alignItems="center" justifyContent="space-between">
              <HeroLineItem>
                Делитесь <Accent>.</Accent>
              </HeroLineItem>
              <HeroLineItem>
                Обучайте<Accent>.</Accent>
              </HeroLineItem>
              <HeroLineItem>
                Зарабатывайте<Accent>.</Accent>
              </HeroLineItem>
            </Flex>
          </HeroLine>
        </Container>
        <HeroBottom />
      </SHero>
    );
  }
}

export default Hero;
