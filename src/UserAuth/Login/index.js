import React, { Component } from "react";
import { Div, Input, Button } from "../StyledComponent";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { authenticationuser } from "../../store/Instance";
import OnlineShoppingPage from "../../OnlineShoppingPage";
import { observer } from "mobx-react";
import { fakeAuth } from "../../App";
import * as Cookies from "js-cookie";

@observer
class Login extends Component {
  onChangeUsername = event => {
    authenticationuser.onChangeUserName(event.target.value);
  };
  onChangePassword = event => {
    authenticationuser.onChangePassword(event.target.value);
  };
  onLogin = () => {
    if (
      authenticationuser.password !== "" &&
      authenticationuser.userName !== ""
    ) {
      authenticationuser.onLoginUser().then(data => {
        if (data.status) {
          Cookies.set("myuser", data.accessToken);
          this.props.history.push("/home");
        }
        data.error ? alert("invalid") : console.log();
      });
    }
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
            />
            <Input
              value={authenticationuser.password}
              type="password"
              name=""
              id="pass"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <Link to={"/"}>
              <Button onClick={this.onLogin}>Login</Button>
            </Link>
            <p>Or</p>
            <Link to={"/signup"}>
              <Button>Signup</Button>
            </Link>
          </Div>
        </Div>
      </>
    );
  }
}
export default Login;
