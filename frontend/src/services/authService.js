import axios from 'axios';

const baseURL = 'http://localhost:3000';

const service = axios.create({
  baseURL,
  withCredentials: true
});

const AUTH_SERVICE = {
  signup: data => {
    return service.post('/api/auth/signup', data);
  },
  login: data => {
    return service.post('/api/auth/login', data);
  },
  getUser: () => {
    return service.get('/api/auth/profile');
  },
  logout: () => {
    return service.get('/api/auth/logout');
  }
};

export default AUTH_SERVICE;
