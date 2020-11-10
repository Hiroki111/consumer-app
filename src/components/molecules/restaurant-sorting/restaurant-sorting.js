import React from 'react';

import { Heading } from '../../atoms/heading';

import styles from './restaurant-sorting-style.scss';

export const RestaurantSorting = props => {
  const {
    sortingTypes,
    translationMap,
    selectedSortingType,
    sortRestaurantList,
    isLoading,
    translate,
  } = props;

  const onChangeSorting = event => sortRestaurantList(event.target.value);

  return (
    <div>
      <Heading level={5} align="left">
        {translate('label')}
      </Heading>
      {sortingTypes.map(sortingType => (
        <label key={sortingType} className={styles['restaurant-sorting']}>
          <input
            disabled={isLoading}
            type="radio"
            name="restaurantSorting"
            value={sortingType}
            onChange={onChangeSorting}
            checked={selectedSortingType === sortingType}
          />{' '}
          {translate(translationMap[sortingType])}
        </label>
      ))}
    </div>
  );
};
