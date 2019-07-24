import React, { Component } from "react";
import productStore from "../../../store/Instance";
import { observer } from "mobx-react";
import { RoundSize } from "./StyledComponents";
@observer
class RoundButtonFilter extends Component {
  HandleClick = () => {
    productStore.onAddorRemoveFilter(this.props.size);
  };
  onSelectedorNot = () => {
    if (productStore.sizeFilter.indexOf(this.props.size) !== -1) {
      return (
        <RoundSize value={this.props.size} onClick={this.HandleClick} clicked>
          {this.props.size}
        </RoundSize>
      );
    } else {
      return (
        <RoundSize value={this.props.size} onClick={this.HandleClick}>
          {this.props.size}
        </RoundSize>
      );
    }
  };
  render() {
    return <div>{this.onSelectedorNot()}</div>;
  }
}
export default RoundButtonFilter;
