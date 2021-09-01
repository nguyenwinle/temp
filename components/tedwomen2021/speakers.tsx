/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import { mq } from "../../lib/breakpoints";

import AdornmentBottomLeft from "./adornment-bottom-left";
import { useSpeakerContext } from "./context";
import TW21Hero from "./hero";
import {Navbar} from "./navbar";
import RichText from "./rich-text";
import { fadeIn, styled, theme } from "./theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.dark};
`;

const ContentPage: React.FC = () => {
  const content = useSpeakerContext();
  const page = content.page.fields.blocks;

  const blocks = page?.map((block) => {
    return (
      <div
        key={block.fields.uuid}
        className={`${block.fields.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block.fields.backgroundColor};
          color: ${block.fields.fontColor};
          a {
            color: ${block.fields.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw21-speakers-header {
            div {
              padding: 2rem;
            }

            p {
              font-size: 1.5rem;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              margin: 0;
            }

            h6 {
              font-size: 3rem;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              padding: 0;
              margin: 0;
            }

          }

          &.tw21-speakers-intro {
            background-color: white;

            div {
              padding: 2rem;
            }

            p {
              font-size: 1.5rem;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              margin: 0;
            }

            h1 {
              font-size: 3rem;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              padding: 0;
              margin: 0 0 2rem 0;
            }
          }

          &.tw21-speakers-all {
            background-color: white;

            .tw21-speakers-speakerlist {
              div {
                display: inline-block;
              }
            }

            > div:first-of-type {
              padding: 1rem 1rem;
              margin: auto;
              max-width: 80%;
              width: 80%;
            }

            hr {
              display: none;
            }

            h6 {
              display: block;
              width: 100%;
              text-align: left;
              padding: 0.25rem 0.5rem 0.5rem 0.5rem;
              margin: 0.25rem 1rem 2rem 0.5rem;
            }

            h5 {
              display: block;
              width: 100%;
              text-align: left;
              padding: 0.5rem 0.5rem 0.25rem 0.5rem;
              margin: 0.5rem 1rem 0.25rem 0.5rem;
            }

            ul {
              padding: 0;
            }

            li {
              padding: 0;
              width: 18rem;
            }

            li:first-of-type:nth-child(1){
              background-color: red;
            }

            picture {
              padding: 0;
              margin: 0;
              width: 18rem;
              height: 18rem;

              img {
                width:100%;
                height:100%;
              }
            }

            p {
              display: none;
            }
          }

        `}
      >
        <div
          css={css`
            padding: 4rem 2rem;
            max-width: 48rem;
            margin: 0 auto;
            text-align: center;

            .tw21-home-intro {
              padding: 2.5rem 1rem;
            }

            hr {
              margin: 2rem 0;
              border: none;
              height: 1px;
              background-color: ${theme.gray};
              opacity: 0.3;
              width: 100%;
            }

            ${mq.lg} {
              padding: 8rem 0rem;

              .tw21-home-intro & {
                padding: 2.5rem;
              }
            }
          `}
        >
          <RichText document={block.fields.value} />
        </div>
      </div>
    );
  });

  const title = page?.metaTitle ? page?.metaTitle :'';
  return (
    <Container>
      <Head>
        <meta property="og:title" content={`${page?.metaTitle}`} />
        <meta property="title" content={`${page?.metaTitle}`} />
        <title>{title}</title>
        <meta property="og:description" content={`${page?.metaDescription}`} />
        <meta property="description" content={`${page?.metaDescription}`} />
        <meta property="og:url" content={`${page?.metaUrl}`} />
        <meta property="og:image" content={`${page?.metaImageUrl}`} />

        <meta name="keywords" content={`${page?.metaTags}`} />
        <meta name="keywords" content={`${page?.metaTags}`} />
      </Head>
      <Navbar selected="speakers"/>
      {blocks}
      <Footer />
    </Container>
  );
};

export default ContentPage;
