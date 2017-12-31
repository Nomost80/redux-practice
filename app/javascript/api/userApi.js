import ApiRequest from '../middleware/api';

class UserApi {
  static signUp(user) {
    let config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ user })
    };
    return ApiRequest('http://localhost:3000/api/users/create', config);
  }

  static login(user) {
    let config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ "auth": user })
    };
    return ApiRequest('http://localhost:3000/api/user_token', config);
  }
}

export default UserApi;
