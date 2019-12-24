import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Collapsed from 'ui/components/Collapsed';

import {
  Section,
  Container,
  Flex,
  Text,
} from "ui/atoms";

import BG from 'assets/images/BgFirstStep.jpg';

class Ask extends PureComponent {

  items = [
    {
      index: 1,
      title: 'Что я получу по завершению курса?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
    {
      index: 2,
      title: 'Как справится с недостатком времени?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
    {
      index: 3,
      title: 'Если вопрос будет немного больше, например в несколько строчек?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
  ];

  items2 = [
    {
      index: 4,
      title: 'Чем поможет мне это приложение?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
    {
      index: 5,
      title: 'Как справится с недостатком времени?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
    {
      index: 6,
      title: 'Чем поможет мне это приложение?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    },
    {
      index: 7,
      title: 'Если вопрос будет немного больше, например в несколько строчек?',
      text: 'Равным образом дальнейшее развитие различных форм деятельно в значительной степени обуславливает создание дальнейших на развития. Разнообразный и богатый опыт новая модель деятельно обеспечивает широкому кругу'
    }
  ];

  state = {
    currentIndex: 1
  };

  setOpened = index => {
    this.setState(st => ({ currentIndex: st.currentIndex === index ? 1 : index }));
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <CustomSection>
        <Container>
          <Flex justifyContent={'center'}>
            <TitleText textBig>Нас часто спрашивают</TitleText>
          </Flex>
          <BlockCollapsed wrap={'wrap'}>
            <Flex direction={'column'}>
              {this.items.map(({ title, text, index}, ask) => (
                <Collapsed
                  key={ask}
                  title={title}
                  text={text}
                  isOpened={index === currentIndex}
                  setOpened={() => this.setOpened(index)}
                />
              ))}
            </Flex>
            <Flex direction={'column'}>
              {this.items2.map(({ title, text, index}, ask) => (
                <Collapsed
                  key={ask}
                  title={title}
                  text={text}
                  isOpened={index === currentIndex}
                  setOpened={() => this.setOpened(index)}
                />
              ))}
            </Flex>
          </BlockCollapsed>
        </Container>
      </CustomSection>
    );
  }
}

const CustomSection = styled(Section)`
  background: url(${BG}) no-repeat center;
  padding: 210px 0;
  min-height: 728px;
  ${p => p.theme.max('md')`
    padding: 80px 0;
    min-height: auto;
  `}
  ${p => p.theme.max('sm')`
    padding: 30px 8px;
  `}
`;

const TitleText = styled(Text)`
  ${p => p.theme.max('sm')`
    font-size: 26px;
    line-height: 32px;
  `}
`;

const BlockCollapsed = styled(Flex)`
  max-width: 1160px;
  margin: auto;
  ${p => p.theme.max('md')`
    justify-content: center;
    max-width: 100%;
  `}
`;

export default Ask;
