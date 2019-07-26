import { observable } from "mobx";
import { action } from "mobx";

class Authenticationuser {
  @observable userName = "";
  @observable password = "";
  apiStatus;
  @action.bound onChangeUserName(value) {
    this.userName = value;
  }
  @action.bound onChangePassword(value) {
    this.password = value;
  }

  onSignupUser = () => {
    if (this.userName !== "" && this.password !== "") {
      const userDetails = {
        username: this.userName,
        password: this.password
      };

      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json"
        }
      };

      fetch("https://user-shopping-cart.getsandbox.com/sign_up/v1/", options)
        .then(res => res.json())
        .then(res => {
          res.status
            ? alert("registration successfull")
            : alert("user already exits");
        });
      this.userName = "";
      this.password = "";
    }
  };
  onLoginUser = () => {
    console.log(this.userName, this.password);
    if (this.userName !== "" && this.password !== "") {
      const userDetails = {
        username: this.userName,
        password: this.password
      };
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json"
        }
      };
      this.userName = "";
      this.password = "";
      return fetch(
        "https://user-shopping-cart.getsandbox.com/login/v1/",
        options
      )
        .then(res => res.json())
        .then(res => {
          return res;
        });
    }
  };
}
export default Authenticationuser;
