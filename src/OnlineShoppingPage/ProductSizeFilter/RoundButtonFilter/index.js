import React, { Component } from "react";
import "./styles.css";
import productStore from "../../../Instance";
import { observer } from "mobx-react";
@observer
class RoundButtonFilter extends Component {
  HandleClick = () => {
    console.log(this.props.size);
    productStore.onAddorRemoveFilter(this.props.size);
  };
  onSelectedorNot = () => {
    if (productStore.sizeFilter.indexOf(this.props.size) !== -1) {
      return (
        <div
          className="round clicked"
          value={this.props.size}
          onClick={this.HandleClick}
        >
          {this.props.size}
        </div>
      );
    } else {
      return (
        <div
          className="round"
          value={this.props.size}
          onClick={this.HandleClick}
        >
          {this.props.size}
        </div>
      );
    }
  };
  render() {
    return <div>{this.onSelectedorNot()}</div>;
  }
}
export default RoundButtonFilter;
