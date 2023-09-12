import styled from 'styled-components';
import { SIZE } from '../../overall';


export const FancyInput = styled.input`
  ${({size = 'xxl'}) => SIZE[size]}
  padding: 10px;
  border: 1px solid #cecece;
  background-color: #fff;
  color: #1f1f1f;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  margin-bottom: 10px;

  &:focus {
    border-color: #cecece;
  }
`;
