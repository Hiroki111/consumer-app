import React, { useState } from 'react';

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
    filterRestaurantListByDeliveryTypeAndCuisine,
    selectedDeliveryType,
    selectedCuisines,
    isLoading,
    translate,
    withApplyButton,
    onClickApply,
  } = props;
  const [deliveryTypeState, setDeliveryTypeState] = useState(selectedDeliveryType);
  const [selectedCuisinesState, setSelectedCuisinesState] = useState(selectedCuisines);

  const onChangeDeliveryType = event => {
    if (!withApplyButton) filterRestaurantListByDeliveryType(event.target.value);

    setDeliveryTypeState(event.target.value);
  };
  const onChangeCuisine = event => {
    const newState = {
      ...selectedCuisinesState,
      [event.target.value]: !selectedCuisinesState[event.target.value],
    };
    if (!withApplyButton) filterRestaurantListByCuisine(newState);

    setSelectedCuisinesState(newState);
  };

  const handleApply = e => {
    filterRestaurantListByDeliveryTypeAndCuisine(deliveryTypeState, selectedCuisinesState);
    onClickApply();
  };

  const showApplyButton = () => {
    if (!withApplyButton) return null;

    return <button onClick={handleApply}>Apply</button>;
  };

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
            checked={deliveryTypeState === deliveryType}
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
            checked={selectedCuisinesState[cuisineName]}
          />{' '}
          {translate(cuisineTranslationMap[cuisineName])}
        </label>
      ))}
      {showApplyButton()}
    </div>
  );
};
