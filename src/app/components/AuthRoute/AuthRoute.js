import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

class AuthRoute extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(dispatch);

    dispatch({ type: "user/getInitDataAsync" });
  }

  render() {
    return <div>AuthRoute</div>;
  }
}

AuthRoute.propTypes = {
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = ({ user }) => ({});

export default connect(mapStateToProps)(AuthRoute);
