import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Button, Link, Accent } from "ui/atoms";

import TOP_BG from "assets/images/top-image.jpg";

const Logo = styled.div`
  position: relative;
  margin-right: 60px;
  font-size: 24px;
  font-weight: 700;
  z-index: 10;
`;

const MenuItem = styled(Link)`
  position: relative;
  margin-right: 60px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10;
  color: ${p => p.theme.colors.white};
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
  z-index: 100;
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
`;

const HeroContent = styled.div`
  position: absolute;
  top: 213px;
  left: 150px;
  font-size: 80px;
  z-index: 10;
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
`;

const HeroLineItem = styled.div`
  padding: 0 100px 0 35px;
  font-size: 14px;
  font-weight: 600;
`;

class Hero extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SHero>
        <Container>
          <Flex alignItems="center">
            <Logo>Mondays.</Logo>
            <Flex center>
              <MenuItem href="#">О чем это</MenuItem>
              <MenuItem href="#">Преимущества</MenuItem>
              <MenuItem href="#">Как это работает</MenuItem>
              <MenuItem href="#">Интерфейс</MenuItem>
            </Flex>
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
