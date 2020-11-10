import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'clsx';
import noop from 'lodash/noop';
import isNull from 'lodash/isNull';

import { Option } from './option';
import OptionShape from './options-shape';

import styles from './select-style.scss';

const Select = React.forwardRef((props, ref) => {
  const {
    label,
    value,
    name,
    options,
    disabled,
    autoComplete,
    autoFocus,
    error,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const hasError = err => {
    if (err && (typeof err === 'string' || typeof err === 'boolean')) {
      return true;
    }

    return false;
  };

  const classNames = classnames(styles.select, {
    [styles['__is-disabled']]: disabled,
    [styles['__is-error']]: hasError(error),
  });

  return (
    <div className={classNames}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.content}>
        <select
          ref={ref}
          className={styles.element}
          value={value}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        >
          {options.map((option, key) => (
            // use option.keyValue pass a unique key value. that can be useful
            // in case when we pass completely different options to select component
            // an option selected previously remains selected even if
            // it has changed its value.
            <Option {...option} key={option.keyValue || key} />
          ))}
        </select>
      </div>
      {typeof error !== 'boolean' && !isNull(error) && (
        <div className={styles['error-container']}>
          {error && typeof error !== 'boolean' && <span>{error}</span>}
        </div>
      )}
    </div>
  );
});

Select.propTypes = {
  /** label string value */
  label: PropTypes.string,

  /** native value attribute */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** native name attribute */
  name: PropTypes.string,

  /** native select options */
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,

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

Select.defaultProps = {
  label: '',
  name: '',
  value: '',
  disabled: false,

  autoFocus: false,
  autoComplete: 'off',
  error: false,

  onFocus: noop,
  onBlur: noop,
  onChange: noop,
};

export { Select };
