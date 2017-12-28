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

class NewRidePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ride: Object.assign({}, props.ride),
    };

    this.updateRideState = this.updateRideState.bind(this);
    this.createRide = this.createRide.bind(this);
  }

  updateRideState(event) {
    const field = event.target.name;
    const ride = Object.assign({}, this.state.ride);
    ride[field] = event.target.value;
    return this.setState({ ride });
  }

  createRide(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.createRide(this.state.ride)
      .then(() => {
        this.setState({ isCreated: true, saving: false });
        toastr.success('Ride successfully created !');
      })
      .catch((error) => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  render() {
    if (this.state.isCreated) { return <Redirect to={routes.rides} />; }
    return (
      <div>
        <Title content="Nouveau frais kilométrique" />
        <RideForm
          ride={this.state.ride}
          onChange={this.updateRideState}
          onSave={this.createRide}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

NewRidePage.propTypes = {
  ride: PropTypes.shape({
    date: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    return_trip: PropTypes.bool.isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
  isCreated: PropTypes.bool,
  saving: PropTypes.bool,
};

NewRidePage.defaultProps = {
  isCreated: false,
  saving: false,
};

const mapStateToProps = () => {
  const ride = {
    date: '', reason: '', from: '', to: '', return_trip: false, distance: 0,
  };
  return {
    ride,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRidePage);
