import axios from 'axios';
import router from '@/router';

const instance = axios.create({
  baseURL: 'https://app.papershift.com/public_api/v1/'
});

// Instance defaults
instance.defaults.headers['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.params = {};
instance.defaults.params.api_token = '';

// Interceptors
instance.interceptors.request.use(
  config => {
    config.params.api_token = getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      removeToken();
      router.push('/login');
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

// Helpers
function getToken() {
  return localStorage.getItem('token');
}

function removeToken() {
  return localStorage.removeItem('token');
}

function setToken(token) {
  if (token) {
    return localStorage.setItem('token', token);
  }
}

function validateToken() {
  const data = {};
  return instance.get('/ping', { data });
}

// Working Sessions
function getWorkingSessions(options) {
  const params = { ...options };
  const data = {};
  return instance.get('/working_sessions', { params, data });
}

export default {
  getWorkingSessions,
  validateToken,
  getToken,
  setToken,
  removeToken
};
