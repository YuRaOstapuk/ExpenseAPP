import styled, { css } from "styled-components";



const basicSideCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  background-color: #f1f1f1;
  padding: 0 10px;
  max-width: 800px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const LeftSide = styled.div`
  ${basicSideCss}
  background-color: #f1f1f1;
  color: #2d2d2d;
  flex-direction: column;
  padding: 0 10px;

  h2 {
    margin-bottom: 20px;
    align-self: flex-start;
    font-size: 24px;
    text-transform: uppercase;
  }

  .select-category-wrapper:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Center = styled.div`
  ${basicSideCss}
  background-color: #f9f9f9;
  flex: 1; 
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const PageContainer = styled.div`
  background-color: #f1f1f1;
  color: #333333;
  max-width: 800px;
  width:100%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  
`;

