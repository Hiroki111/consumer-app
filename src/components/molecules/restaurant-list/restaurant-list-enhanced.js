import { connect } from 'react-redux';

import {
  filteredRestaurantsListSelector,
  restaurantsListIsLoadingSelector,
} from '../../../logic/restaurants-list/ducks/restaurant-list';

import { RestaurantList } from './restaurant-list';

const mapStateToProps = state => ({
  isLoading: restaurantsListIsLoadingSelector(state),
  list: filteredRestaurantsListSelector(state),
});

const mapDispatchToProps = {};

export const RestaurantListEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantList);
