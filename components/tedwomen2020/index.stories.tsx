/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { ThemeProvider } from "emotion-theming";

import Text from "../Text";

import { Theme, theme } from "./theme";

export default {
  title: "TEDWomen 2020/Sections",
};

export const Demo: React.FC = () => {
  const swatch: Omit<Theme, "mq" | "fontBold"> = (() => {
    const { mq: nah, fontBold: nahh, ...rest } = theme;
    return rest;
  })();
  return (
    <ThemeProvider theme={theme}>
      <Text variant="heading3">Theme</Text>
      <div
        css={css`
          display: flex;
        `}
      >
        {Object.entries(swatch).map(([color, value]) => (
          <div key={color}>
            <div
              css={css`
                width: 10rem;
                height: 10rem;
                background-color: ${value};
              `}
            />
            <Text>{color}</Text>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};
