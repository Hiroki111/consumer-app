import get from 'lodash/get';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const RESTAURANT_LIST_REQUESTED = 'RESTAURANT_LIST_REQUESTED';
export const RESTAURANT_LIST_STARTED = 'RESTAURANT_LIST_STARTED';
export const RESTAURANT_LIST_SUCCEEDED = 'RESTAURANT_LIST_SUCCEEDED';
export const RESTAURANT_LIST_FAILED = 'RESTAURANT_LIST_FAILED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  list: [],
  meta: {},
  aggregates: {},
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

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'restaurantList', initialState);

export const restaurantsListSelector = state => rootSelector(state).list;
export const restaurantsListErrorSelector = state => rootSelector(state).error;
export const restaurantsListIsLoadingSelector = state => rootSelector(state).isLoading;
