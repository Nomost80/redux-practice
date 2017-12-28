import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

const rideListItem = ({ ride, onDelete }) => (
  <div className="ui item">
    <div className="right floated">
      <Link to={routes.rides + routes.editRide.replace(/:id/, ride.id)} className="ui button positive">Editer</Link>
      <button id={ride.id} className="ui button negative" onClick={onDelete}>Supprimer</button>
    </div>
    <div className="content">
      <p>{ride.date} {ride.reason} {ride.from} {ride.to} {ride.distance} {(ride.return_trip) ? 'aller-retour' : 'retour'}</p>
    </div>
  </div>
);

rideListItem.propTypes = {
  ride: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    return_trip: PropTypes.bool.isRequired,
    distance: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default rideListItem;
