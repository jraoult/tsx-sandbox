import { css, Global } from "@emotion/react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { randomAlphaNumeric } from "@tsx-sandbox/common/src/utils.ts";
import type { ReactNode } from "react";

const RootDocument = (props: Readonly<{ children: ReactNode }>) => {
  console.log("Cross workspace imports work", randomAlphaNumeric(5));

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Global
          styles={css`
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            * {
              margin: 0;
            }

            html {
              font-family: sans-serif;
              text-size-adjust: none;
            }

            body {
              min-block-size: 100vh;
            }

            input,
            button,
            textarea,
            select {
              font-family: inherit;
              font-size: inherit;
            }
          `}
        />
        {props.children}
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TSX sandbox" },
    ],
  }),
  component: () => (
    <RootDocument>
      <Outlet />
    </RootDocument>
  ),
  // silence pesky warning
  // cf. https://github.com/TanStack/router/issues/2459
  notFoundComponent: () => <div>Not Found</div>,
});
