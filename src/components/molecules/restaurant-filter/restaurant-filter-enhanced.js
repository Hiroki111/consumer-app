import { connect } from 'react-redux';
import flow from 'lodash/flow';

import { translate } from '../../../mechanisms/l10n/hoc/translate';
import { restaurantsListIsLoadingSelector } from '../../../logic/restaurants-list/ducks/restaurant-list';
import {
  selectedDeliveryTypeSelector,
  selectedCuisineSelector,
  filterRestaurantListByDeliveryType,
  filterRestaurantListByCuisine,
} from '../../../logic/restaurant-filtering/ducks/restaurant-filtering-reducer';

import RestaurantListFiltering from '../../../logic/restaurant-filtering/models/restaurant-filtering-model';
import { RestaurantFilter } from './restaurant-filter';

const mapStateToProps = state => ({
  isLoading: restaurantsListIsLoadingSelector(state),
  selectedDeliveryType: selectedDeliveryTypeSelector(state),
  selectedCuisines: selectedCuisineSelector(state),
  deliveryTypes: RestaurantListFiltering.getDeliveryTypesArray(),
  deliveryTypeTranslationMap: RestaurantListFiltering.getDeliveryTypeTranslationsMap(),
  cuisineTypes: RestaurantListFiltering.getCuisineTypesArray(),
  cuisineTranslationMap: RestaurantListFiltering.getCuisineTranslationsMap(),
});

const mapDispatchToProps = dispatch => ({
  filterRestaurantListByDeliveryType: deliveryType =>
    dispatch(filterRestaurantListByDeliveryType(deliveryType)),
  filterRestaurantListByCuisine: cuisineName =>
    dispatch(filterRestaurantListByCuisine(cuisineName)),
});

export const RestaurantFilterEnhanced = flow(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('components.restaurantFilter'),
)(RestaurantFilter);
