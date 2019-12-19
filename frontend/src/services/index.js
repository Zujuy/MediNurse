import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ancient-atoll-83528.herokuapp.com')
  : (baseURL = 'https://ancient-atoll-83528.herokuapp.com');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  }
};

export default MY_SERVICE;
