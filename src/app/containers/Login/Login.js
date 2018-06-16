import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo/Logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";

class Login extends Component {
  render() {
    const { location, history, match } = this.props;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>username</InputItem>
            <InputItem>password</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">Login</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={() => {
              return history.push("/auth/register");
            }}
          >
            Register
          </Button>
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Login;
