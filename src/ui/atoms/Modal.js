import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    headerText: PropTypes.string,
    footer: PropTypes.node,
    className: PropTypes.string,
    animation: PropTypes.string,
    fullScreen: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  render() {
    const { className, fullScreen, animation } = this.props;
    return ReactDOM.createPortal(
      <Fragment>
        <ModalBackdrop onClick={this.props.onClose}/>
        <CSSTransition
          appear
          in
          classNames="modal"
          timeout={600}
        >
          <ModalContainer
            className={className}
            animation={animation}
            fullScreen={fullScreen}
          >
            <Close onClick={this.props.onClose}>&times;</Close>
            <ModalBody onClick={e => e.stopPropagation()}>
              {this.props.children}
            </ModalBody>
          </ModalContainer>
        </CSSTransition>
      </Fragment>,
      document.body
    );
  }
}

const animations = {
  fromRight: css`
    &.modal-appear {
      transform: translate(100%, 0);
    }
    &.modal-appear-active {
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      transform: translate(0, 0);
    }
    &.modal-exit-active {
      transform: translate(100%, 0);
      transition: all 300ms ease-in;
    }
  `,
  fromBottom: css`
    &.modal-appear {
      transform: translate(0, 100%);
    }
    &.modal-appear-active {
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      transform: translate(0, 0);
    }
    &.modal-exit-active {
      transform: translate(0, 100%);
      transition: all 300ms ease-in;
    }
  `,
  fadeIn: css`
    &.modal-appear {
      opacity: 0;
    }
    &.modal-appear-active {
      opacity: 1;
      transition: all 300ms ease-out;
    }
    &.modal-exit {
      opacity: 1;
    }
    &.modal-exit-active {
      opacity: 0;
      transition: all 300ms ease-in;
    }
  `,
  empty: css`
    &.modal-appear {
    }
    &.modal-appear-active {
    }
    &.modal-exit {
    }
    &.modal-exit-active {
    }
  `,
};

const ModalBackdrop = styled.div`
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${p => p.theme.zIndex.modalBg};
  background: ${p => rgba(p.theme.colors.black, 0.3)};
`;

const ModalContainer = styled.div`
  position:fixed;
  display:flex;
  flex-direction: column;
  width: 700px;
  background: white;
  left: 50%;
  border-radius: 10px;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  z-index: ${p => p.theme.zIndex.modal};
  ${p => p.fullScreen && css`
    width: 100vw;
    height: 100vh;
  `}
  ${p => animations[p.animation] || animations.empty}
  ${p => p.theme.max('sm')`
    width: 100%;
    height: 85vh;
    display: flex;
    top: auto;
    flex-direction: column;
    justify-content: center;
    bottom: -5px;
    left: 0;
    transform: translate(0, 0);
  `}
`;

const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 7px;
  color: ${p => p.theme.colors.primary};
  font-size: 32px;
  z-index: 2;
  cursor: pointer;
  ${p => p.theme.min('md')`
    &:hover {
      color: ${p => p.theme.colors.black};
    }
  `}
`;

const ModalBody = styled.section`
  position: relative;
  flex-grow: 1;
  {/*overflow-y: scroll;
  -webkit-overflow-scrolling: touch;*/}
`;

export default Modal;
