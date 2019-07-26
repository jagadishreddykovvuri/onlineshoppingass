import styled, { css } from "styled-components";
export const Div = styled.div`
  width: 100%;
  height: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props =>
    props.shadow &&
    css`
      width: 340px;
      box-shadow: 3px 3px 3px 3px #ccc;
      height: 350px;
      padding: 20px;
    `}
`;
export const Input = styled.input`
  width: 300px;
  height: 35px;
  margin: 10px;
  border: none;
  font-style: bold;
  padding: 5px;
  box-shadow: 2px 2px 2px 2px #ccc;
`;
export const Button = styled.button`
  width: 280px;
  height: 35px;
  font-size: 19px;
  background-color: black;
  color: white;
  font-style: bold;
  border: none;
  margin: 5px;
  box-shadow: 2px 2px 2px 2px #ccc;
`;
