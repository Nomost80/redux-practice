// TODO Duplication de code dans mes deux containers de RideForm
// TODO Optimisation avec reselect
// TODO Voir l'utilisation de redux-gala
/* Si node-sass fout le bordel : yarn add node-sass -force */

import 'semantic-ui/dist/semantic.css';
import 'semantic-ui/dist/semantic';
import 'toastr/build/toastr.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../components/App';
// import { loadRides } from '../actions/rideActions';

/* Lors de la création du store le root reducer est appelé pour initialiser le store */
const store = configureStore();
/* On ajoute dans le store les rides */
// store.dispatch(loadRides());

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.querySelector('#app'),
);
