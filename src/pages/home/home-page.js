import React from 'react';

import { Page } from '../../components/page';
import styles from './home-page-style.scss';

import { RestaurantList } from '../../components/molecules/restaurant-list';
import { RestaurantSorting } from '../../components/molecules/restaurant-sorting';
import { RestaurantFilter } from '../../components/molecules/restaurant-filter';
import { MediaQueryMobile } from '../../components/atoms/media-query';

import { SidebarHomePage } from './sidebar-home-page';

export const HomePage = props => (
  <Page>
    <SidebarHomePage />
    <div className={styles.content}>
      <MediaQueryMobile>
        <div className={styles.filters}>
          <RestaurantSorting />
        </div>
      </MediaQueryMobile>
      <RestaurantFilter />
      <RestaurantList />
    </div>
  </Page>
);
