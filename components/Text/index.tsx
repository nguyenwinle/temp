/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import styled from "@emotion/styled";

import { mq } from "../../lib/breakpoints";

const bold = css`
  font-family: "Inter Bold", "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.875;
  letter-spacing: -0.75px;
`;

const basic = css`
  font-family: "Inter";
  line-height: 1.5;
  letter-spacing: -0.6px;
`;

const CONTAINERS: Record<Variant, React.FC> = {
  heading2: styled.h2`
    letter-spacing: -1.45px;
    font-family: "Inter Bold", "Inter";
    font-weight: bold;
    font-size: 2.625rem;
    line-height: 1.25;
    ${mq.lg} {
      font-size: 3rem;
    }
  `,

  heading3: styled.h3`
    font-family: "Inter Bold";
    font-size: 1.75rem;
    line-height: 1.3;
  `,

  heading4: styled.h4`
    margin-bottom: 0.5rem;
    line-height: 1.4;
    font-size: 1.125rem;
    letter-spacing: -0.75px;
    ${mq.lg} {
      font-size: 1.25rem;
      letter-spacing: -0.95px;
    }
  `,

  bold: styled.span`
    ${bold};
  `,

  button: styled.span`
    ${bold};
    font-size: 1rem;
    line-height: 1;
  `,

  tiny: styled.span`
    ${basic};
    font-size: 0.75rem;
  `,

  default: styled.span`
    ${basic};
  `,
};

export const VARIANTS = [
  "heading2",
  "heading3",
  "heading4",
  "bold",
  "button",
  "tiny",
  "default",
] as const;
type Variant = typeof VARIANTS[number];

type Props = {
  variant?: Variant;
};

const Text: React.FC<Props & React.HTMLProps<HTMLSpanElement>> = ({
  variant = "default",
  children,
  ...props
}) => {
  const Container = (() => {
    return CONTAINERS[variant] || CONTAINERS["default"];
  })();
  return <Container {...props}>{children}</Container>;
};

export default Text;
