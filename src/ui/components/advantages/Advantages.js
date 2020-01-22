import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex } from "ui/atoms";

import AdvantageItem from "./AdvantageItem";

const SAdvantages = styled.div`
  padding: 60px 0 197px;
  background-color: #1f2033;
  color: ${p => p.theme.colors.white};
`;

const Title = styled.h3`
  position: relative;
  margin: 0 0 69px 0;
  font-size: 36px;
  line-height: 48px;
  font-weight: 600;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    display: block;
    width: 60px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${p => p.theme.colors.primary};
  }
`;

const AdvantageRow = styled(Flex)`
  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

class Advantages extends PureComponent {
  render() {
    return (
      <SAdvantages>
        <Container>
          <Flex direction="column" alignItems="center">
            <Title>Преимущества</Title>
            <AdvantageRow>
              <AdvantageItem
                icon="icon"
                title="Делитесь вашим марафоном с помощью лендинг страницы"
                description="Вы автоматически получаете продающую посадочную страницу, с
                великолепым дизайном, оптимизированную под все устройства. Мы
                уже сделали всю работу за вас."
              />
              <AdvantageItem
                icon="icon"
                title="Неограниченное количество проверяющих"
                description="По мере роста, вы можете делегировать проверку заданий другим
                людям. Они как и вы смогут проверять задания с помощью
                удобного мобильного приложения, а также"
              />
            </AdvantageRow>
            <AdvantageRow>
              <AdvantageItem
                icon="icon"
                title="Различные методы оплаты"
                description="По статистике, 30% пользователей уходят из-за неудобной системы оплаты. Больше никаких недобств с переводом на карту, для вас мы дадим пользователю оплатить ваш курс любым удобным для него способом, включая Apple Pay и Samsung Pay, и переведем на ваш банковский счет"
              />
              <AdvantageItem
                icon="icon"
                title="Удобная система проверки"
                description="Вы можете проверять ответы пользователей с помощью удобного интерфейса, а также с любого устройства. Система предупредит вас, если в конце дня остались непроверенные занания, а также поможет удобно маркировать задания. И вы и пользователи получите уникальный опыт взаимодейтсвия"
              />
            </AdvantageRow>
            <AdvantageRow>
              <AdvantageItem
                icon="icon"
                title="Push-уведомления"
                description="Ваше взаиможействие с пользователем переходит на новый уровень с помощью пуш уведомдений. Гиб кая настрйка привязанная ко дню марафона позволет вам контактировать с пользователем даже когда он не открывает приложение"
              />
              <AdvantageItem
                icon="icon"
                title="Полное брендирование"
                description="Когда пользователь скачивает приложение через ссылку с ленжинга, или через специальную ссылку, которую мы вам предотставляем, то после скачивания все приложение будет брендировано под ваш марафон. Многие даже не замечают."
              />
            </AdvantageRow>
          </Flex>
        </Container>
      </SAdvantages>
    );
  }
}

export default Advantages;
