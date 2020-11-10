import React from 'react';

import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import styles from './button-style.scss';

const Button = React.forwardRef((props, ref) => {
  const { children, type, disabled, onClick } = props;

  return (
    <button ref={ref} className={styles.button} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,

  /** native type attribute */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /** native disabled button attribute */
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,

  onClick: noop,
};

export { Button };
