import styled, { css } from "styled-components";
export const ProductShow = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: auto auto auto auto;
`;
export const OrderByFIlter = styled.select`
  width: 130px;
  height: 30px;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
`;
export const OrderBy = styled.div`
display: flex;
  align-items: center;
  margin: 20px;
}`;
export const ProductCount = styled.div`
  width: 1480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Loading = styled.div`
  width: 1000px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
