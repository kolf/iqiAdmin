import service from '../utils/request';
import '../mock/user';

export default {
  login: data => service.post('/user/login', data),
  logout: () => service.get('/user/logout')
};
