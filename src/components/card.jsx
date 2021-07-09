import React, { useState } from "react";
import styled from "@emotion/styled";
import bp from "./breakpoints";
import Inspector from "./inspector";
import AdditionalContent from "./additionalContent";
import Content from "./content";
import Thumbnail from "./thumbnail";
import { ButtonBackground, Button } from "./inspector";

const CardContainer = styled.div`
  position: relative;
  &:not(:first-of-type) {
    margin-top: 42px;
  }
  &:not(:last-of-type) {
    padding-bottom: 42px;
    &:after {
      content: "";
      width: 90%;
      height: 1px;
      background: #ededed;
      position: absolute;
      bottom: 0;
    }
  }
  &:first-of-type {
    padding-bottom: 42px;
    &:after {
      content: "";
      width: 90%;
      height: 1px;
      background: #ededed;
      position: absolute;
      bottom: 0;
    }
  }
`;

const ContentContainer = styled.div(
  ({ color }) => `
  position: relative;
  margin-left: -32px;
  margin: 0;
  width: fit-content;
  &:hover ${ButtonBackground} {
    border-color: #000;
  }
  &:hover ${Button} {
    color: #000;
  }
  ${bp.mobile} {
    margin-left: 0;
  }
`,
);

const Card = ({
  subtitle,
  image,
  button,
  hasExpand,
  children,
  hasImage = false,
}) => {
  const [open, setOpen] = useState(false);
  const isOpen = hasExpand && open ? 1 : 0;

  return (
    <CardContainer>
      <ContentContainer color={isOpen}>
        <Inspector hasExpand={hasExpand} open={open} setOpen={setOpen} />
        <Content subtitle={subtitle} isOpen={isOpen} />
        <Thumbnail image={image} alt="Thumbnail image" />
      </ContentContainer>
      <AdditionalContent children={children} button={button} />
    </CardContainer>
  );
};

export default Card;
