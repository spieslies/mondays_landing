import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';

import {
    Text,
} from "core/ui/atoms";

import MINUS from 'core/assets/icons/MinusAsk.svg';
import PLUS from 'core/assets/icons/PlusAsk.svg';

class Collapsed extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isOpened: PropTypes.bool,
        setOpened: PropTypes.func.isRequired
    };

    render() {
        const { title, text, isOpened, setOpened } = this.props;
        return (
            <CollapsedItem isOpened={isOpened} onClick={setOpened}>
              <Background isOpened={isOpened} />
              <Icon src={isOpened ? MINUS : PLUS} />
              <Title isOpened={isOpened} textSmall>{title}</Title>
              <Collapse isOpened={isOpened}>
                <TextCollapse textSmaller isOpened={isOpened}>{text}</TextCollapse>
              </Collapse>
            </CollapsedItem>
        );
    }
}

const CollapsedItem = styled.div`
  position: relative;
  max-width: 544px;
  margin: 0 16px 24px 16px;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(118, 152, 207, 0.16);
  border-radius: 20px;
  width: 100%;
  padding: 24px;
  background: ${p => p.theme.colors.white};
  transition: all .6s ease;
  .ReactCollapse--collapse {
      transition: height .6s;
    }
  ${p => p.theme.max('lg')`
    max-width: 450px;
  `}
   ${p => p.theme.max('md')`
    width: 624px;
    max-width: 100%;
  `}
   ${p => p.theme.max('sm')`
    width: 100%;
    margin: 0 0 24px 0;
    padding: 16px;
  `}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${p => p.theme.colors.gradientBlue};
  opacity: ${p => p.isOpened ? 1 : 0};
  transition: opacity .6s ease;
`;

const Title = styled(Text)`
  position: relative;
  border-radius: 20px;
  width: 100%;
  margin: 0;
  font-weight: 600;
  color: ${p => p.isOpened ? p.theme.colors.white : p.theme.colors.black};
  margin-bottom: ${p => p.isOpened ? 12 : 0}px;
  transition: color .4s ease;
`;

const Icon = styled.img`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  ${p => p.theme.max('sm')`
    right: 0;
    top: 100%;
  `}
`;


const TextCollapse = styled(Text)`
  position: relative;
  color: ${p => p.theme.colors.white};
  margin: 0;
  line-height: ${p => p.theme.font.lineHeight.small};
  opacity: ${p => p.isOpened ? 1 : 0}
  transition: all .6s ease;
`;

export default Collapsed;