import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userActions';

class LoginPage extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

LoginPage.propTypes = {

};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);