import ApiRequest from '../middleware/api';

class RideApi {
  static getUserRides(userId) {
    return ApiRequest(`/rides/${userId}`, {}, true);
  }

  static createRide(ride) {
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    };
    return ApiRequest('/rides', config, true);
  }

  static updateRide(ride) {
    const config = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    };
    return ApiRequest(`/rides/${ride.id}`, config, true);
  }

  static deleteRide(id) {
    const config = {
      method: 'DELETE',
    };
    return ApiRequest(`/rides/${id}`, config, true);
  }
}

export default RideApi;
