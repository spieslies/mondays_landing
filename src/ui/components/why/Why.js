import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Flex,
  Text,
} from "ui/atoms";

import CICRLE from 'assets/images/CircleWhy.png';
import PHONE from 'assets/images/PhoneWhy.png';
import LINE from 'assets/images/LineWhy.png';
import SMALLCIRCLE from 'assets/images/SmallCircleWhy.png';
import ICON1 from 'assets/icons/IconWhy1.png';
import ICON2 from 'assets/icons/IconWhy2.png';
import ICON3 from 'assets/icons/IconWhy3.png';

class Why extends PureComponent {
  items = [
    {
      icon : ICON1,
      title: 'Курс от профессионала',
      text:'Автор курса Аджан Хуберт - буддийский Учитель, представляющий традицию раннего буддизма тхеравада, который почти 10 лет своей жизни провел в монашестве.'
    },
    {
      icon : ICON2,
      title: 'Удобный график медитаций',
      text:'Благодаря нашему приложению вы можете сами решать в какое время удобнее позаниматся. Вы сможете выбрать удобное время что поможет вам лучше погрузится в в каждий урок!',
      left: true
    },
    {
      icon : ICON3,
      title: 'В конце курса вы получите трекер',
      text:'После прохождения курса приложение превращается в трекер, у которого есть возможность вести дневник. Вы сможете каждый раз после медитации записывать свой опыт!'
    }
  ];
  render() {
    return (
      <CustomSection>
        <Container>
          <BlockImage>
            <Circle src={CICRLE}/>
            <Phone src={PHONE}/>
            <Line src={LINE}/>
            <SmallCircle1 src={SMALLCIRCLE}/>
            <SmallCircle2 src={SMALLCIRCLE}/>
            <SmallCircle3 src={SMALLCIRCLE}/>
            <SmallCircle4 src={SMALLCIRCLE}/>
            <SmallCircle5 src={SMALLCIRCLE}/>
            <SmallCircle6 src={SMALLCIRCLE}/>
          </BlockImage>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <TitleText textBig>Почему Sati?</TitleText>
            <BlockWhy justifyContent={'center'} alignItems={'center'} direction={'column'}>
              {this.items.map(({ icon, title, text, moreLeft, left, width}, why) => (
                <BlockText key={why} moreLeft={left} width={left}>
                  <Icon src={icon}/>
                  <BlockTextSM direction={'column'}>
                    <TitleTextSmall textNormal>{title}</TitleTextSmall>
                    <SmallerText textSmaller>{text}</SmallerText>
                  </BlockTextSM>
                </BlockText>
              ))}
            </BlockWhy>
          </Flex>
        </Container>
      </CustomSection>
    );
  }
}

export default Why;

const CustomSection = styled(Section)`
  padding: 140px 0;
  ${p => p.theme.max('md')`
    padding: 60px 0;
  `}
  ${p => p.theme.max('sm')`
    position: relative;
    z-index: ${p => p.theme.zIndex.three};
    padding: 20px 16px;
  `}
`;

const BlockImage = styled.div`
  position: relative;
  top: 200px;
  left: 75px;
  ${p => p.theme.max('lg')`
    top: 225px;
    left: -45px;
  `}
  ${p => p.theme.max('md')`
    top: 200px;
    left: -45px;
  `}
  ${p => p.theme.max('sm')`
    display: none;
  `}
`;

const Circle = styled.img`
  position: absolute;
  width: 446px;
  height: 446px;
  z-index: ${p => p.theme.zIndex.two};
  ${p => p.theme.max('md')`
    width: 364px;
    height: 364px;
  `}
`;

const Phone = styled(Circle)`
  left: 80px;
  top: -60px;
  width: 285px;
  height: 568px;
  z-index: ${p => p.theme.zIndex.three};
  ${p => p.theme.max('md')`
    left: 55px;
    top: -70px;
    width: 250px;
    height: 500px;
  `}
`;

const Line = styled(Circle)`
  left: 315px;
  top: 55px;
  width: 200px;
  height: 331px;
  z-index: ${p => p.theme.zIndex.one};
  ${p => p.theme.max('md')`
    width: 200px;
    height: 331px;
    left: 188px;
    top: 0px;
  `}
`;

const SmallCircle1 = styled(Circle)`
  top: 10px;
  left: 390px;
  width: 17px;
  height: 17px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const SmallCircle2 = styled(Circle)`
  top: 405px;
  left: 355px;
  width: 29px;
  height: 29px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const SmallCircle3 = styled(Circle)`
  top: 535px;
  left: -90px;
  width: 29px;
  height: 29px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const SmallCircle4 = styled(Circle)`
  top: 445px;
  left: 10px;
  width: 47px;
  height: 47px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const SmallCircle5 = styled(Circle)`
  top: 190px;
  left: -120px;
  width: 74px;
  height: 74px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const SmallCircle6 = styled(Circle)`
  top: -140px;
  left: 20px;
  width: 145px;
  height: 145px;
  ${p => p.theme.max('md')`
    display: none;
  `}
`;

const TitleText = styled(Text)`
  ${p => p.theme.max('sm')`
    font-size: 26px;
    line-height: 32px;
  `}
`;

const BlockWhy = styled(Flex)`
  position: relative;
  top: 80px;
  ${p => p.theme.max('md')`
    top: 30px;
  `}
  ${p => p.theme.max('sm')`
    top: 10px;
    z-index: ${p => p.theme.zIndex.three};
  `}
`;

const BlockText = styled(Flex)`
  position: relative;
  left: ${ p => p.moreLeft ? '250px' : '180px'};
  max-width: 710px;
  margin-bottom: 75px;
  ${p => p.theme.max('lg')`
    max-width: 510px;
  `}  
  ${p => p.theme.max('md')`
    max-width: ${ p => p.width ? '358px' : '430px'};;
    left: ${ p => p.moreLeft ? '158px' : '120px'};
    margin-bottom: 45px;
  `}
  ${p => p.theme.max('sm')`
    max-width: 100%;
    left: 0;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 25px;  
  `}
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 32px;
  ${p => p.theme.max('md')`
    width: 56px;
    height: 56px;
    margin-right: 16px;
  `}
  ${p => p.theme.max('md')`
    margin-right: 0;
    margin-bottom: 16px;
  `}
`;

const BlockTextSM = styled(Flex)`
  align-items: center;
`;

const TitleTextSmall = styled(Text)`
  font-weight: ${p => p.theme.font.weight.w700};
  margin: 0 0 5px 0;
  width: 100%;
  ${p => p.theme.max('sm')`
    font-size: 17px;
    line-height: 24px;
    margin: 0 0 3px 0;
  `}
`;

const SmallerText = styled(Text)`
  line-height: ${p => p.theme.font.lineHeight.small};
  font-weight: ${p => p.theme.font.weight.w500};
  margin: 0;
  ${p => p.theme.max('sm')`
    font-size: 13px;
    line-height: 20px;
  `}
`;
