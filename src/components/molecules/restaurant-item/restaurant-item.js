import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../card';
import RestaurantItemModel from '../../../logic/restaurant-item/models/restaurant-item-model';

import styles from './restaurant-item.scss';

const propTypes = {
  restaurant: PropTypes.shape({
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
  currency: PropTypes.shape({
    type: PropTypes.string.isRequired,
    denominator: PropTypes.number.isRequired,
  }).isRequired,
  time: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  translateFormattedCurrencyValue: PropTypes.func.isRequired,
};

export const RestaurantItem = props => {
  const { restaurant, translate, translateFormattedCurrencyValue, currency, time } = props;

  const name = RestaurantItemModel.getName(restaurant);
  const logotype = RestaurantItemModel.getLogotype(restaurant);
  const cuisines = RestaurantItemModel.getCuisines(restaurant);
  const minimumOrderValue = RestaurantItemModel.getMinOrderValue(restaurant);
  const rating = RestaurantItemModel.getMedianRate(restaurant);
  const estimatedTime = RestaurantItemModel.getEstimatedTime(restaurant);

  const handleClickCard = restaurant => () => {
    console.log(restaurant.slug);
  };

  return (
    <Card onClick={handleClickCard(restaurant)}>
      <img src={logotype} width={72} height={72} />
      <span>{name}</span>
      <div>
        {cuisines.map(cuisine => (
          <span key={cuisine}>{cuisine} </span>
        ))}
      </div>
      <div className={styles.details}>
        <span className={styles.details__item}>
          {translate('orderFrom')}{' '}
          {translateFormattedCurrencyValue(minimumOrderValue, currency.type)}
        </span>
        <span className={styles.details__item}>
          {translate('rating')} {String(rating)}
        </span>
        <span className={styles.details__item}>
          {translate('deliveryTime')} {estimatedTime} {time.type}
        </span>
      </div>
    </Card>
  );
};

RestaurantItem.propTypes = propTypes;
