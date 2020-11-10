import React, { useState } from 'react';

import PropTypes from 'prop-types';
import classnames from 'clsx';
import noop from 'lodash/noop';
import isNull from 'lodash/isNull';

import styles from './input-style.scss';

const Input = React.forwardRef((props, ref) => {
  const {
    label,
    value,
    name,
    type,
    placeholder,
    disabled,
    autoComplete,
    autoFocus,
    error,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const placeholderValue = placeholder === false ? null : placeholder || label;

  const hasError = err => {
    if (err && (typeof err === 'string' || typeof err === 'boolean')) {
      return true;
    }

    return false;
  };

  const classNames = classnames(styles.input, {
    [styles['__is-focused']]: isFocused,
    [styles['__is-active']]: value,
    [styles['__is-error']]: hasError(error),
    [styles['__is-disabled']]: disabled,
  });

  const handleFocus = e => {
    setIsFocused(true);

    onFocus(e);
  };

  const handleBlur = e => {
    setIsFocused(false);

    onBlur(e);
  };

  return (
    <div className={classNames}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.wrapper}>
        <div className={styles.decor}>
          <input
            ref={ref}
            className={styles.element}
            placeholder={placeholderValue}
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
          />
        </div>
        {typeof error !== 'boolean' && !isNull(error) && (
          <div className={styles['error-container']}>
            {error && typeof error !== 'boolean' && <span>{error}</span>}
          </div>
        )}
      </div>
    </div>
  );
});

Input.propTypes = {
  /** label string value */
  label: PropTypes.node,

  /** native value attribute */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** native name attribute */
  name: PropTypes.string,

  /** native type attribute */
  type: PropTypes.string,

  /** unless specified "false" placeholder will be using "label" if specified */
  placeholder: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** native disabled attribute */
  disabled: PropTypes.bool,

  /** native autocomplete attribute */
  autoComplete: PropTypes.string,

  /** native autofocus attribute */
  autoFocus: PropTypes.bool,

  /** defines error state and optional text content */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  autoComplete: 'off',
  autoFocus: false,
  error: false,

  onFocus: noop,
  onBlur: noop,
  onChange: noop,
};

export { Input };
