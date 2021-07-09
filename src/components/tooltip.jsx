import React from "react";
import styled from "@emotion/styled";
import bp from "./breakpoints";

const TooltipContainer = styled.div(
  ({ lower }) => `
    position: absolute;
    display: none;
    top: ${lower ? "-11px" : "-43px"};
    left: 0;
    z-index: 10;
    background: #353C45;
    border-radius: 3px;
    padding: 6px 18px;
    ${bp.mobile} {
      display: none;
    }
  `,
);

const TooltipText = styled.p`
  color: #c2c2c2;
  font-size: 14px;
  display: inline;
  &:first-of-type {
    margin-right: 4px;
    color: #0493e3;
  }
`;

const Tooltip = ({ element, size, lower = false }) => (
  <TooltipContainer lower={lower}>
    <TooltipText>{element}</TooltipText>
    <TooltipText>{size}</TooltipText>
  </TooltipContainer>
);

export default Tooltip;
