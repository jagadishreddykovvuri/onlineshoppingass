import React, { Component } from "react";
import { Div, Input, Button, Loaddiv, P } from "../StyledComponent";
import { Link } from "react-router-dom";
import { authenticationuser } from "../../store/Instance";
import OnlineShoppingPage from "../../OnlineShoppingPage";
import { observer } from "mobx-react";
import { fakeAuth } from "../../App";
import * as Cookies from "js-cookie";
import Loader from "../../OnlineShoppingPage/ProductShowCase/Loader";

@observer
class Login extends Component {
  state = {
    onerror: ""
  };
  onChangeUsername = event => {
    authenticationuser.onChangeUserName(event.target.value);
  };
  onChangePassword = event => {
    authenticationuser.onChangePassword(event.target.value);
  };

  onLogin = () => {
    this.setState({
      isFetching: true
    });
    if (
      authenticationuser.password !== "" &&
      authenticationuser.userName !== ""
    ) {
      authenticationuser.onLoginUser().then(data => {
        if (data.status) {
          Cookies.set("myuser", data.accessToken);
          this.props.history.push("/home");
        }
        data.error
          ? this.setState({
              onerror: true
            })
          : this.setState({
              onerror: false
            });
      });
    }
  };
  onSignup = () => {
    this.props.history.push("/signup");
  };
  onFocususername = () => {
    this.setState({
      onerror: ""
    });
  };

  render() {
    return (
      <>
        <Div>
          <Div shadow>
            <h1>Login</h1>
            <Input
              value={authenticationuser.userName}
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
              onFocus={this.onFocususername}
            />
            <Input
              value={authenticationuser.password}
              type="password"
              name=""
              id="pass"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            {this.state.onerror && <P failure>Invalid credentials</P>}

            <Button onClick={this.onLogin}>Login</Button>
            <p>Or</p>
            <Button onClick={this.onSignup}>Signup</Button>

            {authenticationuser.isFetching && <Loaddiv />}
          </Div>
        </Div>
      </>
    );
  }
}
export default Login;
