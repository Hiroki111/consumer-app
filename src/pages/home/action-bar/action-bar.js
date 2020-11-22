import React, { useState } from 'react';

import { Modal } from '../../../components/atoms/modal';
import { RestaurantSorting } from '../../../components/molecules/restaurant-sorting';
import { RestaurantFilter } from '../../../components/molecules/restaurant-filter';

import styles from './action-bar.scss';

export const ActionBar = () => {
  const [renderSort, setRenderSort] = useState(false);
  const [renderFilter, setRenderFilter] = useState(false);

  const handleClickSort = e => setRenderSort(true);
  const handleClickFilter = e => setRenderFilter(true);
  const handleCloseSort = e => setRenderSort(false);
  const handleCloseFilter = e => setRenderFilter(false);

  return (
    <div className={styles.wrapper}>
      <span onClick={handleClickSort} className="sort-switch">
        Sort
      </span>
      <span onClick={handleClickFilter} className="filter-switch">
        Filter
      </span>
      <Modal
        isOpen={renderSort}
        onClose={handleCloseSort}
        children={<RestaurantSorting withApplyButton onClickApply={handleCloseSort} />}
      />
      <Modal
        isOpen={renderFilter}
        onClose={handleCloseFilter}
        children={<RestaurantFilter withApplyButton onClickApply={handleCloseFilter} />}
      />
    </div>
  );
};
