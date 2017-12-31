export default {
  rides: [],
  authentication: {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('access_token'),
  },
};
