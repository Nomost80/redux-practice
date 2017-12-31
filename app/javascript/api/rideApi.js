import ApiRequest from '../middleware/api';

class RideApi {
  static getAllRides(user) {
    return ApiRequest(`http://localhost:3000/api/rides/${user.id}`, {}, true);
  }

  static createRide(ride) {
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    };
    return ApiRequest('http://localhost:3000/api/rides/', config, true);
  }

  static updateRide(ride) {
    const config = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    };
    return ApiRequest(`http://localhost:3000/api/rides/${ride.id}`, config, true);
  }

  static deleteRide(id) {
    const config = {
      method: 'DELETE',
    };
    return ApiRequest(`http://localhost:3000/api/rides/${id}`, config, true);
  }
}

export default RideApi;
