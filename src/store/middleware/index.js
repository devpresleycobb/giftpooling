import axios from 'axios';
import config from '../../config';

export const HTTPS = 'HTTPS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

async function callHttps(endpoint, settings, contentType = 'application/json') {
  const {ENV} = config;
  try {
    const conf = {
      ...settings,
      url: endpoint,
      'Cache-Control': 'no-cache',
      'Content-Type': contentType,
    };
    if (ENV === 'development') {
      console.log('Request :', conf);
    }
    const response = await axios(conf);
    return Promise.resolve(response);
  } catch (error) {
    const {response} = error;
    console.log('server response: ');
    console.log(response);
    if (!response) {
      console.log(error);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
}

export default () => (next) => (action) => {
  if (action.HTTPS) {
    var type = HTTPS;
    var {types, settings} = action.HTTPS;
  }
  if (typeof settings === 'undefined') {
    return next(action);
  }
  const {endpoint, ...data} = settings;
  const [requestType, successType, errorType] = types;
  next({type: requestType});

  switch (type) {
    case HTTPS:
      callHttps(endpoint, data)
        .then((response) =>
          next({
            response: {
              status: response.status,
              ...(response.data || null),
            },
            type: successType,
          }),
        )
        .catch((error) =>
          error.networkError
            ? next({type: NETWORK_ERROR})
            : next({
                response: {
                  ...error.response,
                },
                type: errorType,
              }),
        );
      break;
  }
};
