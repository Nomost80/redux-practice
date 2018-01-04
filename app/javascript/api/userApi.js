import ApiRequest from '../middleware/api';

class UserApi {
  static signUp(user) {
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ user }),
    };
    return ApiRequest('/users', config);
  }

  static login(user) {
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ auth: user }),
    };
    return ApiRequest('/user_token', config);
  }
}

export default UserApi;
