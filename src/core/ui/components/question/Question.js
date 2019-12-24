import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Flex,
  Text,
  Input,
  Button,
  Form
} from "core/ui/atoms";

import {User, Envelope} from "core/ui/atoms/SvgIcon";

class Ask extends PureComponent {
  render() {
    return (
      <CustomSection>
        <Container>
          <BlockQuestion justifyContent={'center'} alingItems={'center'} direction={'column'}>
            <TitleText textBig>Остались вопросы?</TitleText>
            <NormalText textNormal>Мы с радостью поможем Вам. <br/> Давайте идти к осознанной жизни вместе!</NormalText>
            <Form action={'send.php'} method={'post'}>
              <BlockInput>
                <User/>
                <Input
                type={'text'}
                name={'name'}
                autocomplete={'off'}
                placeholder={'Введите свое имя'}
                />
              </BlockInput>
              <BlockInput>
                <Envelope/>
                <Input
                type={'text'}
                name={'message'}
                autocomplete={'off'}
                placeholder={'Введите свое сообщение'}
                />
              </BlockInput>
              <BlockButton justifyContent={'center'}>
                <Button
                  type={'submit'}
                >Отправить</Button>
              </BlockButton>
            </Form>
          </BlockQuestion>
        </Container>
      </CustomSection>
    );
  }
}

export default Ask;

const CustomSection = styled(Section)`
  padding: 0;
  margin: auto;
  min-height: 590px;
  ${p => p.theme.max('md')`
    padding: 100px 0;
    min-height: auto;
  `}
  ${p => p.theme.max('sm')`
    padding: 60px 16px; 
  `}
`;

const BlockQuestion = styled(Flex)`
  margin: auto;
  width: 100%;
  max-width: 418px;
  max-height: 468px;
`;

const TitleText = styled(Text)`
  text-align: center;
  font-weight: 500;
  width: 100%;
  margin: 0;
  ${p => p.theme.max('sm')`
    font-size: 26px;
    line-height: 32px;
  `}
`;

const NormalText = styled(Text)`
  text-align: center;
  width: 100%;
  opacity: 0.5;
  line-height: 23px;
  ${p => p.theme.max('sm')`
    font-size: 14px;
    line-height: 24px;
  `}
`;

const BlockInput = styled(Flex)`
  margin-top: 50px;
  width: 100%;
  height: 31px;
  border-bottom: 1px solid #bbbdbf;
  opacity: 0.5;
  &:focus-within{
    border-bottom: 2px solid #6d9ff0;
    opacity: 1;
  }
`;

const BlockButton = styled(Flex)`
  width: 100%;
  margin-top: 50px;
  ${p => p.theme.max('sm')`
    margin-top: 45px;
  `}
`;


