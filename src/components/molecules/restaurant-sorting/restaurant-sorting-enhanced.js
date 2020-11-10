import { connect } from 'react-redux';
import flow from 'lodash/flow';

import { RestaurantSorting } from './restaurant-sorting';
import { translate } from '../../../mechanisms/l10n/hoc/translate';
import {
  restaurantSortingTypeSelector,
  sortRestaurantList,
} from '../../../logic/restaurant-sorting/ducks/restaurant-sorting-reducer';
import RestaurantListSortingModel from '../../../logic/restaurant-sorting/models/restaurant-sorting-model';
import { restaurantsListIsLoadingSelector } from '../../../logic/restaurants-list/ducks/restaurant-list';

const mapStateToProps = state => ({
  isLoading: restaurantsListIsLoadingSelector(state),
  selectedSortingType: restaurantSortingTypeSelector(state),
  sortingTypes: RestaurantListSortingModel.getSortingTypesArray(),
  translationMap: RestaurantListSortingModel.getTranslationsMap(),
});

const mapDispatchToProps = {
  sortRestaurantList,
};

export const RestaurantSortingEnhanced = flow(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('components.restaurantSorting'),
)(RestaurantSorting);
