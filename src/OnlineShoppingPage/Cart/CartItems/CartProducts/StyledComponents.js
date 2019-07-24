import styled, { css } from "styled-components";
export const EachCartItem = styled.div`
  display: flex;
  height: 148px;
  align-items: center;
  ${props =>
    props.striker &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `}
`;
export const ProductPhoto = styled.div`
  width: 100px;
  height: 130px;
  margin: 6px;
`;
export const ProductDetails = styled.div`
  margin: 10px;
  width: 400px;
`;
export const TitleColor = styled.div`
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export const DetailStyle = styled.div`
  color: lightslategray;
`;
export const DeleteAndPrice = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: yellow;
`;
export const DeleteIcon = styled.div`
  width: 13px;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
export const Price = styled.div`
  content: "";
  margin-top: 40px;
  font-size: 20px;
`;
