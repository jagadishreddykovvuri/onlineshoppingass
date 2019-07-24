import styled, { css } from "styled-components";
export const CartHeader = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  color: white;
  font-size: 30px;
`;
export const HeaderLabel = styled.div`
  display: flex;
  align-items: center;
`;
export const CartImage = styled.img`
  width: 80px;
  height: 80px;
`;
export const ProductCount = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  bottom: 30px;
  left: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orangered;
  padding: 4px;
  font-size: 13px;
`;
export const AddProducts = styled.p`
  font-size: 30px;
  text-align: center;
`;
