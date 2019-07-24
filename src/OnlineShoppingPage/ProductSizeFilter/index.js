import React, { Component } from "react";
import RoundButtonFilter from "./RoundButtonFilter";
import { sizeArr } from "../../constant";
import { SizeFilters, Filterdiv } from "./StyledComponents";
class ProductSizeFilter extends Component {
  render() {
    return (
      <Filterdiv>
        <h1>Sizes:</h1>
        <SizeFilters>
          {sizeArr.map(size => {
            return <RoundButtonFilter size={size} />;
          })}
        </SizeFilters>
      </Filterdiv>
    );
  }
}
export default ProductSizeFilter;
