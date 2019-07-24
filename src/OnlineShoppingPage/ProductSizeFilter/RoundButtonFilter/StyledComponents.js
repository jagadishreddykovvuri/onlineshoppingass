import styled, { css } from "styled-components";
export const RoundSize = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #e8eae6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  :hover {
    border-style: solid;
    border-width: 0.5px;
  }
  ${props =>
    props.clicked &&
    css`
      color: white;
      background-color: black;
    `}
`;
