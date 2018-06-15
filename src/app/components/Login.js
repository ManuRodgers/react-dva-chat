import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Redirect } from "dva/router";
class Login extends Component {
  render() {
    const { isAuth, dispatch } = this.props;
    return (
      <div>
        {isAuth ? (
          <Redirect to="/dashboard" />
        ) : (
          <button
            onClick={() => {
              return dispatch({ type: "user/login" });
            }}
          >
            login
          </button>
        )}
        <p>you need to login </p>
      </div>
    );
  }
}

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth
});

export default connect(mapStateToProps)(Login);
