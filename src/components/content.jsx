import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import bp from "./breakpoints";
import Tooltip from "./tooltip";

const TitleContainer = styled.div(
  ({ color }) => `
    position: relative;
    z-index: 10;
    margin-top: 48px;
    `,
);

const Description = styled.h1(
  ({ color }) => `
    width: auto;
    position: relative;
    line-height: 64px;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 56px;
    max-width: 880px;
    z-index: 2;
    padding-bottom: 0;
    margin: 0;
    ${bp.mobile} {
      font-size: 42px;
      line-height: 50px;
    }
    ${
      color &&
      `
      &:hover {
        background: #b8e2f3;
        &:before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 10px 0 10px;
          border-color: #353C45 transparent transparent transparent;
          top: -10px;
          background: none;
          left: 50px;
        }
        & + div {
          display: block;
        }
      }
    `
    }
  `,
);

const Title = styled.h2(
  ({ color }) => `
    position: relative;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 64px;
    background: none;
    z-index: 2;
    padding-bottom: 8px;
    margin: 0;
    scroll-margin-top: 20px;
      ${bp.mobile} {
        margin-left: 0;
      }
      ${
        color &&
        `
        cursor: default;
        &:hover {
          background: linear-gradient(#b8e2f3 65%, #F3DBB8 65%);
          &:before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 10px 0 10px;
            border-color: #353C45 transparent transparent transparent;
            top: -10px;
            background: none;
            left: 50px;
          }
          & + div {
            display: block;
          }
        }
      `
      }
  `,
);

const Background = styled.div(
  ({ color }) => `
    height: 100%;
    width: calc(100%);
    position: absolute;
    top: 0;
    left: -14px;
    padding: 0 0 0 34px;
    &:hover {
      background: ${color ? "#c9ddbb" : "none"};  }
    `,
);

const Content = ({ isOpen, subtitle }) => {
  const [titleWidth, setTitleWidth] = useState("");
  const [titleHeight, setTitleHeight] = useState("");
  const [subTitleWidth, setSubTitleWidth] = useState("");
  const [subTitleHeight, setSubTitleHeight] = useState("");
  const [resize, setResize] = useState(true);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  // const { width, height } = useContainerProperties(titleRef.current);

  React.useEffect(() => {
    window.addEventListener("resize", () => setResize(true), false);
  }, []);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subTitleElement = subTitleRef.current;
    if (titleElement && subTitleElement && resize) {
      setTitleWidth(titleElement.offsetWidth);
      setTitleHeight(titleElement.offsetHeight);
      setSubTitleWidth(subTitleElement.offsetWidth);
      setSubTitleHeight(subTitleElement.offsetHeight);
      setResize(false);
    }
  }, [titleRef, resize]);

  return (
    <>
      {subtitle && (
        <TitleContainer color={isOpen}>
          <Title id="about" color={isOpen} ref={subTitleRef}>
            A bit about me
          </Title>
          {isOpen ? (
            <Tooltip
              element="h2"
              size={`| ${subTitleWidth} x ${subTitleHeight}`}
            />
          ) : null}
          <Description color={isOpen} ref={titleRef}>
            {subtitle}
          </Description>
          {isOpen ? (
            <Tooltip
              element="h1"
              size={`| ${titleWidth} x ${titleHeight}`}
              lower
            />
          ) : null}
          <Background color={isOpen}></Background>
        </TitleContainer>
      )}
    </>
  );
};

// export function getElementProperties(element) {
//   return element.current.getBoundingClientRect();
// }

// export function useContainerProperties(element) {
//   const [containerProperties, setContainerProperties] = React.useState({
//     width: 0,
//     height: 0,
//   });

//   React.useEffect(() => {
//     if (element) {
//       debugger;
//       const { width, height } = getElementProperties(element);
//       setContainerProperties({
//         width,
//         height,
//       });
//     }
//   }, [element]);

//   return containerProperties;
// }

export default Content;
