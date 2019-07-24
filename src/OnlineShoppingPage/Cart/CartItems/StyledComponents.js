import styled, { css } from "styled-components";
export const CartProducts = styled.div`
  width: 100%;
  height: 550px;
  overflow-y: scroll;
`;
export const CartFooter = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 2px 2px 2px 2px;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: lightslategray;
  align-items: center;
`;
export const SubTotalHead = styled.p`
  margin: 40px;
  font-size: 20px;
`;
export const TotalPrice = styled.p`
  font-size: 28px;
  color: yellow;
`;
export const TotalInstallment = styled.p`
  margin: 30px;
  font-size: 10px;
`;
export const CheckOutButton = styled.button`
  width: 500px;
  font-size: 35px;
  color: white;
  background-color: black;
  border: none;
  padding: 6px;
  cursor: pointer;
`;
