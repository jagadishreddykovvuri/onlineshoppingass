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
export const Loaddiv = styled.div`
  position: fixed;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid black;
  width: 20px;
  height: 20px;
  right: 1000px;
  top: 512px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const P = styled.p`
  font-size: 10px;
  ${props =>
    props.success &&
    css`
      color: green;
    `}
  ${props =>
    props.failure &&
    css`
      color: red;
    `}
`;
