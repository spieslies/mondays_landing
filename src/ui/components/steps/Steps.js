import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Accent } from "ui/atoms";

import STAR_ICON from "assets/icons/star.svg";
import BRUSH_C_ICON from "assets/icons/brush_colored.svg";
import FILE_ICON from "assets/icons/file.svg";
import SALE_ICON from "assets/icons/sale.svg";
import STAR_WHITE_ICON from "assets/icons/star_white.svg";
import SLEEP_IMG from "assets/images/sleep.jpeg";
import SHAPE_1 from "assets/images/steps-shape.png";
import SHAPE_2 from "assets/images/steps-shape-1.png";
import SHAPE_3 from "assets/images/steps-shape-2.png";
import SHAPE_4 from "assets/images/steps-shape-4.png";
import SHAPE_5 from "assets/images/steps-shape-5.png";
import SHAPE_6 from "assets/images/steps-shape-6.png";

const SSteps = styled.div`
  position: relative;
  padding-top: 66px;
  padding-bottom: 132px;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.white};
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  margin-bottom: 55px;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
  ${p => p.theme.max("sm")`
    margin-bottom: 120px;
  `}
`;

const StepItem = styled.div`
  position: relative;
  display: block;
  width: 339px;
  border-radius: 4px;
  &:after {
    content: '';
    position: absolute;
    top: 24px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    ${p => p.theme.max("md")`
      display: none;
    `}
  };
  ${p =>
    p.bg ? `background-color: ${p.bg};` : `background-color: transparent;`}
  &:not(:last-child) {
    margin-bottom: 30px;
    ${p => p.theme.max("md")`
      margin-bottom: 100px;
    `}
  }
  ${p => p.theme.max("md")`
      width: 100%;
      transform: translateX(0);
  `}
  ${p => p.theme.between("sm", "md")`
      width: 60%;
      transform: translateX(0);
  `}
  ${p =>
    p.ltr
      ? `
    padding: 21px 30px 31px 20px;
    transform: translateX(-70%);
    text-align: right;
    &:after {
      right: -15px;
      border-width: 13px 0 13px 16px;
      border-color: transparent transparent transparent ${p.bg};
    }
  `
      : `
    transform: translateX(70%);
    padding: 21px 20px 31px 30px;
    &:after {
      left: -15px;
      border-width: 13px 16px 13px 0;
      border-color: transparent ${p.bg} transparent transparent;
    }
  `}
`;
const StepItemIconWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: -130px;
  display: flex;
  justify-content: center;
  width: 61px;
  height: 61px;
  background: red;
  border: 1px solid rgba(187, 107, 217, 0.5);
  border-radius: 100%;
  ${p =>
    p.bg ? `background-color: ${p.bg};` : `background-color: transparent;`}
  ${p => p.theme.max("md")`
    position: relative;
    top: -50px;
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(0);
    border: none;
  `};
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    display: block;
    width: 81px;
    height: 81px;
    background: transparent;
    border: 1px solid #373542;
    border-radius: 100%;
    transform: translateY(-50%);
    ${p => p.theme.max("md")`
      ${p => (p.bg ? `border-color: ${p.bg};` : `border-color: #373542;`)}
    `}
  }
  ${p =>
    p.ltr
      ? `
    right: -95px;
    left: auto;
  `
      : `
    transform: translateX(50%);
  `}
`;

const StepItemIcon = styled.img`
  display: block;
`;

const StepItemTitle = styled.div`
  margin-bottom: 13px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  ${p => p.theme.max("md")`
    text-align: center;
  `}
`;

const StepItemDescription = styled.div`
  font-size: 13px;
  line-height: 32px;
  opacity: 0.5;
  ${p => p.theme.max("md")`
    text-align: center;
  `}
`;

const LastStepItem = styled.div`
  position: relative;
  margin-top: 25px;
  padding: 51px 85px 51px 235px;
  border-radius: 7px;
  max-width: 720px;
  display: block;
  background-color: ${p => p.theme.colors.primary};
  ${p => p.theme.max("md")`
    width: 100%;
    padding: 30px;
    text-align: center;
    margin-top: 350px;
  `}
  ${p => p.theme.between("sm", "md")`
    width: 60%;
  `}
`;

const LastStepItemText = styled.span`
  font-size: 18px;
  line-height: 38px;
`;

const LastStepItemStars = styled.div`
  display: flex;
  margin-bottom: 25px;
  ${p => p.theme.max("md")`
    justify-content: center;
  `}
`;

const LastStepItemStar = styled.img`
  width: 17p;
  height: 17px;
  display: block;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const LastStepItemStarImg = styled.img`
  position: absolute;
  left: -200px;
  top: 50%;
  display: block;
  width: 375px;
  height: 430px;
  border-radius: 7px;
  object-fit: cover;
  transform: translateY(-50%);
  z-index: 101;
  &:not(:last-child) {
    margin-right: 15px;
  }
  ${p => p.theme.max("md")`
    margin: 0;
    transform: translateX(-50%);
    left: 50%;
    width: 110%;
    top: -390px;
    height: 400px;
  `}
`;

const StepsBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  height: 110px;
  width: 30%;
  background: #1f2033;
  border-top-right-radius: 50px;
  z-index: 100;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -60px;
    display: block;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 60px;
    box-shadow: -30px 30px 0 5px #1f2033;
  }
`;

const Shape1 = styled.img`
  position: absolute;
  top: -200px;
  left: -78px;
  display: block;
`;
const Shape2 = styled.img`
  position: absolute;
  top: -500px;
  left: -100px;
  display: block;
`;
const Shape3 = styled.img`
  position: absolute;
  display: block;
  top: -550px;
  left: -90px;
`;
const Shape4 = styled.img`
  position: absolute;
  bottom: 50px;
  right: 0;
  display: block;
`;
const Shape5 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
`;
const Shape6 = styled.img`
  position: absolute;
  display: block;
  bottom: -150px;
  right: 0;
`;

class Steps extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SSteps>
        <Shape1 src={SHAPE_1} />
        <Shape2 src={SHAPE_2} />
        <Shape3 src={SHAPE_3} />
        <Shape4 src={SHAPE_4} />
        <Shape5 src={SHAPE_5} />
        <Shape6 src={SHAPE_6} />
        <Container>
          <Flex direction="column" alignItems="center">
            <Title>
              <Accent>Mondays</Accent>.
            </Title>
            <SubTitle>
              Новая крутая платформа для
              <br />
              создания марафонов
            </SubTitle>
            <StepItem ltr bg="#BB6BD9">
              <StepItemIconWrapper ltr bg="#BB6BD9">
                <StepItemIcon src={STAR_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>
                Хотите поделиться чем-то уникальным?
              </StepItemTitle>
              <StepItemDescription>
                Марафон - это формат обучения, где предмет упаковывается в
                небольшой временной период. Любой навык можно упаковать как
                марафон. Формат также предполагает каждодневные задания
              </StepItemDescription>
            </StepItem>
            <StepItem bg="#8B4AA4">
              <StepItemIconWrapper bg="#8B4AA4">
                <StepItemIcon src={BRUSH_C_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>
                Выберите уникальное описание и оформление
              </StepItemTitle>
              <StepItemDescription>
                Наш удобный инструмент с помощью готовых блоков и проверенных
                гайдлайна поможет вам создать красивое, информативное и при этом
                уникальное оформление для вашего инфо-продукта, без знаний
                дизайна
              </StepItemDescription>
            </StepItem>
            <StepItem ltr bg="#6B387E">
              <StepItemIconWrapper ltr bg="#6B387E">
                <StepItemIcon src={FILE_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>Добавьте контент на каждый день</StepItemTitle>
              <StepItemDescription>
                Марафон - это формат обучения, гдже предмет упаковывается в
                небольшой временной период. Любой навык можно упаковать как
                марафон. Формат также предполагает каждодневные задания
              </StepItemDescription>
            </StepItem>
            <StepItem bg="#532864">
              <StepItemIconWrapper bg="#532864">
                <StepItemIcon src={SALE_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>Установите цену и другие параметры</StepItemTitle>
              <StepItemDescription>
                Выберите стоимость вашего марафона, а также другие настройки,
                такие как продолжительность пробного периода, наличие выходных,
                количество возможных пропусков и т.п.
              </StepItemDescription>
            </StepItem>
            <LastStepItem>
              <LastStepItemStarImg src={SLEEP_IMG} />
              <LastStepItemStars>
                <LastStepItemStar src={STAR_WHITE_ICON} />
                <LastStepItemStar src={STAR_WHITE_ICON} />
                <LastStepItemStar src={STAR_WHITE_ICON} />
                <LastStepItemStar src={STAR_WHITE_ICON} />
                <LastStepItemStar src={STAR_WHITE_ICON} />
              </LastStepItemStars>
              <LastStepItemText>
                Опубликуйте ваш марафон, и он станет доступен для тысяч людей. И
                будет приносить Вам деньги даже когда вы спите
              </LastStepItemText>
            </LastStepItem>
          </Flex>
        </Container>
        <StepsBottom />
      </SSteps>
    );
  }
}

export default Steps;
