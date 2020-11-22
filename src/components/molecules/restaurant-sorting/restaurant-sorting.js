import React, { useState } from 'react';

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
    withApplyButton,
    onClickApply,
  } = props;

  const [sortState, setSortState] = useState(selectedSortingType);

  const handleApply = e => {
    sortRestaurantList(sortState);
    onClickApply();
  };

  const onChangeSorting = event => {
    if (!withApplyButton) sortRestaurantList(event.target.value);

    setSortState(event.target.value);
  };

  const showApplyButton = () => {
    if (!withApplyButton) return null;

    return <button onClick={handleApply}>Apply</button>;
  };

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
            checked={sortState === sortingType}
          />{' '}
          {translate(translationMap[sortingType])}
        </label>
      ))}
      {showApplyButton()}
    </div>
  );
};
