import { observable } from "mobx";
import { action } from "mobx";
import onFetchapiCall from "./Authapicall";

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

  onSignupUser = () => {
    if (this.userName !== "" && this.password !== "") {
      this.isFetching = true;
      const userDetails = {
        username: this.userName,
        password: this.password
      };

      this.userName = "";
      this.password = "";

      return onFetchapiCall(
        "https://user-shopping-cart.getsandbox.com/sign_up/v1/",
        userDetails
      ).then(res => {
        this.isFetching = false;
        return res;
      });
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
      return onFetchapiCall(
        "https://user-shopping-cart.getsandbox.com/login/v1/",
        userDetails
      ).then(res => {
        this.isFetching = false;
        return res;
      });
    }
  };
}
export default Authenticationuser;
