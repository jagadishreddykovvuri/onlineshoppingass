import React from "react";
import OnlineShoppingPage from "./OnlineShoppingPage";
import Login from "./UserAuth/Login";
import Signup from "./UserAuth/Signup";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import * as Cookies from "js-cookie";
function App() {
  return (
    <>
      <Router>
        <AuthRoute exact path={"/"} component={Login} />
        <ProtectedRoute path="/home" component={OnlineShoppingPage} />
        <AuthRoute path="/signup" component={Signup} />
      </Router>
    </>
  );
}
function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("myuser") ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("myuser") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
const Homepage = () => {
  return <OnlineShoppingPage />;
};

export default App;
