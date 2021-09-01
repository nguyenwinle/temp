import { css, keyframes, SerializedStyles } from "@emotion/core";
import Estyled, { CreateStyled } from "@emotion/styled";

import { mq } from "../../lib/breakpoints";

export const theme = {
  mq,
  blue: "#3d7cc9",
  dark: "#121212",
  green: "#46b978",
  orange: "#ff7c00",
  pink: "#f45197",
  purple: "#7e57c5",
  red: "#e53e51",
  yellow: "#fdb614",
  white: "#ffffff",
  black: "#000000",
  gray: "#717171",
  fontBold: "Inter Bold",
} as const;

const fadeInKeyf = keyframes`
  0%, 67% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeIn = css`
  animation-name: ${fadeInKeyf};
  animation-duration: 3s;
`;

export type Theme = typeof theme;

export const styled = Estyled as CreateStyled<Theme>;

export type ThemedSerializedStyles = (t: Theme) => SerializedStyles;

export type StyleSheet = Record<
  string,
  SerializedStyles | ThemedSerializedStyles
>;

// helper to keep autocompletion working on objects and have `theme` function
// typed correctly
// https://stackoverflow.com/questions/52146544/why-autocomplete-stop-working-in-an-object-with-type-in-typescript
// https://github.com/microsoft/TypeScript/issues/7481
export function StyleSheet<T extends StyleSheet>(
  arg: ((c: typeof css) => T) | T
): T {
  if (typeof arg === "function") {
    return arg(css);
  }
  return arg;
}

export * from "@emotion/core";
