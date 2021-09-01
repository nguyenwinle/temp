/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import styled from "@emotion/styled";

import { mq } from "../../lib/breakpoints";

const Link = styled.a`
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-decoration: none;
  ${mq} {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  :visited {
    color: #ffffff;
  }
`;

const LINKS = [
  ["TED.com", "https://www.ted.com"],
  ["Contact", "https://support.ted.com/hc/en-us/requests/new"],
  ["Help", "https://support.ted.com/"],
  [
    "Terms of use",
    "https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use",
  ],
  [
    "Privacy policy",
    "http://www.ted.com/about/our-organization/our-policies-terms/privacy-policy",
  ],
  ["Attendee dashboard", "http://www.ted.com/dashboard/conferences/tw2020"],
  ["More TED events", "https://www.ted.com/attend/conferences"],
];

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div
      css={css`
        padding: 4rem 1rem;
        background-color: #000000;
        overflow-x: scroll;
        width: 100vw;
      `}
      {...props}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;

          ${mq.md} {
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
        `}
      >
        {LINKS.map((link) => (
          <Link href={link[1]} target="_blank" rel="noreferrer" key={link[1]}>
            {link[0]}
          </Link>
        ))}
      </div>
      <div
        css={css`
          color: #ffffff;
          ${mq.md} {
            text-align: center;
          }
        `}
      >
        &copy; {new Date().getFullYear()} TED Conferences, LLC.
      </div>
    </div>
  );
};

export default Footer;
