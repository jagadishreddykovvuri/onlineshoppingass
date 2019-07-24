import styled, { css } from "styled-components";
export const ProductTitle = styled.div`
  height: 50px;
  margin: 20px;
`;
export const Separation = styled.div`
  width: 40px;
  height: 3px;
  background-color: orange;
  margin-left: 130px;
`;
export const AddToCart = styled.button`
  margin: 15px;
  width: 270px;
  height: 45px;
  font-size: 25px;
  color: white;
  border: none;
  background-color: var(--bg);
  cursor: pointer;
`;
export const Installments = styled.p`
  text-align: center;
  color: darkgray;
`;
export const Price = styled.h4`
  text-align: center;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const FreeShipping = styled.div`
  width: 75px;
  height: 19px;
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 12px;
  background-color: black;
  color: white;
`;
export const EachProduct = styled.div`
  width: 300px;
  margin: 35px;
  --bg: black;
  :hover {
    --bg: orange;
  }
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 484px;
  display: flex;
  justify-content: flex-end;
`;
