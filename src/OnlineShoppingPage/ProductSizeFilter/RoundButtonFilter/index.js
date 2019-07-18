import React, { Component } from "react";
import "./styles.css";
class RoundButtonFilter extends Component {
  HandleClick = () => {
    console.log(this.props.size);
  };
  render() {
    return (
      <div>
        <div
          className="round"
          value={this.props.size}
          onClick={this.HandleClick}
        >
          {this.props.size}
        </div>
      </div>
    );
  }
}
export default RoundButtonFilter;
