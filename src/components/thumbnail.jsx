import React from "react";
import styled from "@emotion/styled";
import bp from "./breakpoints";

const Image = styled.img(
  ({ hasImage }) => `
    height: auto;
    width: 500px;
    max-width: calc(100% - 48px);
    margin: 24px 0 24px 24px;
    ${bp.mobile} {
      width: 100%;
    }
  `,
);

const Thumbnail = ({ image, alt }) => (
  <>{image && <Image src={image} alt={alt}></Image>}</>
);

export default Thumbnail;
