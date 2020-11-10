import React from 'react';
import styles from './sidebar-home-page-style.scss';
import { MediaQueryDesktop, MediaQueryMobile } from '../../../components/atoms/media-query';
import { RestaurantSorting } from '../../../components/molecules/restaurant-sorting';

export const SidebarHomePage = () => (
  <MediaQueryDesktop>
    <aside className={styles.side}>
      <RestaurantSorting />
    </aside>
  </MediaQueryDesktop>
);
