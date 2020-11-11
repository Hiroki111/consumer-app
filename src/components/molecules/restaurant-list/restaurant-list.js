import React from 'react';
import PropTypes from 'prop-types';

import RestaurantItemModel from '../../../logic/restaurant-item/models/restaurant-item-model';

import { Button } from '../../atoms/button';
import { RestaurantItem } from '../restaurant-item';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      restaurantLogo: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      shipping: PropTypes.shape({
        type: PropTypes.arrayOf(PropTypes.string).isRequired,
        estimatedTime: PropTypes.number.isRequired,
      }).isRequired,
      info: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        minimumOrderValue: PropTypes.number.isRequired,
        ratings: PropTypes.shape({
          total: PropTypes.number.isRequired,
          score: PropTypes.shape({
            median: PropTypes.number.isRequired,
            average: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export const RestaurantList = ({ isLoading, list = [] }) => (
  <div>
    {isLoading ? <div>Is loading</div> : null}
    <div>
      {list.map(restaurantItem => (
        <RestaurantItem
          key={RestaurantItemModel.getId(restaurantItem)}
          restaurant={restaurantItem}
        />
      ))}
    </div>
  </div>
);

RestaurantList.propTypes = propTypes;
