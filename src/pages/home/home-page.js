import React from 'react';

import { Page } from '../../components/page';
import styles from './home-page-style.scss';

import { RestaurantList } from '../../components/molecules/restaurant-list';
import { MediaQueryMobile } from '../../components/atoms/media-query';

import { SidebarHomePage } from './sidebar-home-page';
import { ActionBar } from './action-bar';

export const HomePage = props => (
  <Page>
    <SidebarHomePage />
    <div className={styles.content}>
      <RestaurantList />
      <MediaQueryMobile>
        <div className={styles.actions}>
          <ActionBar />
        </div>
      </MediaQueryMobile>
    </div>
  </Page>
);
