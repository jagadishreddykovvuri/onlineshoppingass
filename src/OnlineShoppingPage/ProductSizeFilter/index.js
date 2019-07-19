import React, { Component } from "react";
import RoundButtonFilter from "./RoundButtonFilter";
import { sizeArr } from "../../constant";
import "./styles.css";
class ProductSizeFilter extends Component {
  render() {
    return (
      <div className="filterSide">
        <h1>Sizes:</h1>
        <div className="sizeFilter">
          {sizeArr.map(size => {
            return <RoundButtonFilter size={size} />;
          })}
        </div>
      </div>
    );
  }
}
export default ProductSizeFilter;
