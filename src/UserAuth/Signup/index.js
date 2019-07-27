import React, { Component } from "react";
import { Div, Input, Button, Loaddiv, P } from "../StyledComponent";
import { authenticationuser } from "../../store/Instance";
import { observer } from "mobx-react";
import Loader from "../../OnlineShoppingPage/ProductShowCase/Loader";

@observer
class Signup extends Component {
  state = {
    onerror: ""
  };
  onChangeUsername = event => {
    authenticationuser.onChangeUserName(event.target.value);
  };
  onChangePassword = event => {
    authenticationuser.onChangePassword(event.target.value);
  };
  onSignup = () => {
    authenticationuser.onSignupUser().then(data => {
      data.status
        ? this.setState({
            onerror: true
          })
        : this.setState({
            onerror: false
          });
    });
  };
  onLogin = () => {
    this.props.history.push("/");
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
            <h1>SignUp</h1>
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
            {this.state.onerror === false && <P failure>already user Exit</P>}
            {this.state.onerror === true && (
              <P success>Registration successfull</P>
            )}
            <Button onClick={this.onSignup}>Signup</Button>
            <p>Or</p>
            <Button onClick={this.onLogin}>Login</Button>

            {authenticationuser.isFetching && <Loaddiv />}
          </Div>
        </Div>
      </>
    );
  }
}
export default Signup;
