import { css, Global } from "@emotion/react";
import { createRoot } from "react-dom/client";

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

createRoot(document.getElementById("app-root")!).render(<App />);
