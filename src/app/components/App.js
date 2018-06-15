import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";

class App extends Component {
  render() {
    const { username } = this.props;
    return <div>you suck {username}</div>;
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired
};

const mapStateToProps = ({ user }) => ({
  username: user.username
});

export default connect(mapStateToProps)(App);
