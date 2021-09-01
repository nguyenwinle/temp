/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

import { mq } from "../../lib/breakpoints";

const NewsletterSignup: React.FC<{ url: string }> = ({ url }) => {
  return (
    <form
      action={url}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      css={css`
        max-width: 32rem;
        margin: 0 auto;
      `}
      target="_blank"
      noValidate
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${mq.md} {
            flex-direction: row;
          }
        `}
      >
        <input
          type="email"
          defaultValue=""
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Enter your email address"
          css={css`
            margin-bottom: 1rem;
            padding: 1rem;
            font-size: 1.25rem;
            border-width: 0;

            ${mq.md} {
              width: 70%;
              margin-bottom: 0;
              margin-right: 1rem;
            }
          `}
          required
        />

        <div
          css={css`
            position: absolute;
            left: -5000px;
          `}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_07487d1456302a286cf9c4ccc_437c29daeb"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <input
          type="submit"
          defaultValue="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          css={css`
            padding: 1rem;
            border-width: 0;
            font-size: 1.25rem;
            font-family: "Inter Bold";
            ${mq.md} {
              width: 30%;
              padding: 0;
            }
          `}
        />
      </div>
    </form>
  );
};

export default NewsletterSignup;
