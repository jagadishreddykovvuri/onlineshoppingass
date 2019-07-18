import React, { Component } from "react";
import RoundButtonFilter from "./RoundButtonFilter";
import "./styles.css";
class ProductSizeFilter extends Component {
  render() {
    var sizeArr = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
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
