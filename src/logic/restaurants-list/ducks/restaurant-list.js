import get from 'lodash/get';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_REQUESTED = 'RESTAURANT_LIST_REQUESTED';
export const RESTAURANT_LIST_STARTED = 'RESTAURANT_LIST_STARTED';
export const RESTAURANT_LIST_SUCCEEDED = 'RESTAURANT_LIST_SUCCEEDED';
export const RESTAURANT_LIST_FAILED = 'RESTAURANT_LIST_FAILED';
export const SET_DELIVERY_TYPE_FILTER = 'SET_DELIVERY_TYPE_FILTER';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  list: [],
  meta: {},
  aggregates: {},
  filter: {
    deliveryType: null,
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
        filter: { deliveryType: action.payload.deliveryType },
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

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantList', initialState);

export const restaurantsListSelector = state => rootSelector(state).list;
export const restaurantsListErrorSelector = state => rootSelector(state).error;
export const restaurantsListIsLoadingSelector = state => rootSelector(state).isLoading;
export const restaurantsListFilterSelector = state => rootSelector(state).filter;

export const filteredRestaurantsListSelector = state => {
  return rootSelector(state).list.filter(restaurant => {
    const { deliveryType } = restaurantsListFilterSelector(state);
    if (!deliveryType) return true;

    return restaurant.shipping.type.includes(deliveryType);
  });
};

// -------------------------------------------------------------------------------------------------
// Values for the restaurant filter
// -------------------------------------------------------------------------------------------------
export const DELIVERY_TYPE_DELIVERY = 'delivery';
export const DELIVERY_TYPE_PICKUP = 'pickup';
