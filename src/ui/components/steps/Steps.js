import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Accent } from "ui/atoms";

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
`;

const StepItem = styled.div`
  display: block;
  width: 339px;
`;

const StepItemTitle = styled.div`
  margin-bottom: 13px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
`;

const StepItemDescription = styled.div`
  font-size: 13px;
  line-height: 32px;
  opacity: 0.5;
`;

class Steps extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SSteps>
        <Container>
          <Flex direction="column" alignItems="center">
            <Title><Accent>Mondays</Accent>.</Title>
            <SubTitle>
              Новая крутая платформа для
              <br />
              создания марафонов
            </SubTitle>
            <StepItem>
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
            <StepItem>
              <StepItemTitle>Добавьте контент на каждый день</StepItemTitle>
              <StepItemDescription>
                Марафон - это формат обучения, гдже предмет упаковывается в
                небольшой временной период. Любой навык можно упаковать как
                марафон. Формат также предполагает каждодневные задания
              </StepItemDescription>
            </StepItem>
            <StepItem>
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
