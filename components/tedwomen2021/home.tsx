/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import { mq } from "../../lib/breakpoints";

import AdornmentBottomLeft from "./adornment-bottom-left";
import { useHomeContext } from "./context";
import TW21Hero from "./hero";
import {Navbar} from "./navbar";
import RichText from "./rich-text";
import { fadeIn, styled, theme } from "./theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.dark};
`;

const ContentPage: React.FC = () => {
  const content = useHomeContext();
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

          &.tw21-home-intro {
            padding: 0 2rem;

            p {
              margin-bottom: 0;
              font-size: 1.5rem;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              text-align: left;
            }

            div {
              max-width: 60rem;
              padding: 0rem 0 4rem 0;
            }

          }

          &.tw21-home-unicorn-learn-more {
            font-size: 12px;
          }

          &.tw21-home-hero {

            picture {
              height: 75%;
              width: 75%;

              img {
                height: 100%;
                width: 100%;
              }
            }

            div {
              padding: 1rem !important;

              p {
                font-weight: bold;
                font-size: 1.25rem;
                font-family: "HelveticaNeueW01-75Bold", sans-serif;
              }
            }

            a {
              height: 4rem;
              width: 16rem;
              border-radius: 0 !important;

              span {
                font-weight: normal;
                font-size: 1.5rem;
                font-family: "HelveticaNeueW01-75Bold", sans-serif;
              }

            }
          }

          &.tw21-home-schedule {

            li p {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1.25rem;
              color: #000000;
              width: 100%;
              padding: 1rem 4rem 1rem 4rem;
            }

            hr {
              display: none;
            }

            ul {
              padding: 0;
              margin-top: 0;
              background-color: #fcf0eb;
            }

            .tw21-home-schedule-header {
              background-color: transparent;
            }

            h2 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 2.25rem;
            }

            ul div {
              position: relative;
            }

            li h3 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 2rem;
              position: absolute;
              bottom: 75%;
            }

            h5 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1.25rem;
              color: #000000;
            }

            picture {
              height: 16rem;
              overflow: hidden;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              display: flex;
              justify-content: center;
              filter: brightness(50%);

              ${mq.xs} {
                height: 20rem;
              }

              ${mq.sm} {
                
              }

              ${mq.lg} {
                height: 24rem;
              }

              ${mq.xl} {
                height: 28rem;
              }

              ${mq["2xl"]} {
                height: 40rem;
              }
            }
              img {
                width: 100%;
                max-height: 100%;
                object-fit: cover;
                object-position: center center;
              }
          }

          &.tw21-home-membership {

            hr {
              display: none;
            }

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }

            li {
              display: block;
              float: left;
              width: 100%;
              border-top: 0.075rem solid rgba(255, 255, 255, .25);
              border-opacity: 0.5;
            }

            div > a {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              border-radius: 0;
              border-style: solid;
              border-width: 0.125rem;
              border-color: #ffffff;
              background-color: transparent;
              margin: 0 1rem 0 1rem;
              float: right;
              width: 22%;
            }

            li h4 {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              text-align: left;
              margin: 1.5rem;
              float: right;
              width: 20%;
            }

            li p {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1rem;
              font-weight: normal;
              text-align: left;
              margin: 1rem;
              float: left;
              width: 20%;
            }

            a span {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1rem;
              font-weight: normal;
              color: #ffffff; 
            }

            span p {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1rem;
              font-weight: normal;
              text-align: left;
              margin: 1rem;
              float: right;
              width: 20%;
            }

            li h6 {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1rem;
              font-weight: normal;
              text-align: left;
              margin: 1rem;
              float: left;
              width: 45%;
            }
          }

          &.tw21-home-subscribe {

            h2 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1rem;
            }
          }

          &.tw21-home-what-people-say {

            h2 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 2.25rem;
              font-weight: normal;
            }

            h4 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1.25rem;
              font-weight: normal;
            }

            h6 {
              font-size: 1.25rem;
              font-weight: normal;
              text-align: left;
              padding: 2rem 2rem;
              margin: 0 0;
              width: 100%;
              background-color: #ffffff;
              border-radius: 0.25rem;
            }

            p {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1.25rem;
              font-weight: normal;
              text-align: left;
              padding: 0.5rem 2rem;
              width: 100%
            }

            hr {
              display: none;
            }

            ul {
              padding: 4rem 2rem 0rem 2rem;
            }

          }

          &.tw21-home-experience {

            h2 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 2.25rem;
            }

            h5 {
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 1.25rem;
              font-weight: normal;
            }

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            
            li {
              display: block;
              float: left;
              width: 100%;
            }

            li h4 {
              display: block;
              text-align: left;
              float: left;
              padding: 0 1rem 0 0;
              margin: 1rem 0 1rem 0;
              width: 20%;
            }

            li p {
              display: block;
              font-family: "HelveticaNeueW01-75Bold", sans-serif;
              font-size: 100%
              font-weight: normal;
              text-align: left;
              float: left;
              width: 70%;
            }
          }
        `}
      >
        {(() => {
          switch (block.fields.uuid) {
            case "tw21-home-ribbon-1":
            case "tw21-home-ribbon-2":
            case "tw21-home-ribbon-3":
            case "tw21-home-ribbon-4": 
            case "tw21-home-ribbon-5": {
              return (
                <div
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;

                    picture {
                      height: 16rem;
                      overflow: hidden;
                      width: 100%;
                      display: flex;
                      justify-content: center;

                      ${mq.xs} {
                        height: 20rem;
                      }

                      ${mq.sm} {
                        width: 50%;
                      }

                      ${mq.lg} {
                        height: 24rem;
                      }

                      ${mq.xl} {
                        height: 28rem;
                      }

                      ${mq["2xl"]} {
                        height: 40rem;
                      }

                      img {
                        width: 100%;
                        max-height: 100%;
                        object-fit: cover;
                        object-position: center center;
                      }
                    }
                  `}
                >
                  <RichText document={block.fields.value} />
                </div>
              );
            }

            case "tw21-home-hashtag": {
              return (
                <div
                  css={css`
                    position: relative;
                    padding: 4rem 2rem;
                    margin: 0 auto;
                    text-align: center;

                    ${mq.lg} {
                      padding: 8rem 0rem;
                    }

                    h2 {
                      font-family: "HelveticaNeueW01-75Bold", sans-serif;
                      font-size: 2.25rem;
                      position: relative;
                      margin-bottom: 0;
                      z-index: 2;

                      ${mq.lg} {
                        font-size: 2.25rem;
                        line-height: 1.2;
                      }
                    }

                    p {
                      font-family:"HelveticaNeueW01-75Bold", sans-serif;
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block.fields.value} />
                </div>
              );
            }

            default: {
              return (
                <div
                  css={css`
                    padding: 4rem 2rem;
                    max-width: 48rem;
                    margin: 0 auto;
                    text-align: center;

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

                    }
                  `}
                >
                  <RichText document={block.fields.value} />
                </div>
              );
            }
          }
        })()}
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
      <Navbar selected="home"/>
      {blocks}
      <Footer />
    </Container>
  );
};

export default ContentPage;
