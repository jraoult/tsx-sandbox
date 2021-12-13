import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy", "@emotion/babel-plugin"],
        },
      },
    }),
  ],
});