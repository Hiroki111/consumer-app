import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Responsive from 'react-responsive';

import { MQ_MOBILE_MIN, MQ_DESKTOP } from './screen-sizes';

import { DeviceTypeContext } from '../../../logic/device-detection/contexts/device-type';
import * as deviceTypes from '../../../logic/device-detection/model/data/device-types';

import { onServer } from '../../../services/client-type';

const defaultSizes = {
  [deviceTypes.MOBILE]: parseInt(MQ_MOBILE_MIN, 10),
  [deviceTypes.DESKTOP]: parseInt(MQ_DESKTOP, 10),
};

const propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  values: {},
};

const MediaQuery = props => {
  const { values, children } = props;

  const deviceType = useContext(DeviceTypeContext);

  if (!onServer()) return <Responsive {...props}>{children}</Responsive>;

  return (
    <Responsive {...props} values={{ deviceWidth: defaultSizes[deviceType], ...values }}>
      {children}
    </Responsive>
  );
};

MediaQuery.propTypes = propTypes;
MediaQuery.defaultProps = defaultProps;

export { MediaQuery };
