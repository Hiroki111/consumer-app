import get from 'lodash/get';
import RestaurantListFiltering from '../models/restaurant-filtering-model';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_DELIVERY_TYPE_CHANGED = 'RESTAURANT_LIST_DELIVERY_TYPE_CHANGED';
export const RESTAURANT_LIST_CUISINE_CHANGED = 'RESTAURANT_LIST_CUISINE_CHANGED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialSelectedCuisine = cuisineNames =>
  cuisineNames.reduce((state, cusineName) => ({ ...state, [cusineName]: true }), {});

const initialState = {
  deliveryType: RestaurantListFiltering.DELIVERY_TYPES.DELIVERY, // current default value
  selectedCuisine: initialSelectedCuisine(RestaurantListFiltering.getCuisineTypesArray()),
};

export function restaurantListFiltering(state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_LIST_DELIVERY_TYPE_CHANGED:
      return {
        ...state,
        deliveryType: action.payload.deliveryType,
      };
    case RESTAURANT_LIST_CUISINE_CHANGED:
      const selectedCuisine = state.selectedCuisine[action.payload.cuisineName];
      return {
        ...state,
        selectedCuisine: {
          ...state.selectedCuisine,
          [action.payload.cuisineName]: !selectedCuisine,
        },
      };
    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Event creators
// -------------------------------------------------------------------------------------------------

export const filterRestaurantListByDeliveryType = deliveryType => {
  return {
    type: RESTAURANT_LIST_DELIVERY_TYPE_CHANGED,
    payload: { deliveryType },
  };
};

export const filterRestaurantListByCuisine = cuisineName => {
  return {
    type: RESTAURANT_LIST_CUISINE_CHANGED,
    payload: { cuisineName },
  };
};

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantFilter', initialState);
export const selectedDeliveryTypeSelector = state => rootSelector(state).deliveryType;
export const selectedCuisineSelector = state => rootSelector(state).selectedCuisine;
