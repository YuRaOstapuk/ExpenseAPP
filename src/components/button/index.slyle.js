import styled, { css } from "styled-components";
import { SIZE } from "../../overall";

export const FancyButton = styled.button`
  ${({size = 'l'}) => SIZE[size]}
  padding: 10px 20px;
  background-color: #fff;
  border: solid 2px #1f1f1f ;
  color: #1f1f1f;
  font-size: 15px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1f1f1f;
    color: white;
  }

  ${({disabled}) =>
      disabled &&
      css`
      background-color: #bdbdbd;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
