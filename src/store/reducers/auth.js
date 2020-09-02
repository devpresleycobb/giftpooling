import {SIGNIN_REQUEST, SIGNIN_REQUEST_SUCCESS} from '../actions/auth';

const initialState = {
  isSignedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case SIGNIN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        loginToken: action.response.token,
      });
    default:
      return state;
  }
};
