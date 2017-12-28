class RideApi {
  static getAllRides() {
    return fetch('http://localhost:3000/api/rides').then(response => response.json()).catch(error => error);
  }

  static createRide(ride) {
    const request = new Request('http://localhost:3000/api/rides/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static updateRide(ride) {
    const request = new Request(`http://localhost:3000/api/rides/${ride.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ride }),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }

  static deleteRide(id) {
    const request = new Request(`http://localhost:3000/api/rides/${id}`, {
      method: 'DELETE',
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default RideApi;
