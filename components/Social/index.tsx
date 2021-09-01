/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import styled from "@emotion/styled";

import { mq } from "../../lib/breakpoints";

const Social: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    return (
      <div
        css={css`
          padding: 0 1rem;
          background-color: #000000;
          overflow-x: scroll;
          width: 100vw;
        `}
        {...props}
      >
        <div
          css={css`
            display: flex;
            margin-bottom: 0;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          `}
        >
            <a 
            css={css`
            margin: 0 0.75rem;
          `}
            href="https://www.facebook.com/TED" target="_blank">
                <img src="https://images.ctfassets.net/nshcilv185ir/3nRummkP0Bj73nmAt6JL8b/f312cd149ed25d12b9e084f56a9fa7d1/T22_Social_Icons-01.svg" className="facebookIcon" />
            </a>
            <a
            css={css`
            margin: 0 0.75rem;
          `} 
            href="https://www.instagram.com/ted/" target="_blank">
                <img src="https://images.ctfassets.net/nshcilv185ir/17Cagqmx1FCz8YuA27D24I/6ccc8ce06861cf7ecc860abf1779b813/T22_Social_Icons-02.svg" className="instagramIcon" />
            </a>
            <a 
            css={css`
            margin: 0 0.75rem;
          `}
            href="https://twitter.com/TEDTalks" target="_blank">
                <img src="https://images.ctfassets.net/nshcilv185ir/4PKgLT8rjUYXsDaytS2Z04/c6feed74965c25c6f61d633a4c68a433/T22_Social_Icons-03.svg" className="twitterIcon" />
            </a>
        </div>
      </div>
    );
  };
  
  export default Social;