import React from 'react';
import PropTypes from 'prop-types';
import RideListItem from './RideListItem';

const rideList = ({ rides, onDelete }) => (
  <div className="ui middle aligned divided list">
    {rides.map(ride => <RideListItem key={ride.id} ride={ride} onDelete={onDelete} />)}
  </div>
);

rideList.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    return_trip: PropTypes.bool.isRequired,
    distance: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default rideList;
