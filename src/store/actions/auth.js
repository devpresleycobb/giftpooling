export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

import {HTTPS} from '../middleware';

export const signin = () => ({
  [HTTPS]: {
    types: [SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE],
    settings: {
      method: 'POST',
      endpoint: 'https://jsonplaceholder.typicode.com/posts',
    },
  },
});
