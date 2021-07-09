import React, { useState } from "react";
import styled from "@emotion/styled";

const MoreButton = styled.button(
  ({ open }) => `
  background: none;
  border: none;
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  margin-top: 16px;
  text-decoration: underline;
  text-align: left;
  padding: 0;
  max-width: 90%;
  padding-left: 18px;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: black transparent transparent transparent;
    transform: rotate(${open ? "180deg" : "360deg"});
    top: 5px;
    left: 0;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    &:before {
      border-color: #d20a5c transparent transparent transparent;
    }
  }
`,
);

const AdditionalContentContainer = styled.div(
  ({ showContent }) =>
    `
    visibility: hidden;
    margin-top: 32px;
    height: fit-content;
    opacity: 1;
    height: fit-content;
    height: max-content;
    max-height: 0;
    max-width: 880px;
    transition: max-height 0.5s 0.1s ease, opacity 0.22s ease, margin 0.5s ease,
      padding 0.5s ease;

  ${
    showContent &&
    `
    visibility: visible;
    pointer-events: initial;
    opacity: 1;
    max-height: fit-content;
    max-height: max-content;
    max-height: 600px;
    margin-bottom: 24px;
    padding: 8px 24px 16px
    transition: max-height 0.5s ease, opacity 0.25s 0.1s ease, margin 0.5s ease,
      padding 0.5s ease;
 
  `
  }
`,
);

const InnerContainer = styled.div(
  ({ showContent }) => `
  opacity: ${showContent ? 1 : 0};
  transition: opacity 0.15s ${showContent ? "0.2s" : "0.05s"};
`,
);

const AdditionalContent = ({ children, button }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <MoreButton
        onClick={() => setShowContent((state) => !state)}
        open={showContent}
      >
        {button}
      </MoreButton>
      <AdditionalContentContainer showContent={showContent}>
        <InnerContainer showContent={showContent}>{children}</InnerContainer>
      </AdditionalContentContainer>
    </>
  );
};

export default AdditionalContent;
