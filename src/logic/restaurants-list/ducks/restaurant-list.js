import get from 'lodash/get';
import intersection from 'lodash/intersection';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_REQUESTED = 'RESTAURANT_LIST_REQUESTED';
export const RESTAURANT_LIST_STARTED = 'RESTAURANT_LIST_STARTED';
export const RESTAURANT_LIST_SUCCEEDED = 'RESTAURANT_LIST_SUCCEEDED';
export const RESTAURANT_LIST_FAILED = 'RESTAURANT_LIST_FAILED';
export const SET_DELIVERY_TYPE_FILTER = 'SET_DELIVERY_TYPE_FILTER';
export const SET_CUISINE_FILTER = 'SET_CUISINE_FILTER';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  list: [],
  meta: {},
  aggregates: {},
  filter: {
    deliveryType: null,
    selectedCuisine: {
      japanese: true,
      pizza: true,
      italian: true,
      sushi: true,
      burger: true,
      french: true,
    },
  },
  error: null,
  isLoading: true,
};

export function restaurantListReducer(state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_LIST_REQUESTED:
      return {
        ...state,
      };
    case RESTAURANT_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case RESTAURANT_LIST_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        list: action.payload.restaurantsList,
        meta: action.payload.meta,
        aggregates: action.payload.aggregates,
      };
    case RESTAURANT_LIST_FAILED:
      return {
        ...state,
        list: [],
        isLoading: false,
        error: action.error,
      };
    case SET_DELIVERY_TYPE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          deliveryType: action.payload.deliveryType,
        },
      };
    case SET_CUISINE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          selectedCuisine: action.payload.selectedCuisine,
        },
      };
    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Event creators
// -------------------------------------------------------------------------------------------------

export const fetchRestaurantList = () => {
  return {
    type: RESTAURANT_LIST_REQUESTED,
  };
};

export const fetchRestaurantListStarted = () => {
  return {
    type: RESTAURANT_LIST_STARTED,
  };
};

export const fetchRestaurantListSucceeded = ({ restaurantsList, meta, aggregates }) => {
  return {
    type: RESTAURANT_LIST_SUCCEEDED,
    payload: { restaurantsList, meta, aggregates },
  };
};

export const fetchRestaurantListFailed = error => {
  return {
    type: RESTAURANT_LIST_FAILED,
    payload: { error },
  };
};

export const setDeliveryTypeFilter = deliveryType => {
  return {
    type: SET_DELIVERY_TYPE_FILTER,
    payload: { deliveryType },
  };
};

export const setCuisineFilter = selectedCuisine => {
  return {
    type: SET_CUISINE_FILTER,
    payload: { selectedCuisine },
  };
};

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantList', initialState);

export const restaurantsListSelector = state => rootSelector(state).list;
export const restaurantsListErrorSelector = state => rootSelector(state).error;
export const restaurantsListIsLoadingSelector = state => rootSelector(state).isLoading;
export const restaurantsListFilterSelector = state => rootSelector(state).filter;

export const filteredRestaurantsListSelector = state => {
  return rootSelector(state)
    .list.filter(restaurant => {
      const { deliveryType } = restaurantsListFilterSelector(state);
      return !deliveryType || restaurant.shipping.type.includes(deliveryType);
    })
    .filter(restaurant => {
      const { selectedCuisine } = restaurantsListFilterSelector(state);
      return restaurant.cuisines.some(cuisine => selectedCuisine[cuisine]);
    });
};

export const selectedCuisineSelector = state =>
  restaurantsListFilterSelector(state).selectedCuisine;

// EMPTY_META_DATA could be put into initialState, but I'm not 100% sure because
// the REST API may return a different shape of object in the real situation
const EMPTY_META_DATA = {
  currency: { type: null, denominator: null },
  time: { type: null, denominator: null },
};
export const restaurantsCurrencySelector = state =>
  get(rootSelector(state), 'meta.currency', EMPTY_META_DATA.currency);
export const restaurantsTimeSelector = state =>
  get(rootSelector(state), 'meta.time', EMPTY_META_DATA.time);

// -------------------------------------------------------------------------------------------------
// Values for the restaurant filter
// -------------------------------------------------------------------------------------------------
export const DELIVERY_TYPE_DELIVERY = 'delivery';
export const DELIVERY_TYPE_PICKUP = 'pickup';
