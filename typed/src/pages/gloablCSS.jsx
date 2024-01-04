import { css } from "@emotion/react";

const gloablCSS = css`
  @font-face {
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-weight: 500;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .curr-letter {
    text-decoration: underline;
  }
`;

export default gloablCSS;
