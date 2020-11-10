import { translate } from '../../mechanisms/l10n/hoc/translate';
import { HomePage } from './home-page';

import RestaurantsListApi from '../../logic/restaurants-list/api/restaurants-list-api';

export const HomePageEnhanced = translate('pages.home')(HomePage);

HomePageEnhanced.loadUniversalData = async function({ store, router, network }) {};

HomePageEnhanced.loadClientOnlyData = async function({ store, router, network }) {
  await store.callSaga(RestaurantsListApi.fetchUniversalData);
};
