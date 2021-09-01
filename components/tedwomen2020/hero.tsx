/** @jsx jsx */
import * as React from "react";
import lottie from "lottie-web";

import { mq } from "../../lib/breakpoints";
import { Block } from "../../lib/types";

import RichText from "./rich-text";
import { css, fadeIn, jsx, theme } from "./theme";

const TW20Hero: React.FC<Block> = ({ json, value }) => {
  const ref = React.useRef<HTMLDivElement>();
  const animationData = json ? json.lottie : null;
  React.useEffect(() => {
    if (animationData) {
      lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
      });
    }
  }, [animationData]);

  return (
    <div
      css={css`
        position: relative;
        height: 20rem;
        margin-top: -2rem;
        padding-bottom: 1rem;
        display: flex;

        a {
          display: inline-block;
          margin: auto auto 0;
          max-width: 15rem;
          z-index: 1;
          font-family: ${theme.fontBold};
          ${fadeIn}
        }

        ${mq.sm} {
          height: 30rem;
          padding-bottom: 3rem;
        }

        ${mq.md} {
          height: 38rem;
          margin-top: -5rem;
          padding-bottom: 5rem;
        }

        ${mq.lg} {
          height: 38rem;
        }

        ${mq.xl} {
          height: 47rem;
        }

        ${mq["2xl"]} {
          height: 60rem;
          padding-bottom: 7.5rem;
        }
      `}
    >
      <div
        ref={ref}
        css={css`
          position: absolute;
          z-index: 0;
          bottom: -2px;
          left: 0;
          width: 228vw;
          transform: translateX(-64vw);
          height: 100%;

          ${mq.lg} {
            width: 144vw;
            transform: translateX(-22vw);
          }

          ${mq.xl} {
            width: 134vw;
            transform: translateX(-16vw);
          }

          ${mq["2xl"]} {
            width: 137vw;
            transform: translateX(-17vw);
          }
        `}
      />
      <RichText document={value} />
    </div>
  );
};

export default TW20Hero;
