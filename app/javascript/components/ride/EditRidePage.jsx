import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as actions from '../../actions/rideActions';
import * as routes from '../../routes';
import Title from '../common/Title';
import RideForm from './RideForm';

class EditRidePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ride: Object.assign({}, props.ride),
    };

    this.updateRideState = this.updateRideState.bind(this);
    this.updateRide = this.updateRide.bind(this);
  }

  updateRideState(event) {
    const field = event.target.name;
    const ride = Object.assign({}, this.state.ride);
    ride[field] = event.target.value;
    return this.setState({ ride });
  }

  updateRide(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.updateRide(this.state.ride).then(() => {
      this.setState({ isUpdated: true, saving: false });
      toastr.success('Ride successfully updated !');
    });
  }

  render() {
    if (this.state.isUpdated) { return <Redirect to={routes.rides} />; }
    return (
      <div>
        <Title content="Edition du frais kilométrique" />
        <RideForm
          ride={this.state.ride}
          onChange={this.updateRideState}
          onSave={this.updateRide}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

EditRidePage.propTypes = {
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
  actions: PropTypes.object.isRequired,
  isUpdated: PropTypes.bool,
  saving: PropTypes.bool,
};

EditRidePage.defaultProps = {
  isUpdated: false,
  saving: false,
};

const mapStateToProps = (state, ownProps) => {
  const rideId = parseInt(ownProps.match.params.id, 10);
  const ride = Object.assign({}, state.rides.find(rd => rd.id === rideId));
  return {
    ride,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRidePage);
