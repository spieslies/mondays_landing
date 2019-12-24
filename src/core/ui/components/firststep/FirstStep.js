import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Flex,
  Text,
} from "core/ui/atoms";

import BG from 'core/assets/images/BgFirstStep.jpg';
import SMALLCIRCLEWHY from 'core/assets/images/SmallCircleFirstStep.png';
import TEACHER from 'core/assets/images/TeacherFirstStep.png';
import LOGO from 'core/assets/images/LogoFirstStep.png';

class FirstStep extends PureComponent {
  item = [
    {
      icon: SMALLCIRCLEWHY,
      text: '40 дневный курс медитации для начинающих составил буддийский Учитель <span>Аджан Хуберт</span>, представляющий традицию раннего буддизма тхеравада, который почти <span>10 лет своей жизни провел в монашестве.</span>',
      teacher: true
    },
    {
      icon: SMALLCIRCLEWHY,
      text: 'Аджан Хуберт родился и вырос в Польше, но 10 лет прожил в России и прекрасно овладел русским языком, познакомился со всеми особенностями русской культуры и ментальности, благодаря чему в последние годы Аджан вдохновляет и поддерживает в практике именно русскоязычных людей, проводит русскоязычные ретриты и лекции.'
    },
    {
      icon: SMALLCIRCLEWHY,
      text: 'Учитель жил на острове Самуи, являлся монахом в лесном монастыре Суан Моккх, а также Учителем на регулярных русскоязычных ретритах, которые проводятся в ретритном центре Дипабхаван.'
    },
  ];

  render() {
    return (
      <CustomSection>
        <Logo src={LOGO}/>
        <Teacher src={TEACHER}/>
        <Container>
          <BlockText direction={'column'}>
            <TitleText textBig>Ваш первый шаг <br/>к <span>осознанной жизни</span></TitleText>
            <BlockList direction={'column'}>
              {this.item.map(({icon, text, teacher, visible}, firstStep) => (
                <div>
                  <List key={firstStep}>
                    <Circle src={icon}/>
                    <SmallerText textSmaller dangerouslySetInnerHTML={{__html: text}}/>
                  </List>
                  <TeacherSM visible={teacher} src={TEACHER}/>
                </div>
              ))}
            </BlockList>
          </BlockText>
        </Container>
      </CustomSection>
    );
  }
}

export default FirstStep;

const CustomSection = styled(Section)`
  background: url(${BG}) no-repeat center;
  padding: 0;
  min-height: 732px;
  ${p => p.theme.max('sm')`
    min-height: auto;
    padding: 32px 16px;
  `}
`;

const Logo = styled.img`
  position: absolute;
  top: 200px;
  left: 43%;
  width: 281px;
  height: 112px;
  transform: translateX(-50%); 
  ${p => p.theme.max('md')`
    top: 125px;
    left: 395px;
  `}
  ${p => p.theme.max('sm')`
    top: 25px;
    left: 2px;
  `}
`;

const Teacher = styled.img`
  position: absolute;
  top: 170px;
  right: 155px;
  width: 447px;
  height: 492px;
  ${p => p.theme.max('lg')`
    right: 0;
  `}
  ${p => p.theme.max('md')`
    width: 330px;
    height: 362px;
    top: 270px;
    right: -75px;
  `}
  ${p => p.theme.max('sm')`
    display: none;
  `}
`;

const BlockText = styled(Flex)`
  position: relative;
  top: 160px;
  left: 160px;
  z-index: ${p => p.theme.zIndex.two}
  ${p => p.theme.max('lg')`
    left: 0;
  `}
  ${p => p.theme.max('md')`
    top: 90px;
    left: 40px;
  `}
  ${p => p.theme.max('sm')`
    top: 0;
    left: 0;
  `}
`;

const TitleText = styled(Text)`
    span {
      font-weight: 900;
    }
   ${p => p.theme.max('sm')`
     font-size: 26px;
     line-height: 32px;
  `}
`;

const BlockList = styled(Flex)`
  position: relative;
  top: 10px;
  left: -45px;
  max-width: 645px;
  ${p => p.theme.max('md')`
    max-width: 501px;
    top: 0;
    left: -28px;
  `}
  ${p => p.theme.max('sm')`
    left: 0;
    max-width: 100%;
  `}
`;

const List = styled(Flex)`
  margin-bottom: 5px;
  ${p => p.theme.max('sm')`
      margin-bottom: 10px;
  `}
`;

const Circle = styled.img`
  width: 29px;
  height: 29px;
  margin-right: 16px;
  ${p => p.theme.max('md')`
    width: 20px;
    height: 20px;
    margin-right: 8px;
  `}
  ${p => p.theme.max('sm')`
    margin-top: 2px;
    width: 16px;
    height: 16px;
  `}
`;

const SmallerText = styled(Text)`
  margin: 0;
  line-height: ${p => p.theme.font.lineHeight.normal};
  opacity: ${p => p.theme.opacity.null};
  font-weight: ${p => p.theme.font.weight.w400}; 
  span {
    font-weight: 900;
  }
  ${p => p.theme.max('sm')`
    font-size: 13px;
    line-height: 20px;
  `}
`;

const TeacherSM = styled.img`
  display: none
  ${p => p.theme.max('sm')`
    position: relative;
    top: 10px;
    margin-bottom: 25px;
    display: ${ p => p.visible ? 'block' : 'none'};
    width: 288px;
    height: 316px;
  `}
`;