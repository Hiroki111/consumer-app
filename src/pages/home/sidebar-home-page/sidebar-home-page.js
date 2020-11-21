import React from 'react';
import styles from './sidebar-home-page-style.scss';
import { MediaQueryDesktop, MediaQueryMobile } from '../../../components/atoms/media-query';
import { RestaurantSorting } from '../../../components/molecules/restaurant-sorting';
import { RestaurantFilter } from '../../../components/molecules/restaurant-filter';

export const SidebarHomePage = () => (
  <MediaQueryDesktop>
    <aside className={styles.side}>
      <RestaurantSorting />
      <RestaurantFilter />
    </aside>
  </MediaQueryDesktop>
);
