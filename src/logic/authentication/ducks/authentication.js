import get from 'lodash/get';

// -------------------------------------------------------------------------------------------------
// Event types
// -------------------------------------------------------------------------------------------------

export const AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
export const AUTHENTICATION_SUCCEEDED = 'AUTHENTICATION_SUCCEEDED';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';

// -------------------------------------------------------------------------------------------------
// Reducer
// -------------------------------------------------------------------------------------------------

const initialState = {
  isLoading: false,
  username: null,
  token: null,
};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_STARTED:
      return { ...state, isLoading: true };
    case AUTHENTICATION_SUCCEEDED:
      return { ...state, token: action.payload.token };
    case AUTHENTICATION_FAILED:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}

// -------------------------------------------------------------------------------------------------
// Event creators
// -------------------------------------------------------------------------------------------------

export const authenticationStarted = ({ username, password }) => {
  return {
    type: AUTHENTICATION_STARTED,
    payload: {
      username,
      password,
    },
  };
};

export const authenticationSucceeded = ({ token }) => {
  return {
    type: AUTHENTICATION_SUCCEEDED,
    payload: {
      token,
    },
  };
};

export const authenticationFailed = ({ error }) => {
  return {
    type: AUTHENTICATION_FAILED,
    payload: {
      error,
    },
  };
};

// -------------------------------------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------------------------------------

const rootSelector = state => get(state, 'authentication', initialState);

export const usernameSelector = state => rootSelector(state).username;
export const tokenSelector = state => rootSelector(state).token;
