import get from 'lodash/get';
import RestaurantListFiltering from '../models/restaurant-filtering-model';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_DELIVERY_TYPE_CHANGED = 'RESTAURANT_LIST_DELIVERY_TYPE_CHANGED';
export const RESTAURANT_LIST_CUISINE_CHANGED = 'RESTAURANT_LIST_CUISINE_CHANGED';
export const RESTAURANT_LIST_DELIVERY_TYPE_AND_CUISINE_CHANGED =
  'RESTAURANT_LIST_DELIVERY_TYPE_AND_CUISINE_CHANGED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

export const initialSelectedCuisine = cuisineNames =>
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
      return {
        ...state,
        selectedCuisine: action.payload.cuisineObj,
      };
    case RESTAURANT_LIST_DELIVERY_TYPE_AND_CUISINE_CHANGED:
      return {
        ...state,
        deliveryType: action.payload.deliveryType,
        selectedCuisine: action.payload.cuisineObj,
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

export const filterRestaurantListByCuisine = cuisineObj => {
  return {
    type: RESTAURANT_LIST_CUISINE_CHANGED,
    payload: { cuisineObj },
  };
};

export const filterRestaurantListByDeliveryTypeAndCuisine = (deliveryType, cuisineObj) => {
  return {
    type: RESTAURANT_LIST_DELIVERY_TYPE_AND_CUISINE_CHANGED,
    payload: { deliveryType, cuisineObj },
  };
};
// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantFilter', initialState);
export const selectedDeliveryTypeSelector = state => rootSelector(state).deliveryType;
export const selectedCuisineSelector = state => rootSelector(state).selectedCuisine;
