import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';

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
  const [cuisineCheckBoxes, setCuisineCheckBoxes] = useState(props.selectedCuisine);

  useEffect(() => {
    props.setDeliveryTypeFilter(deliveryType);
  }, [deliveryType]);

  useEffect(() => {
    props.setCuisineFilter(cuisineCheckBoxes);
  }, [cuisineCheckBoxes]);

  const renderCuisineOptions = () => {
    return Object.keys(cuisineCheckBoxes).map((cuisine, i) => (
      <label className="cuisine" key={i}>
        {startCase(cuisine)}
        <input
          type="checkbox"
          onChange={() =>
            setCuisineCheckBoxes({ ...cuisineCheckBoxes, [cuisine]: !cuisineCheckBoxes[cuisine] })
          }
          checked={cuisineCheckBoxes[cuisine]}
          value={cuisineCheckBoxes[cuisine]}
        />
      </label>
    ));
  };

  return (
    <div className={styles.wrapper}>
      <div>
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
      <div>
        <span>Select cuisines</span>
        {renderCuisineOptions()}
      </div>
    </div>
  );
};

RestaurantFilter.propTypes = propTypes;
