import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../card';
import RestaurantItemModel from '../../../logic/restaurant-item/models/restaurant-item-model';

const propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  translate: PropTypes.func.isRequired,
};

export const RestaurantItem = props => {
  const { restaurant, translate } = props;

  const name = RestaurantItemModel.getName(restaurant);
  const logotype = RestaurantItemModel.getLogotype(restaurant);
  const cuisines = RestaurantItemModel.getCuisines(restaurant);

  return (
    <Card>
      <img src={logotype} width={72} height={72} />
      <span>{name}</span>
      <div>
        {cuisines.map(cuisine => (
          <span key={cuisine}>{cuisine} </span>
        ))}
      </div>
    </Card>
  );
};

RestaurantItem.propTypes = propTypes;
