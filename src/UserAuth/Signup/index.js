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
import { observer } from "mobx-react";
@observer
class Signup extends Component {
  onChangeUsername = event => {
    authenticationuser.onChangeUserName(event.target.value);
  };
  onChangePassword = event => {
    authenticationuser.onChangePassword(event.target.value);
  };
  onSignup = () => {
    authenticationuser.onSignupUser();
  };
  render() {
    return (
      <>
        <Div>
          <Div shadow>
            <h1>SignUp</h1>
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
            <Link to={"/signup"}>
              <Button onClick={this.onSignup}>Signup</Button>
            </Link>
            <p>Or</p>
            <Link to={"/"}>
              <Button>Login</Button>
            </Link>
          </Div>
        </Div>
      </>
    );
  }
}
export default Signup;
