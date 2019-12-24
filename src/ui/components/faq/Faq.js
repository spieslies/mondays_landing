import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Container, Text, SectionHeading } from 'ui/atoms';

class Question extends PureComponent {
  state = {
    expanded: !!this.props.expanded,
  };

  toggleExpanded = () => {
    this.setState(st => ({ expanded: !st.expanded }));
  };

  render() {
    const { expanded } = this.state;
    return (
      <QuestionCont>
        <QuestionButton onClick={this.toggleExpanded}>{expanded ? <AngleUp /> : <AngleDown />}</QuestionButton>
        <QuestionTitle onClick={this.toggleExpanded}>{this.props.title}</QuestionTitle>
        {expanded && <QuestionText>{this.props.children}</QuestionText>}
      </QuestionCont>
    )
  }
}

class Faq extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <Container>
          <SectionHeading>{t('Faq.title')}</SectionHeading>
          <Question title={t('Faq.question-1.title')} expanded>{t('Faq.question-1.text')}</Question>
          <Question title={t('Faq.question-2.title')}>{t('Faq.question-2.text')}</Question>
          <Question title={t('Faq.question-3.title')}>{t('Faq.question-3.text')}</Question>
          <Question title={t('Faq.question-4.title')}>{t('Faq.question-4.text')}</Question>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.div`
  padding: 20px 0;
`;

const QuestionCont = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const QuestionTitle = styled.h4`
  color: ${p => p.theme.colors.black};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-right: 30px;
  padding-left: 45px;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

const QuestionButton = styled.button`
  position: absolute;
  font-size: 70px;
  background: transparent;
  padding: 7px 0;
  border: 0;
  cursor: pointer;
  ${p => p.theme.max('sm')`
    left: 7px;
  `}
`;

const QuestionText = styled(Text)`
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 45px;
`;

const AngleUp = styled.div`
  position: relative;
  top: 0;
  left: 9px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 2px;
    width: 14px;
    background: ${p => p.theme.colors.primary};
    transform: rotate(-45deg) translate(-6px);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 2px;
    width: 14px;
    background: ${p => p.theme.colors.primary};
    transform: rotate(45deg) translate(6px);
  }
`;

const AngleDown = styled.div`
  position: relative;
  top: 8px;
  left: 9px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 2px;
    width: 14px;
    background: ${p => p.theme.colors.primary};
    transform: rotate(45deg) translate(-6px);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 2px;
    width: 14px;
    background: ${p => p.theme.colors.primary};
    transform: rotate(-45deg) translate(6px);
  }
`;

export default withTranslation()(Faq);
