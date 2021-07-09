import React from "react";
import styled from "@emotion/styled";
import bp from "./breakpoints";

const ButtonContainer = styled.div`
  width: calc(100% + 68px);
  top: 0;
  left: -46px;
  position: absolute;
  display: flex;
  height: 100%;
  align-items: center;
  ${bp.tablet} {
    display: none;
  }
  ${bp.mobile} {
    display: none;
  }
`;

export const Button = styled.button(
  ({ open }) => `
  
  background: none;
  //   background: red;
  border: none;
  color: #dbdbdb;
  padding: 0;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  border-radius: 3px;
  font-size: 22px;
  
  width: 25px;
  margin-right: 8px;
  height: fit-content;
  
  display: ${open ? "flex" : "none"};
  display: flex;
  &:hover {
    background: #efefef;
  }
  ${bp.tablet} {
    &:hover {
      background: none;
    }
  }
`,
);

export const ButtonBackground = styled.div(
  ({ open = false, removeBackground }) => `
  display: "flex";
  background: #f1f1f1;
  height: 100%;
  border-right: ${open ? "2px" : "1px"} solid #dbdbdb;
  align-items: center;
  width: ${open ? "100%" : 0};
  transition: width 1s;
  &:hover {

  }
`,
);

const Inspector = ({ hasExpand, open, setOpen }) => (
  <>
    {hasExpand && (
      <ButtonContainer>
        <Button onClick={() => setOpen(!open)}>{`${open ? "-" : "+"}`}</Button>
        <ButtonBackground open={open}></ButtonBackground>
      </ButtonContainer>
    )}
  </>
);

export default Inspector;
