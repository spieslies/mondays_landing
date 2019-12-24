import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Container, Flex, Box, Text, SectionHeading as SectionHeadingAtom } from 'core/ui/atoms';
import BG from 'core/assets/images/bg_inside.jpg';
import MEDITATION from 'core/assets/icons/meditation.png';
import BRAIN from 'core/assets/icons/brain.png';
import BOOKS from 'core/assets/icons/books.png';
import BUDDHISM from 'core/assets/icons/buddhism.png';
import TOP_WAVE from 'core/assets/images/wave2.png';
import BOTTOM_WAVE from 'core/assets/images/top_wave.png';

class Inside extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <TopWave />
        <BottomWave />
        <Container>
          <SectionHeading>{t('Inside.title')}</SectionHeading>
          <Flex grid>
            <Box md={6} sm={6} xs={12} padded>
              <Flex grid>
                <Box md={2} sm={12} xs={12} padded>
                  <Icon source={MEDITATION} />
                </Box>
                <Box md={10} sm={12} xs={12} padded>
                  <Heading>{t('Inside.box-1.title')}</Heading>
                  <Desc>{t('Inside.box-1.description')}</Desc>
                </Box>
              </Flex>
            </Box>
            <Box md={6} sm={6} xs={12} padded>
              <Flex grid>
                <Box md={2} sm={12} xs={12} padded>
                  <Icon source={BUDDHISM} />
                </Box>
                <Box md={10} sm={12} xs={12} padded>
                  <Heading>{t('Inside.box-2.title')}</Heading>
                  <Desc>{t('Inside.box-1.description')}</Desc>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex grid>
            <Box md={6} sm={6} xs={12} padded>
              <Flex grid>
                <Box md={2} sm={12} xs={12} padded>
                  <Icon source={BOOKS} />
                </Box>
                <Box md={10} sm={12} xs={12} padded>
                  <Heading>{t('Inside.box-3.title')}</Heading>
                  <Desc>{t('Inside.box-1.description')}</Desc>
                </Box>
              </Flex>
            </Box>
            <Box md={6} sm={6} xs={12} padded>
              <Flex grid>
                <Box md={2} sm={12} xs={12} padded>
                  <Icon source={BRAIN} />
                </Box>
                <Box md={10} sm={12} xs={12} padded>
                  <Heading>{t('Inside.box-4.title')}</Heading>
                  <Desc>{t('Inside.box-1.description')}</Desc>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.div`
  position: relative;
  padding: 70px 0;
  background: url(${BG});
  background-size: cover;
  overflow: hidden;
  ${p => p.theme.min('md')`
    background-attachment: fixed;
    background-size: 120%;
  `}
  ${p => p.theme.max('sm')`
    padding-bottom: 30px;
  `}
`;

const TopWave = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background-image:url(${TOP_WAVE});
  background-size: 103% 25%;
  background-repeat: no-repeat;
`;

const BottomWave = styled.div`
  position: absolute;
  width: 120%;
  height: 50px;
  bottom: 0;
  left: -5%;
  background-image:url(${BOTTOM_WAVE});
  background-size: 103% 35%;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const Icon = styled.div`
  position: relative;
  top: 22px;
  width: 60px;
  height: 60px;
  background-image: url(${p => p.source});
  background-size: cover;
  ${p => p.theme.max('md')`
    top: 0;
    width: 80px;
    height: 80px;
    margin: 0 auto;
  `}
`;

const SectionHeading = styled(SectionHeadingAtom)`
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Heading = styled.h3`
  color: white;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;
  ${p => p.theme.max('md')`
    text-align: center;
    font-size: 18px;
    padding: 0 ${p.theme.general.mobilePadding};
  `}
`;

const Desc = styled(Text)`
  color: white;
  margin-bottom: 40px;
  ${p => p.theme.max('md')`
    text-align: justify;
    padding: 0 ${p.theme.general.mobilePadding};
  `}
`;

export default withTranslation()(Inside);