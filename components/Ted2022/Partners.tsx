/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import { mq } from "../../lib/breakpoints";

import AdornmentBottomLeft from "./adornment-bottom-left";
import { usePartnerContext } from "./context";
import T22Hero from "./hero";
import Header from "./Header";
import { Navbar } from "./navbar";
import RichText from "./rich-text";
import { fadeIn, styled, theme } from "./theme";

const Container = styled.div`
  // background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.dark};
`;

const ContentPage: React.FC = () => {
  // const content = usePartnerContext();
  // const page = content.page.fields.blocks;

  // const blocks = page?.map((block) => {
  //   return (
  //     <div
  //       key={block.fields.uuid}
  //       className={`${block.fields.uuid
  //         .replace(/\s+/g, "-")
  //         .replace("#", "hashtag")}`}
  //       css={css`
  //         width: 100vw;
  //         overflow-x: hidden;
  //         background-color: ${block.fields.backgroundColor};
  //         color: ${block.fields.fontColor};
  //         a {
  //           color: ${block.fields.linkColor};
  //         }

  //         p {
  //           margin-bottom: 1rem;
  //         }

  //         &.tw21-partners-header {
  //           div {
  //             padding: 2rem;
  //           }

  //           p {
  //             font-size: 1.5rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             margin: 0;
  //           }

  //           h6 {
  //             font-size: 3rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             padding: 0;
  //             margin: 0;
  //           }

  //         }

  //         &.tw21-partners-intro {
  //           background-color: white;

  //           div {
  //             padding: 2rem;
  //           }

  //           p {
  //             font-size: 1.5rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             margin: 0;
  //           }

  //           h1 {
  //             font-size: 3rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             padding: 0;
  //             margin: 0 0 2rem 0;
  //           }
  //         }
  //       `}
  //     >
  //       <div
  //         css={css`
  //           padding: 4rem 2rem;
  //           max-width: 48rem;
  //           margin: 0 auto;
  //           text-align: center;

  //           .tw21-home-intro {
  //             padding: 2.5rem 1rem;
  //           }

  //           hr {
  //             margin: 2rem 0;
  //             border: none;
  //             height: 1px;
  //             background-color: ${theme.gray};
  //             opacity: 0.3;
  //             width: 100%;
  //           }

  //           ${mq.lg} {
  //             padding: 8rem 0rem;

  //             .tw21-home-intro & {
  //               padding: 2.5rem;
  //             }
  //           }
  //         `}
  //       >
  //         <RichText document={block.fields.value} />
  //       </div>
  //     </div>
  //   );
  // });

  // const title = page?.metaTitle ? page?.metaTitle :'';
  const images = ['https://via.placeholder.com/200', 'https://via.placeholder.com/200', 'https://via.placeholder.com/200', 'https://via.placeholder.com/200', 'https://via.placeholder.com/200', 'https://via.placeholder.com/200']

  const renderPartners = () => (
    images.map((image, index) => {
      return (
        <img css={css`
        padding: 32px;
      `}
          key={index} src={image} alt="image" />
      )
    })
  )

  const renderPartnersTwo = () => (
    images.map((image, index) => {
      return (
        <img
          css={css`
            padding: 32px;
          `}
          key={index} src={image} alt="image" />
      )
    })
  )

  return (
    <Container>
      <Navbar selected="partners" />
      <Header />
      <div
        css={css`
          text-align: center;
          max-width: 1200px;
          margin: auto;
          padding-top: 4rem;
        `}
      >
        <h1
          css={css`
          font-size: 3rem;
        `}
        >Partners</h1>
        <p
          css={css`
          font-size: 1.25rem;
        `}
        >Thanks to the generous support of our partners, we are able to fund TED's mission of ideas worth spreading.</p>
        <div
          css={css`
          text-align: center;
          padding: 6rem 0;
        `}
        >
          {renderPartners()}
          <hr
            css={css`
          border-color: rgba(0,0,0,0.1);
          max-width: 1200px;
          margin: 4rem 0;
        `}
          />
          {renderPartners()}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default ContentPage;