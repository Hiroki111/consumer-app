import React from 'react';

import { Heading } from '../../atoms/heading';

import styles from './restaurant-filter.scss';

export const RestaurantFilter = props => {
  const {
    deliveryTypes,
    cuisineTypes,
    deliveryTypeTranslationMap,
    cuisineTranslationMap,
    filterRestaurantListByDeliveryType,
    filterRestaurantListByCuisine,
    selectedDeliveryType,
    selectedCuisines,
    isLoading,
    translate,
  } = props;

  const onChangeDeliveryType = event => filterRestaurantListByDeliveryType(event.target.value);
  const onChangeCuisine = event => filterRestaurantListByCuisine(event.target.value);

  return (
    <div className={styles['wrapper']}>
      <Heading level={5} align="left">
        {translate('deliveryTypeLabel')}
      </Heading>
      {deliveryTypes.map(deliveryType => (
        <label key={deliveryType}>
          <input
            disabled={isLoading}
            type="radio"
            name="restaurantDeliveryType"
            value={deliveryType}
            onChange={onChangeDeliveryType}
            checked={selectedDeliveryType === deliveryType}
          />{' '}
          {translate(deliveryTypeTranslationMap[deliveryType])}
        </label>
      ))}
      <Heading level={5} align="left">
        Select cuisines
      </Heading>
      {cuisineTypes.map(cuisineName => (
        <label key={cuisineName}>
          <input
            disabled={isLoading}
            type="checkbox"
            name="restaurantCuisine"
            value={cuisineName}
            onChange={onChangeCuisine}
            checked={selectedCuisines[cuisineName]}
          />{' '}
          {translate(cuisineTranslationMap[cuisineName])}
        </label>
      ))}
    </div>
  );
};
