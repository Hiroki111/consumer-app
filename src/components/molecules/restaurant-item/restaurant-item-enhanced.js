import { connect } from 'react-redux';
import flow from 'lodash/flow';

import { translate } from '../../../mechanisms/l10n/hoc/translate';

import {
  restaurantsCurrencySelector,
  restaurantsTimeSelector,
} from '../../../logic/restaurants-list/ducks/restaurant-list';

import { RestaurantItem } from './restaurant-item';

const mapStateToProps = state => ({
  currency: restaurantsCurrencySelector(state),
  time: restaurantsTimeSelector(state),
});
const mapDispatchToProps = {};

export const RestaurantItemEnhanced = flow(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('components.restaurant-item'),
)(RestaurantItem);
