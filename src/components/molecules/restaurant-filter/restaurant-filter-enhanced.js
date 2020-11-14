import { connect } from 'react-redux';

import {
  setDeliveryTypeFilter,
  setCuisineFilter,
  selectedCuisineSelector,
} from '../../../logic/restaurants-list/ducks/restaurant-list';
import { RestaurantFilter } from './restaurant-filter';

const mapStateToProps = state => ({
  selectedCuisine: selectedCuisineSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setDeliveryTypeFilter: deliveryType => dispatch(setDeliveryTypeFilter(deliveryType)),
  setCuisineFilter: selectedCuisineStatus => dispatch(setCuisineFilter(selectedCuisineStatus)),
});

export const RestaurantFilterEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFilter);
