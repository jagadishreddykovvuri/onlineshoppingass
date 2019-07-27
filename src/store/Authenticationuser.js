import { observable } from "mobx";
import { action } from "mobx";

class Authenticationuser {
  @observable userName = "";
  @observable password = "";
  @observable isFetching = false;
  @action.bound onChangeUserName(value) {
    this.userName = value;
  }
  @action.bound onChangePassword(value) {
    this.password = value;
  }
  onFetchapiCall = (server, details) => {
    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch(server, options)
      .then(res => res.json())
      .then(res => {
        this.isFetching = false;
        return res;
      });
  };

  onSignupUser = () => {
    if (this.userName !== "" && this.password !== "") {
      this.isFetching = true;
      const userDetails = {
        username: this.userName,
        password: this.password
      };

      this.userName = "";
      this.password = "";

      return this.onFetchapiCall(
        "https://user-shopping-cart.getsandbox.com/sign_up/v1/",
        userDetails
      );
    }
  };
  onLoginUser = () => {
    if (this.userName !== "" && this.password !== "") {
      this.isFetching = true;
      const userDetails = {
        username: this.userName,
        password: this.password
      };
      this.userName = "";
      this.password = "";
      return this.onFetchapiCall(
        "https://user-shopping-cart.getsandbox.com/login/v1/",
        userDetails
      );
    }
  };
}
export default Authenticationuser;
