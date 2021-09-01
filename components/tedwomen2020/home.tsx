/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import { mq } from "../../lib/breakpoints";

import AdornmentBottomLeft from "./adornment-bottom-left";
import { useHomeContext } from "./context";
import TW20Hero from "./hero";
import RichText from "./rich-text";
import { fadeIn, styled, theme } from "./theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.dark};
`;

const ContentPage: React.FC = () => {
  const content = useHomeContext();
  const page = content?.page?.fields?.blocks;

  const blocks = page?.map((block) => {
    return (
      <div
        key={block.fields?.uuid}
        className={`${block.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block.fields?.backgroundColor};
          color: ${block.fields?.fontColor};
          a {
            color: ${block.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw20-home-intro {
            > * {
              ${fadeIn}
              text-align: left;
            }

            p {
              margin-bottom: 0;
            }

            p + p {
              margin-top: 2rem;
            }
          }

          .tw20-home-unicorn-learn-more {
            font-size: 12px;
          }

          .tw20-home-membership-list {
            p {
              color: ${theme.gray};
            }
          }

          &.tw20-home-schedule {
            hr {
              margin: 1rem 0;
            }

            ul {
              margin-bottom: 4rem;

              &:last-of-type {
                margin-bottom: 0;
              }
            }

            h3 {
              ${mq.lg} {
                text-align: left;
                padding: 0 2rem;
                width: 50%;
              }
            }
          }

          &.tw20-home-subscribe {
            input[type="submit"] {
              background-color: ${theme.yellow};
            }
          }
        `}
      >
        {(() => {
          switch (block.fields?.uuid) {
            case "tw20-home-hero": {
              return <TW20Hero {...block.fields} />;
            }

            case "tw20-home-ribbon-1":
            case "tw20-home-ribbon-2":
            case "tw20-home-ribbon-3":
            case "tw20-home-ribbon-4": {
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
                  <RichText document={block.fields?.value} />
                </div>
              );
            }

            case "tw20-home-hashtag": {
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
                      position: relative;
                      margin-bottom: 0;
                      z-index: 2;

                      ${mq.lg} {
                        font-size: 3.75rem;
                        line-height: 1.2;
                      }
                    }
                  `}
                >
                  <RichText document={block.fields?.value} />

                  <div
                    css={css`
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      height: 100%;
                    `}
                  >
                    <AdornmentBottomLeft />
                  </div>
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

                    .tw20-home-intro {
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

                      .tw20-home-intro & {
                        padding: 2.5rem;
                      }
                    }

                    .tw20-450-USD {
                      color: ${theme.gray};
                    }
                  `}
                >
                  <RichText document={block.fields?.value} />
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

      {blocks}
      <Footer />
    </Container>
  );
};

export default ContentPage;
