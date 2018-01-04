import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as actions from '../../actions/rideActions';
import * as routes from '../../routes';
import RideList from './RideList';
import Title from '../common/Title';

class RidesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deleteRide = this.deleteRide.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadRides(1);
  }

  deleteRide(event) {
    const { id } = event.target;
    this.props.actions.deleteRide(id).then(() => {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
      toastr.success('Ride successfully deleted !');
    });
  }

  render() {
    return (
      <div>
        <Title content="Précèdents frais kilométriques" />
        <Link to={routes.rides + routes.createRide} className="ui button primary">Ajouter un frais kilométrique</Link>
        <RideList rides={this.props.rides} onDelete={this.deleteRide} />
      </div>
    );
  }
}

RidesPage.propTypes = {
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
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  if (state.rides.length > 0) {
    return {
      rides: state.rides,
    };
  }
  return {
    rides: [{
      id: 0, date: '', reason: '', from: '', to: '', return_trip: false, distance: 0, created_at: '', updated_at: '',
    }],
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RidesPage);
