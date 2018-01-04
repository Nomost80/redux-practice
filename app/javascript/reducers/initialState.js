export default {
  signUp: {
    status: '',
    errors: [],
  },
  authentication: {
    status: '',
    isAuthenticated: !!localStorage.getItem('access_token'),
    errors: [],
  },
  rides: [],
};
