import { css, Global } from "@emotion/react";
import { render } from "react-dom";

const App = () => (
  <>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          font-family: sans-serif;
        }

        body {
          margin: 0;
        }

        #app-root {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    />
    <h1
      css={css`
        margin: 0;
        min-width: 0;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: lightslategray;
      `}
    >
      Hello sandbox 👋
    </h1>
  </>
);

render(<App />, document.querySelector("#app-root"));
