import get from 'lodash/get';
import RestaurantListSorting from '../models/restaurant-sorting-model';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_SORTING_CHANGED = 'RESTAURANT_LIST_SORTING_CHANGED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  sortingType: RestaurantListSorting.TYPES.NO_SORTING,
};

export function restaurantListSorting(state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_LIST_SORTING_CHANGED:
      return {
        sortingType: action.payload.sortingType,
      };
    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Event creators
// -------------------------------------------------------------------------------------------------

export const sortRestaurantList = sortingType => {
  return {
    type: RESTAURANT_LIST_SORTING_CHANGED,
    payload: { sortingType },
  };
};

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantSorting', initialState);

export const restaurantSortingTypeSelector = state => rootSelector(state).sortingType;
