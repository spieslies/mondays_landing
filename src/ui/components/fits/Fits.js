import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';
import { withTranslation } from 'react-i18next';

import { Container, Flex, Box, SectionHeading } from 'ui/atoms';
import POSITIVE_IMAGE from 'assets/images/positive_brain.png';
import NEGATIVE_IMAGE from 'assets/images/negative_brain.png';
import SATI_GREEN from 'assets/icons/sati_green.png';

class Fits extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <Container>
          <SectionHeading>{t('Fits.title')}</SectionHeading>
          <Flex alignItems="center">
            <Box md={6}>
              <List>
                <Item>{t('Fits.text-1')}</Item>
                <Item>{t('Fits.text-2')}</Item>
                <Item>{t('Fits.text-3')}</Item>
                <Item>{t('Fits.text-4')}</Item>
              </List>
            </Box>
            <Box md={6} hiddenSM hiddenXS>
              <ReactCompareImage
                leftImage={POSITIVE_IMAGE}
                rightImage={NEGATIVE_IMAGE}
              />
            </Box>
          </Flex>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.section`
  padding: 20px 0;
`;

const List = styled.ul`
  list-style: none;
  ${p => p.theme.max('sm')`
    padding: 0 ${p => p.theme.general.mobilePadding} 0 calc(${p => p.theme.general.mobilePadding} * 2.6);
  `}
`;

const Item = styled.li`
  position: relative;
  font-size: 18px;
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(${SATI_GREEN});
    background-size: cover;
    left: -36px;
    top: 3px;
  }
`;

export default withTranslation()(Fits);
