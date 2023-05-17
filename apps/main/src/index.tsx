import { css, Global } from "@emotion/react";
import { randomAlphaNumeric } from "@tsx-sandbox/common/src/utils.js";
import { createRoot } from "react-dom/client";

const App = () => {
  console.log(randomAlphaNumeric(5));

  return (
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
};

createRoot(document.getElementById("app-root")!).render(<App />);
