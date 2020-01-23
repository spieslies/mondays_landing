import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Button, Accent } from "ui/atoms";

import BOTTOM_IMAGE from "assets/images/bottom-image.jpg";

const SAuthors = styled.div`
  position: relative;
  padding: 143px 0 152px;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.white};
  ${p => p.theme.max("sm")`
      padding: 40px 0 50px;
  `}
`;

const Info = styled.div`
  width: 50%;
  ${p => p.theme.max("sm")`
      width: 100%;
      text-align: center;
  `}
`;
const Title = styled.h3`
  margin: 0 0 36px 0;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.04em;
  ${p => p.theme.max("sm")`
      text-align: center;
  `}
  
`;
const Description = styled.div`
  margin-bottom: 60px;
  font-size: 14px;
  line-height: 42px;
  letter-spacing: 0.02em;
  color: #8e94a5;
`;
const Image = styled.img`
  position: absolute;
  right: 0;
  top: -70%;
  display: block;
  width: 670px;
  height: 774px;
  border-radius: 10px 0px 0px 10px;
  background: #fff;
  transform: translateY(50%);
  object-fit: cover;
  ${p => p.theme.max("sm")`
      display: none;
  `}
`;

class Authors extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SAuthors>
        <Container>
          <Flex>
            <Info>
              <Title>Авторы всегда в плюсе!</Title>
              <Description>
                Мы НЕ обдираем авторов, как другие платформы. Мы берем процент
                от продажи марафона только в случае, если пользователь пришел к
                вам через поиск в приложении. Если же пользователь пришел к вам{" "}
                <Accent><b>через лендинг</b></Accent> или по{" "}
                <Accent><b>вашей ссылке</b></Accent>, то мы не берем НИЧЕГО, кроме 5%
                на процессинг и поддержку.
              </Description>
              <Button>Создайте Марафон</Button>
            </Info>
            <Image src={BOTTOM_IMAGE} />
          </Flex>
        </Container>
      </SAuthors>
    );
  }
}

export default Authors;
