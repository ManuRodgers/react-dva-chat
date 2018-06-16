import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo/Logo";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import { connect } from "dva";

class Register extends Component {
  render() {
    const { kind, dispatch } = this.props;
    console.log(kind);
    console.log(dispatch);

    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>username</InputItem>
            <WhiteSpace />
            <InputItem>pwd</InputItem>
            <WhiteSpace />
            <InputItem>pwdAgain</InputItem>
            <WhiteSpace />
            <RadioItem
              onChange={() => {
                return dispatch({
                  type: "user/changeKeyValuePair",
                  keyValue: "kind",
                  value: "boss"
                });
              }}
              checked={kind == "boss"}
            >
              Boss
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              onChange={() => {
                return dispatch({
                  type: "user/changeKeyValuePair",
                  keyValue: "kind",
                  value: "genius"
                });
              }}
              checked={kind == "genius"}
            >
              Genius
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary">Register</Button>
        </WingBlank>
      </div>
    );
  }
}

Register.propTypes = {
  kind: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
  kind: user.kind
});

export default connect(mapStateToProps)(Register);
