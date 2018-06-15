import React, { Component } from "react";
import PropTypes from "prop-types";
import { routerRedux, Route, Switch, Link, Redirect } from "dva/router";
import { connect } from "dva";
import Manu from "./Manu";
import Tim from "./Tim";

class Dashboard extends Component {
  render() {
    const { isAuth, dispatch } = this.props;
    return (
      <div>
        {isAuth ? (
          <button
            onClick={() => {
              return dispatch({ type: "user/logout" });
            }}
          >
            logout
          </button>
        ) : (
          <Redirect to="/login" />
        )}
        Dashboard
        <Switch>
          <Route path="/dashboard/manu/" component={Manu} />
          <Route path="/dashboard/tim/" component={Tim} />
        </Switch>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth
});

export default connect(mapStateToProps)(Dashboard);
