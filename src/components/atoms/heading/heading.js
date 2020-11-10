import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'clsx';

import styles from './heading-style.scss';

const Heading = props => {
  const { children, level, align } = props;

  const headingTag = `h${level}`;

  const classNames = classnames(styles.heading, {
    [styles[`__level-${level}`]]: level,
    [styles[`__align-${align}`]]: align,
  });

  return React.createElement(
    headingTag,
    {
      className: classNames,
    },
    children,
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,

  /** required by default for h- tag, also defines visual */
  level: PropTypes.oneOf([null, 1, 2, 3, 4, 5]),

  /** specify heading alignment */
  align: PropTypes.oneOf(['', 'left', 'right', 'center']),
};

Heading.defaultProps = {
  level: null,
  align: '',
};

export { Heading };
