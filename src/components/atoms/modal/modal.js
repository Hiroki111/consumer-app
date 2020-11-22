import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classnames from 'clsx';
import { noop, uniqueId } from 'lodash';
import ExecutionEnvironment from 'exenv';

import { setBodyHasScrollbarBehavior } from '../../../helpers/scrollbar-width-behavior';

import { Heading } from '../heading';

import styles from './modal-style.scss';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
    };
  }

  componentDidMount() {
    const { appElementSelector } = this.props;
    ReactModal.setAppElement(appElementSelector);
    // make sure DOM is ready and component loaded
    this.setState({
      initialized: true,
    });
  }

  componentWillUnmount() {
    // reset body width on unmount
    setBodyHasScrollbarBehavior(true);
  }

  render() {
    const {
      className,
      children,
      isOpen,
      heading,
      subHeading,
      header,
      footer,
      mode,
      modBackground,
      modStickyHeader,
      showClose,
      contentLabel,
      modReturnFocusAfterClose,
      onClose,
    } = this.props;

    const { initialized } = this.state;

    // return early if not initialized
    if (!initialized) return null;

    const bodyClassName = '__modal-is-open';
    const headingId = uniqueId('modal-heading_');

    const wrapperClassNames = classnames('modal-wrapper', className, {});
    const overlayClassName = classnames(styles.overlay, {
      [styles['__overlay-no-scroll']]: modStickyHeader,
    });
    const classNames = classnames('modal', styles.modal, {
      [styles[`__mode-${mode}`]]: mode,
      [styles.__background]: modBackground,
      [styles['__sticky-header']]: modStickyHeader,
    });

    const onRequestCloseHandler = () => {
      setBodyHasScrollbarBehavior(true);

      return onClose();
    };

    const onAfterOpenHandler = () => {
      setBodyHasScrollbarBehavior(false);
    };

    // define back button markup
    const closeButton = (
      <div className={styles.close}>
        <a onClick={onRequestCloseHandler}>x</a>
      </div>
    );

    // render close button depending on modal mode
    const closeButtonOutput =
      mode === 'brand-hero' ? (
        <div className={styles['close-wrapper']}>{closeButton}</div>
      ) : (
        closeButton
      );

    // add inverted color attribute depending on modal mode
    const invertedProp = mode !== 'plain' && { 'data-dss-inv': true };

    // return heading markup depending on modal mode
    const headingType =
      mode !== 'brand' ? (
        <Heading tag="h2" level={mode === 'plain' ? 5 : 4}>
          {heading}
        </Heading>
      ) : (
        <strong>{heading}</strong>
      );

    // define header content
    const headerContent = (
      <>
        {heading && (
          <div id={headingId} className={styles.heading}>
            {headingType}
          </div>
        )}
        {subHeading && <div className={styles['sub-heading']}>{subHeading}</div>}
      </>
    );

    // render header content depending on modal mode
    const headerLayout = headerContent;

    return (
      <ReactModal
        role="dialog"
        className={classNames}
        overlayClassName={overlayClassName}
        portalClassName={wrapperClassNames}
        bodyOpenClassName={bodyClassName}
        isOpen={isOpen && ExecutionEnvironment.canUseDOM}
        onAfterOpen={onAfterOpenHandler}
        onRequestClose={onRequestCloseHandler}
        contentLabel={contentLabel}
        aria={
          heading
            ? {
                labelledby: headingId,
              }
            : null
        }
        shouldReturnFocusAfterClose={modReturnFocusAfterClose}
      >
        <div className={styles.wrapper}>
          <header className={styles.header} {...invertedProp}>
            <div className={styles['header-wrapper']}>
              <div className={styles['header-content']}>{header || headerLayout}</div>
              {showClose && closeButtonOutput}
            </div>
          </header>

          <div className={styles['content-wrapper']}>
            <div className={styles.content}>{children}</div>
          </div>

          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,

  /** set modal active/open state */
  isOpen: PropTypes.bool.isRequired,

  /** set modal heading */
  heading: PropTypes.node,

  /** optinal modal sub content */
  subHeading: PropTypes.node,

  /** define custom header content */
  header: PropTypes.node,

  /** define optional footer content */
  footer: PropTypes.node,

  /** set additional banner element above the content */
  banner: PropTypes.node,

  /** define if header is rendered or not  */
  mode: PropTypes.oneOf(['plain', 'brand', 'brand-hero']),

  /** when set assigns a shade to background */
  modBackground: PropTypes.bool,

  /** dis-/enable sticky header/banner behaviour */
  modStickyHeader: PropTypes.bool,

  /** define close button visibility */
  showClose: PropTypes.bool,

  /** define aria-labeled attribute, pass heading/title */
  contentLabel: PropTypes.string,

  /** react-modal prop, defines if focus should be returned to trigger element after close  */
  modReturnFocusAfterClose: PropTypes.bool,

  /** app root element selector */
  appElementSelector: PropTypes.string,

  onClose: PropTypes.func,

  qaSelector: PropTypes.string,
  closeButtonQASelector: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
  heading: '',
  subHeading: '',
  header: null,
  footer: null,
  banner: null,
  mode: 'plain',
  modBackground: false,
  modStickyHeader: false,
  showClose: true,
  modReturnFocusAfterClose: false,
  appElementSelector: '#root',
  contentLabel: '',

  onClose: noop,

  qaSelector: 'modal',
  closeButtonQASelector: 'modal-close-button',
};

Modal.displayName = 'Modal';

export { Modal };
