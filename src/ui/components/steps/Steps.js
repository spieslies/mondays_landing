import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Accent } from "ui/atoms";

import STAR_ICON from "assets/icons/star.svg";
import BRUSH_C_ICON from "assets/icons/brush_colored.svg";
import FILE_ICON from "assets/icons/file.svg";
import SALE_ICON from "assets/icons/sale.svg";

const SSteps = styled.div`
  padding-top: 66px;
  padding-bottom: 47px;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.white};
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
  &:not(:last-child) {
    margin-bottom: 30px;
    ${p => p.theme.max("sm")`
      margin-bottom: 100px;
    `}
  }
  ${p => p.theme.max("sm")`
      width: 100%;
      transform: translateX(0);
  `}
  ${p =>
    p.ltr
      ? `
    transform: translateX(-70%);
  `
      : `
    transform: translateX(70%);
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
  background: transparent;
  border: 1px solid rgba(187, 107, 217, 0.5);
  border-radius: 100%;
  ${p => p.theme.max("sm")`
    position: relative;
    top: -30px;
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(0);
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
  ${p => p.theme.max("sm")`
    text-align: center;
  `}
`;

const StepItemDescription = styled.div`
  font-size: 13px;
  line-height: 32px;
  opacity: 0.5;
  ${p => p.theme.max("sm")`
    text-align: center;
  `}
`;

class Steps extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SSteps>
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
            <StepItem ltr>
              <StepItemIconWrapper ltr>
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
            <StepItem>
              <StepItemIconWrapper>
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
            <StepItem ltr>
              <StepItemIconWrapper ltr>
                <StepItemIcon src={FILE_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>Добавьте контент на каждый день</StepItemTitle>
              <StepItemDescription>
                Марафон - это формат обучения, гдже предмет упаковывается в
                небольшой временной период. Любой навык можно упаковать как
                марафон. Формат также предполагает каждодневные задания
              </StepItemDescription>
            </StepItem>
            <StepItem>
              <StepItemIconWrapper>
                <StepItemIcon src={SALE_ICON} />
              </StepItemIconWrapper>
              <StepItemTitle>Установите цену и другие параметры</StepItemTitle>
              <StepItemDescription>
                Выберите стоимость вашего марафона, а также другие настройки,
                такие как продолжительность пробного периода, наличие выходных,
                количество возможных пропусков и т.п.
              </StepItemDescription>
            </StepItem>
          </Flex>
        </Container>
      </SSteps>
    );
  }
}

export default Steps;
