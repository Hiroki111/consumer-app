import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  DELIVERY_TYPE_DELIVERY,
  DELIVERY_TYPE_PICKUP,
} from '../../../logic/restaurants-list/ducks/restaurant-list';

import styles from './restaurant-filter.scss';

const propTypes = {
  setDeliveryTypeFilter: PropTypes.func.isRequired,
};

export const RestaurantFilter = props => {
  const [deliveryType, setDeliveryType] = useState(DELIVERY_TYPE_DELIVERY);

  useEffect(() => {
    props.setDeliveryTypeFilter(deliveryType);
  }, [deliveryType]);

  return (
    <div className={styles.wrapper}>
      <span>Select delivery method</span>
      <label>
        Delivery
        <input
          type="radio"
          onChange={() => setDeliveryType(DELIVERY_TYPE_DELIVERY)}
          checked={deliveryType === DELIVERY_TYPE_DELIVERY}
        />
      </label>
      <label>
        Pickup
        <input
          type="radio"
          onChange={() => setDeliveryType(DELIVERY_TYPE_PICKUP)}
          checked={deliveryType === DELIVERY_TYPE_PICKUP}
        />
      </label>
    </div>
  );
};

RestaurantFilter.propTypes = propTypes;
