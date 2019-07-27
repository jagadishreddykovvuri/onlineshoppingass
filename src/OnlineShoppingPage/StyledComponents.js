import styled, { css } from "styled-components";
export const CartClicker = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  cursor: pointer;
  border-top-left-radius: 40px 40px;
  border-bottom-left-radius: 40px 40px;
`;
export const CartImage = styled.img`
  width: 40px;
  height: 40px;
`;
export const CartProductCount = styled.div`
  width: 13px;
  height: 13px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  right: 10px;
  top: 16px;
  background-color: orangered;
  ${props =>
    props.disabler &&
    css`
      display: none;
    `}
`;
export const CartPage = styled.div`
  width: 0px;
  height: 100%;
  background-color: black;
  overflow: hidden;
  -webkit-transition: width 1s; /* For Safari 3.1 to 6.0 */
  transition: width 0.5s;
  ${props =>
    props.opener &&
    css`
      width: 600px;
    `}
`;
export const CartDiv = styled.div`
  height: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  color: white;
`;
export const ShoppingPanel = styled.div`
  display: flex;
  margin-top: 60px;
  position: absolute;
`;
export const Button = styled.button`
  width: 60px;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  position: absolute;
  right: 80px;
`;
