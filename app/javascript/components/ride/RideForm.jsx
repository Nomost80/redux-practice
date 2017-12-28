import React from 'react';
import PropTypes from 'prop-types';
import DateField from '../common/form/DateField';
import TextField from '../common/form/TextField';
import CheckboxField from '../common/form/CheckboxField';
import SubmitField from '../common/form/SubmitField';

const rideForm = ({
  ride, onChange, onSave, saving,
}) => (
  <form className="ui form" onSubmit={onSave}>
    <div className="two fields">
      <DateField
        name="date"
        label="Date"
        placeholder="Date du frais"
        onChange={onChange}
        value={ride.date}
      />
      <TextField
        name="reason"
        label="Motif"
        placeholder="Client, prospect, partenaire..."
        onChange={onChange}
        value={ride.reason}
      />
    </div>
    <TextField
      name="from"
      label="Départ"
      placeholder="Départ"
      onChange={onChange}
      value={ride.from}
    />
    <TextField
      name="to"
      label="Destination"
      placeholder="Destination"
      onChange={onChange}
      value={ride.to}
    />
    <TextField
      name="distance"
      label="Distance"
      placeholder="Distance"
      onChange={onChange}
      value={ride.distance}
    />
    <CheckboxField
      name="return_trip"
      label="Aller + retour"
      onChange={onChange}
      value={ride.return_trip}
    />
    <SubmitField label={saving ? 'saving' : 'save'} disabled={saving} />
  </form>
);

rideForm.propTypes = {
  ride: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    return_trip: PropTypes.bool.isRequired,
    distance: PropTypes.number.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default rideForm;
