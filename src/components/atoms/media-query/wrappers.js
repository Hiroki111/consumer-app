import React from 'react';
import PropTypes from 'prop-types';

import { MediaQuery } from './media-query';
import { MQ_MOBILE_MAX, MQ_DESKTOP, MQ_LARGE } from './screen-sizes';

const MediaQueryMobile = ({ children }) => (
  <MediaQuery maxWidth={MQ_MOBILE_MAX}>{children}</MediaQuery>
);

MediaQueryMobile.propTypes = {
  children: PropTypes.node.isRequired,
};

const MediaQueryDesktop = ({ children }) => (
  <MediaQuery minWidth={MQ_DESKTOP}>{children}</MediaQuery>
);

MediaQueryDesktop.propTypes = {
  children: PropTypes.node.isRequired,
};

const MediaQueryLarge = ({ children }) => <MediaQuery minWidth={MQ_LARGE}>{children}</MediaQuery>;

MediaQueryLarge.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MediaQueryMobile, MediaQueryDesktop, MediaQueryLarge };
