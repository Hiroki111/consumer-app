import { connect } from 'react-redux';

import { setDeliveryTypeFilter } from '../../../logic/restaurants-list/ducks/restaurant-list';
import { RestaurantFilter } from './restaurant-filter';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setDeliveryTypeFilter: deliveryType => dispatch(setDeliveryTypeFilter(deliveryType)),
});

export const RestaurantFilterEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFilter);
