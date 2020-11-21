import { combineReducers } from 'redux';
import { restaurantListReducer } from './restaurants-list/ducks/restaurant-list';
import { restaurantListSorting } from './restaurant-sorting/ducks/restaurant-sorting-reducer';
import { restaurantListFiltering } from './restaurant-filtering/ducks/restaurant-filtering-reducer';

export const rootReducer = combineReducers({
  restaurantList: restaurantListReducer,
  restaurantSorting: restaurantListSorting,
  restaurantFilter: restaurantListFiltering,
});
