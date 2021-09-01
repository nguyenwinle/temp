/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import Social from "../Social";
import { mq } from "../../lib/breakpoints";
import { useEffect } from "react";
import AdornmentBottomLeft from "./adornment-bottom-left";
import { useHomeContext } from "./context";
import TW21Hero from "./hero";
import { Navbar } from "./navbar";
import RichText from "./rich-text";
import { fadeIn, styled, theme } from "./theme";
import ReactDOM from "react-dom";
import MapContainer from "./mapContainer";
import styles from "./css/home.module.css";
import smoothscroll from 'smoothscroll-polyfill';

const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.dark};
`;

const ContentPage: React.FC = () => {
  const content = useHomeContext();
  const page = content?.page?.fields?.blocks;
  const fullPage = content?.page?.fields;
  
  let oneBlock;
  let twoThroughFour
  let fiveThroughNine;
  let tenThroughSeventeen;
  let tenThroughfifteen;
  let fifteenThroughSixteen;
  let ninteen;
  let sixteenThroughSeventeen;
  if (page !== undefined) {
    oneBlock = page.slice(0, 1);
    twoThroughFour = page.slice(1, 3);
    fiveThroughNine = page.slice(3, 8);
    tenThroughSeventeen = page.slice(8, 21);
    tenThroughfifteen = page.slice(8, 18);
    fifteenThroughSixteen = page.slice(18, 19);
    ninteen = page.slice(19,20);
    sixteenThroughSeventeen = page.slice(20, 21);
  }
  

  const headerBlock = oneBlock?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          // overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.t22-home-intro {
            ${mq["2xs"]}, ${mq.xs} {
              background-color: #cae31c;
              padding: 2rem 2rem;
            }
            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              background-color: #ffffff;
              padding: 3rem 2rem;
              max-height: 507px;
              overflow-y: hidden;
              overflow-x: hidden;
              justify-content: center;
            }

            p {
              margin-bottom: 0;
              font-size: 20pt;
              font-family: "Inter";
              text-align: center;
              line-height: 140%;
              font-weight: 400;
              letter: -0.4px;
            }

            div {
              max-width: 70rem;
              // padding: 0rem 0 4rem 0;
              padding: 0 0 0 0;
            }
          }

          &.t22-home-hero {
            div {
              padding: 1rem !important;

              ${mq["2xs"]} {
                p {
                  font-size: 0.65rem;
                }
              } 
              
              ${mq.xs} {
                p {
                  font-size: 0.75rem;
                }
              }

              ${mq.ss} {
                p {
                  font-size: 1rem;
                }
              }

              ${mq.sm} {
                p {
                  font-size: 1.5rem;
                }
              }
              ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                p {
                  font-size: 2.1em;
                }
              }
              p {
                font-weight: bold;
                font-family: "Inter";
                margin: 1rem 0 1rem 0;
              }
            }

            ${mq["2xs"]}, ${mq.xs} {
              a {
                display: none;
              }
            }
            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              a {
                display: block;
              }
            }

            a {
              height: 3rem;
              width: 10rem;
              border-radius: 0 !important;
              margin: 2rem auto;
              font-weight: bold;
              font-size: 1rem;
              font-family: "Inter";
              padding: 1rem;
              background-color: #ffffff;
            }

            a:hover {
              color: #ffffff;
              background-color: #333333;
            }
          }

          &.t22-home-hero {
            position: relative;

            > div {
              max-width: none;
              width: 100%;
            }

            picture:nth-of-type(1) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;

              img {
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;

              }
            }

            picture:nth-of-type(2) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;

              img {
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
              }
            }

            picture:nth-of-type(3),
            picture:nth-of-type(4) {
              display: block;
              width: 100%;
            }

            ${mq["2xs"]}, ${mq.xs} { 
              picture:nth-of-type(3) img:first-of-type {
                height: 20%;
                width: 20%;
                padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 30%;
                width: 30%;
                padding-top: 5%;
              }
            }

            ${mq.ss} {
              picture:nth-of-type(3) img:first-of-type {
                  height: 25%;
                  width: 25%;
                  padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 38%;
                width: 38%;
                padding-top: 5%;
              }
            }

            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              picture:nth-of-type(3) img:first-of-type {
                height: 20%;
                width: 20%;
                padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 30%;
                width: 30%;
                padding-top: 5%;
              }
            }
          }

          &.t22-home-schedule {
            > div {
              padding: 1rem;

              ${mq["2xs"]}, ${mq.xs} {
                hr {
                  display: none;
                }
              }

              ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                hr {
                  display: block;
                }
              }

              hr {
                margin: auto;
                width: 50%;
                background-color: black;
              }

            }

            ul hr {
              display: none;
            }

            ul {
              padding-inline-start: 0;
            }

            p {
              font-family: "Inter";
              font-size: 20px;
              width: 100%;
              text-align: center;
              font-weight: 400;
              line-height: 28px;
            }

            h1 {
              width: 100%;
              text-align: center;
              span {
                line-height: 100%;
                font-family: "Inter";
                font-weight: 800;
              }
              ${mq["2xs"]}, ${mq.xs} {
                span {
                  font-size: 38px;
                }
              }
              ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                span {
                  font-size: 48px;
                }
              }
            }
          }
        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const introBlock = twoThroughFour?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          // overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.t22-home-intro {
            ${mq["2xs"]}, ${mq.xs} {
              background-color: #cae31c;
              padding: 0.5rem 2rem;
            }
            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              background-color: #ffffff;
              padding: 3rem 2rem;
              max-height: 507px;
              overflow-y: hidden;
              overflow-x: hidden;
              justify-content: center;
            }

            p {
              margin-bottom: 0;
              font-size: 20pt;
              font-family: "Inter";
              text-align: center;
              line-height: 140%;
              font-weight: 400;
              letter: -0.4px;
            }

            div {
              max-width: 70rem;
              // padding: 0rem 0 4rem 0;
              padding: 0 0 0 0;
            }
          }

          &.t22-home-hero {
            div {
              padding: 1rem !important;

              ${mq["2xs"]} {
                p {
                  font-size: 0.65rem;
                }
              } 
              
              ${mq.xs} {
                p {
                  font-size: 0.75rem;
                }
              }

              ${mq.ss} {
                p {
                  font-size: 1rem;
                }
              }

              ${mq.sm} {
                p {
                  font-size: 1.5rem;
                }
              }
              ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                p {
                  font-size: 2.1em;
                }
              }
              p {
                font-weight: bold;
                font-family: "Inter";
                margin: 1rem 0 1rem 0;
              }
            }

            ${mq["2xs"]}, ${mq.xs} {
              a {
                display: none;
              }
            }
            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              a {
                display: block;
              }
            }

            a {
              height: 3rem;
              width: 10rem;
              border-radius: 0 !important;
              margin: 2rem auto;
              font-weight: bold;
              font-size: 1rem;
              font-family: "Inter";
              padding: 1rem;
              background-color: #ffffff;
            }

            a:hover {
              color: #ffffff;
              background-color: #333333;
            }
          }

          &.t22-home-hero {
            position: relative;

            > div {
              max-width: none;
              width: 100%;
            }

            picture:nth-of-type(1) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;

              img {
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;

              }
            }

            picture:nth-of-type(2) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;

              img {
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
              }
            }

            picture:nth-of-type(3),
            picture:nth-of-type(4) {
              display: block;
              width: 100%;
            }

            ${mq["2xs"]}, ${mq.xs} { 
              picture:nth-of-type(3) img:first-of-type {
                height: 20%;
                width: 20%;
                padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 30%;
                width: 30%;
                padding-top: 5%;
              }
            }

            ${mq.ss} {
              picture:nth-of-type(3) img:first-of-type {
                  height: 25%;
                  width: 25%;
                  padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 38%;
                width: 38%;
                padding-top: 5%;
              }
            }

            ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              picture:nth-of-type(3) img:first-of-type {
                height: 20%;
                width: 20%;
                padding-top: 5%;
              }
              picture:nth-of-type(4) img {
                height: 30%;
                width: 30%;
                padding-top: 5%;
              }
            }
          }

          &.t22-home-schedule {
            > div {
              padding: 1rem;

              ${mq["2xs"]}, ${mq.xs} {
                hr {
                  display: none;
                }
              }

              ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                hr {
                  display: block;
                }
              }

              hr {
                margin: auto;
                width: 50%;
                background-color: black;
              }

            }

            ul hr {
              display: none;
            }

            ul {
              padding-inline-start: 0;
            }

            p {
              font-family: "Inter";
              font-size: 20px;
              width: 100%;
              text-align: center;
              font-weight: 400;
              line-height: 28px;
            }

            h1 {
              width: 100%;
              text-align: center;
              span {
                line-height: 100%;
                font-family: "Inter";
                font-weight: 800;
              }
              ${mq["2xs"]}, ${mq.xs} {
                span {
                  font-size: 38px;
                }
              }
              ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
                span {
                  font-size: 48px;
                }
              }
            }
          }
        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const blocks2 = fiveThroughNine?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.t22-home-schedule-sunday,
          &.t22-home-schedule-monday,
          &.t22-home-schedule-tuesday,
          &.t22-home-schedule-wednesday,
          &.t22-home-schedule-thursday {
            width: auto;
            display: inline-block;
            margin: 1rem;

            > div {
              margin: 0;
              padding: 0;
              width: fit-content;
            }

            li p {
              font-family: "Inter";
              font-size: 1.1em;
              color: #000000;
              width: 100%;
              // padding: 0.5rem 2rem 1rem 2rem;
              padding:0 1rem;
              line-height: 1.4em
            }

            hr {
              display: none;
            }

            ul {
              padding: 0;
              margin-top: 0;
              background-color: #f2f2f2;

              ${mq["2xs"]} {
                width: 18rem;
              } 
              
              ${mq.xs} {
                width: 20rem;
              }

              ${mq.sm} {
                width: 20rem;
                height: 22rem;
              }

              ${mq.lg} {
                width: 30rem;
                height: 18rem;
              }

              ${mq.xl} {
                width: 30rem;
                height: 18rem;
              }

              ${mq["2xl"]} {
                width: 30rem;
                height: 18rem;
              }
            }

            h2 {
              font-family: "Inter";
              font-size: 2.25rem;
            }

            ul div {
              position: relative;
            }

            div li {
              text-align: center;
            }

            li h3 {
              font-family: "Inter";
              font-size: 2rem;
              display: block;
              width: 100%;
              margin: 1rem 0 0;
            }

            h5 {
              font-family: "Inter";
              font-size: 1.25rem;
              color: #000000;
              display: block;
              width: 100%;
              margin: 1rem 0 0 0;
            }

            picture {
              width: 16rem;
              height: 16rem;
              overflow: hidden;
              display: flex;
              justify-content: center;

              ${mq["2xs"]} {
                width: 18rem;
                height: 15rem;
              } 
              
              ${mq.xs} {
                width: 20rem;
                height: 15rem;
              }

              ${mq.sm} {
                width: 20rem;
                height: 15rem;
              }

              ${mq.lg} {
                width: 30rem;
                height: 20rem;
              }

              ${mq.xl} {
                width: 30rem;
                height: 20rem;
              }

              ${mq["2xl"]} {
                width: 30rem;
                height: 20rem;
              }
            }
            img {
              object-fit: cover;
              object-position: center center;
              width: 100%;
            }
          }
        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const locationBlock = fifteenThroughSixteen?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw21-home-unicorn-learn-more {
            font-size: 12px;
          }

          ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
            &.t22-home-membership {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: block;

              > div {
                padding: 0;
              }

              h1 {
                padding: 1rem 2rem;
                font-size: 38px;
                font-family: 'Inter';
              }
            }

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: block;

              > div {
                background-color: #f2f2f2;
                padding: 1rem;
                margin: 1rem 2rem;
              }

              p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: center;
              }

              a span {
                font-family: "Inter";
                font-size: 20px;
                font-weight: normal;
                margin: 0;
              }
            }
          }

          ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: none;
            }

            &.t22-home-membership > div {
              padding: 0;
              max-width: 60rem;

              a span {
                font-family: "Inter";
                font-size: 14px;
                font-weight: 700;
              }
              span {
                p {
                  width: 115.19px;
                  margin: 1rem 11.12px;

                }
              }
              span:nth-of-type(1) {
                p {
                  margin-right: 2rem;
                }
              }
            }

            &.t22-home-membership > div div:nth-of-type(13) li {

              p {
                font-size: 0.75rem !important;
              }
            }

            &.t22-home-membership {
              position: relative;
              display: block;

              > div > p {
                font-family: "Inter";
                margin: 1rem 10rem;
                font-size: 20px;
                width: 611px;
              }

              ${mq.lg} {
                picture {
                  width: 12rem;
                }
              }
              ${mq.xl}, ${mq["2xl"]} {
                picture {
                  width: 15rem;
                }
              }

              picture {
                display: block;
                position: absolute;
                right: 0;
                top: 0;
              }

              picture img {
                height: 100%;
                width: 100%;
              }

              margin-bottom: 5rem;

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
                border-opacity: 0.5;
                padding: 0 1rem 0 2rem;
              }

              div > a:nth-of-type(4) {
                margin: 1rem 0.4rem 0rem 30%;
              }

              div > a:nth-of-type(1) {
                margin: 1rem 2rem 0rem 1rem;
              }

              div > a {
                display: block;
                border-radius: 0;
                border-style: solid;
                border-width: 0.125rem;
                border-color: #000000;
                background-color: transparent;
                padding: 0.5rem;
                margin: 1rem 0.4rem 0 1rem;
                float: right;
                width: 12%;
              }

              h1:first-of-type {
                margin-top: 4rem !important;
              }

              h1 {
                font-family: "Inter";
                font-size: 48px;
                margin: 0;
              }

              li h4 {
                display: block;
                font-size: 1rem;
                font-family: "Inter";
                text-align: left;
                margin: 1rem;
                float: right;
                width: 8%;
              }

              li p:nth-of-type(1), li p:nth-of-type(3){
                background-color: #f5f5f5;
              }

              li p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0 0.25rem 0 0.25rem;
                float: left;
                padding: 0.25rem 0 0 1rem;
                height: 2.5rem;
                width: 14%;
              }

              a span {
                font-family: "Inter";
                font-size: 0.9rem;
                font-weight: bold;
                margin: 0;
              }

              span p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                float: right;
                width: 14%;
              }

              li h6 {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0.5rem;
                float: left;
                width: 38%;
              }
            }
          }

          &.t22-home-subscribe {

            ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
              color: #ffffff;
              background-color: #000000;

              picture {
                display: none;
              }
            }

            ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              color: #000000;
              background-color: #ffe400;

              picture {
                display: block;
              }
            }

            position: relative;

            > div form div input:nth-of-type(1) {
              font-family: "Inter";
              margin: 1rem 0;
            }
            > div form div input:nth-of-type(2) {
              font-family: "Inter";
              background-color: #F7621D;
              color: white;
              margin: 1rem 0;
            }

            picture:nth-of-type(1) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }

            picture:nth-of-type(2) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
            }

            img {
              height: 100%;
            }

            h2 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1.5rem;
            }
          }

          &.t22-home-footer {

            h1 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1rem;
              margin: 0;
            }
          }

          ${mq["2xs"]}, ${mq.xs} {
            &.t22-home-location {
              h1 {
                font-size: 38px;
                width: 80%;
                margin: 0 auto;
              }    
            }            
          }

          ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
            &.t22-home-location {
              h1 {
                font-size: 48px;
                width: 100%;
                margin: 0;
              }      
            }          
          }

          &.t22-home-location {

            ${mq["2xs"]}, ${mq.xs}, ${mq.sm}, ${mq.lg} {
              picture {
                position: absolute;
                display: block;
                top: 3rem;
                left: -3rem;
              }

              picture img {
                transform: rotate(70deg);
                height: 20rem;
                width: 25rem;
              }

              > div {
                padding: 12rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {
            position: relative;
            overflow-y: hidden;
            ${mq.xl}, ${mq["2xl"]} {
              picture {
                width: 40rem;
                height: 30rem;
                position: absolute;
                display: block;
                top: initial;
                left: 0;
                bottom: 0;
              }

              picture img {
                transform: none;
                height: 100%;
                width: 100%;
              }

              > div {
                padding: 4rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {

            h1 {
              font-family: "Inter";
              line-height: 100%;
            }

            h2 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1em;
              margin: 0;
            }

            p {
              font-family: "Inter";
              font-size: 20px;
              font-weight: normal
            }
          }

          ${mq["2xs"]}, ${mq.xs} {

            &.t22-home-experience > div {
              padding: 1rem 0;
            }

            &.t22-home-experience {

              picture {
                margin-top: 2rem;
                display: block;
                position: relative;
                height: 10rem;
                width: 100%;
              }
              img {
                transform: rotate(180deg) scaleX(-1);
                position: absolute;
                height: 10rem;
                width: 12rem;
                right: -1rem;
              }

              h2 {
                font-family: "Inter";
                // font-size: 38pt;
                margin: 0 2rem;
              }

              // div hr {
              //   display: none;
              // }

              li {
                align-items: stretch !important;
                h4 {
                  text-align: left;
                  margin: 0;
                }
                span {
                  font-family: "Inter";
                  font-size: 1rem;
                  display: block;
                }
                p {
                  display: block;
                  font-family: "Inter";
                  font-size: 1rem;
                  font-weight: normal;
                  text-align: left;
                  margin-top: 0;
                }
              }

              ul {
                padding-inline-start: 0;
                padding: 0 4rem;
              }
            }
          }

          ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
            &.t22-home-experience > div {
              background-color: white;
              width: 100%
              padding: 4rem 0;
              margin: 0 auto;
              margin-top: 30px;
            }

            &.t22-home-experience {
              picture {
                display: none;
              }

              h2 {
                font-family: "inter";
                font-size: 48px;
                margin: 0;
              }

              h5 {
                font-family: "Inter";
                font-size: 1.25rem;
                font-weight: normal;
              }

              ul {
                list-style-type: none;
                margin: 1rem 0 0 0;
                padding: 0;
                overflow: hidden;
              }

              li {
                display: block;
                float: left;
                width: 100%;
              }

              li h4 {
                font-family: "Inter";
                display: block;
                text-align: left;
                float: left;
                padding: 0 1rem 0 0;
                margin: 0;
                width: 40%;
                // background-color: gray;
              }

              div {
                hr {
                  margin: 0.5rem 0;
                }
              }

              div:nth-of-type(5) {
                hr {
                  display: none;
                }
              }

              li p {
                display: block;
                font-family: "Inter";
                font-size: 100%;
                font-weight: normal;
                text-align: left;
                float: left;
                width: 60%;
              }
            }
          }

          &.t22-home-footer {
            background-color: black;
            height: 318 px;
          }

        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                        height: 35.5rem;
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const blocks4 = sixteenThroughSeventeen?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw21-home-unicorn-learn-more {
            font-size: 12px;
          }

          ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
            &.t22-home-membership {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: block;

              > div {
                padding: 0;
              }
            }

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: block;

              > div {
                background-color: #f2f2f2;
                padding: 1rem;
                margin: 1rem 2rem;
              }

              p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: center;
              }

              a span {
                font-family: "Inter";
                font-size: 20px;
                font-weight: normal;
                margin: 0;
              }
            }
          }

          ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: none;
            }

            &.t22-home-membership > div {
              padding: 0;
              max-width: 60rem;

              a span {
                font-family: "Inter";
                font-size: 14px;
                font-weight: 700;
              }
              span {
                p {
                  width: 115.19px;
                  margin: 1rem 11.12px;
                  
                }
              }
              span:nth-of-type(1) {
                p {
                  margin-right: 2rem;
                }
              }
            }
          }

          &.t22-home-footer {

            h1 {
              display: inline-block;
              font-family: "Inter";
              font-size: 3rem;
              line-height: 1.3;
            }
            
            img {
              margin:10px;
              margin-top: 34px;
            }

            p {
              font-family: "Inter";
              font-size: 1rem;
              margin: 0;
            }
          }
      `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                        height: 35.5rem;
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                      // padding: 8rem 0rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const blocks3 = tenThroughfifteen?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw21-home-unicorn-learn-more {
            font-size: 12px;
          }

          ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
            &.t22-home-membership {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: block;

              > div {
                padding: 0;
              }

              ${mq["2xs"]}, ${mq.xs} {
                h1 {
                  padding: 1rem 2rem;
                  font-size: 38px;
                  font-family: 'Inter';
                }
              }
              ${mq.sm} {
                h1 {
                  padding: 1rem 2rem;
                  font-size: 48px;
                  font-family: 'Inter';
                }
              }
            }

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: block;

              > div {
                background-color: #f2f2f2;
                padding: 1rem;
                // margin: 1rem 2rem;
                margin: auto;

                > a {
                  // apply buttons hidden
                  //display: none !important;
                  width: 90%;
                  background-color: #333333;
                  color: #ffffff;
                  font-family: "Inter";
                  font-size: 20px;
                }
              }

              p a {
                text-decoration: underline;
              }

              p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: center;
              }

              p code {
                font-family: "Inter";
              }

              a span {
                font-family: "Inter";
                font-size: 20px;
                font-weight: normal;
                margin: 0;
              }

            }

          &.t22-home-membership-patron-mobile  {
            span:nth-of-type(1) {
              font-family: "Inter";

              p:nth-of-type(1) {
                font-family: "Inter";

                a:nth-of-type(1) {
                  font-family: "Inter";
                  padding: 1rem 1.5rem;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                  margin: 1rem auto;
                  width: 90%;
                  background-color: #333333;
                  color: #ffffff;
                  font-size: 20px;
                  font-weight: normal;
                  // remove apply now buttons
                  //display: none;
                  display: inline-block;
                }
              }
            }
          }
      }


          ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: none;
            }

            &.t22-home-membership > div {
              padding: 0;
              max-width: 60rem;

              a span {
                font-family: "Inter";
                font-size: 14px;
                font-weight: 700;
              }
              span {
                p {
                  width: 110px;
                  margin: 1rem 17px;
                  a: nth-of-type(2) {
                  }
                }
              }

              span:nth-of-type(2) {
                  a: nth-of-type(2) {
                    margin-left: -20px
                  }
              }

              span:nth-of-type(3) {
                  a: nth-of-type(2) {
                    margin-left: -13px
                  }
              }

              span:nth-of-type(2), span:nth-of-type(3), span:nth-of-type(4), span:nth-of-type(5) {
                a {
                  text-decoration: underline;
                }
              }

              span:nth-of-type(4) {
                  a: nth-of-type(2) {
                    margin-left: -8px
                  }
              }

              span:nth-of-type(1) {
                p {
                  display: block;
                  border-radius: 0;
                  border-style: solid;
                  border-width: 0.125rem;
                  border-color: #000000;
                  background-color: transparent;
                  padding: 0.5rem;
                  margin: 1rem 0.4rem 0 1rem;
                  float: right;
                  width: 12%;
                  margin-right: 2rem;
                  font-family: "Inter";
                  font-size: 14px;
                  font-weight: 700;
                  text-align: center;
                  height: 38px;
                  
                  code {
                    font-family: "Inter";
                    font-size: 14px;
                    font-weight: 700;
                  }
                }
              }
            }

            &.t22-home-membership > div div:nth-of-type(13) li {

              p {
                font-size: 0.75rem !important;
              }
            }

            &.t22-home-membership {
              position: relative;
              display: block;

              > div > p {
                font-family: "Inter";
                margin: 1rem 10rem;
                font-size: 20px;
                width: 611px;
              }

              ${mq.lg} {
                picture {
                  width: 12rem;
                }
              }
              ${mq.xl}, ${mq["2xl"]} {
                picture {
                  width: 15rem;
                }
              }

              picture {
                display: block;
                position: absolute;
                right: 0;
                top: 0;
              }

              picture img {
                height: 100%;
                width: 100%;
              }

              margin-bottom: 5rem;

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
                border-opacity: 0.5;
                padding: 0 1rem 0 2rem;
              }

              div > a:nth-of-type(3) {
                margin: 1rem 0.4rem 0rem 30%;
              }

              div > a {
                display: block;
                // hide apply now buttons
                // display: none;
                border-radius: 0;
                border-style: solid;
                border-width: 0.125rem;
                border-color: #000000;
                background-color: transparent;
                padding: 0.5rem;
                margin: 1rem 0.4rem 0 1rem;
                float: right;
                width: 12%;
              }
              //hide apply now buttons
              //div > span:first-of-type {
              //  display: none;
              //}

              div > a:hover {
                background-color: #333333;
                color: #ffffff;
              }

              div > span:first-of-type:hover {

                p {
                  background-color: #333333;
                  color: #ffffff;
                }
              }

              h1:first-of-type {
                margin-top: 4rem !important;
              }

              h1 {
                font-family: "Inter";
                font-size: 48px;
                margin: 0;
                line-height: 100%;
              }

              li h4 {
                display: block;
                font-size: 1rem;
                font-family: "Inter";
                text-align: left;
                margin: 1rem;
                float: right;
                width: 8%;
              }

              li p:nth-of-type(1), li p:nth-of-type(3){
                background-color: #f5f5f5;
              }

              li p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0 0.25rem 0 0.25rem;
                float: left;
                padding: 0.25rem 0 0 1rem;
                height: 2.5rem;
                width: 14%;
              }

              a span {
                font-family: "Inter";
                font-size: 0.9rem;
                font-weight: bold;
                margin: 0;
              }

              span p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                float: right;
                width: 14%;
              }

              li h6 {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0.5rem;
                float: left;
                width: 38%;
              }
            }
          }

          &.t22-home-subscribe {

            ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
              color: #ffffff;
              background-color: #000000;

              picture {
                display: none;
              }
            }

            ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              color: #000000;
              background-color: #ffe400;
              overflow-y: hidden;
              picture {
                display: block;
              }
            }

            position: relative;

            > div form div input:nth-of-type(1) {
              font-family: "Inter";
              margin: 1rem 0;
            }
            > div form div input:nth-of-type(2) {
              font-family: "Inter";
              background-color: #F7621D;
              color: white;
              margin: 1rem 0;
            }

            picture:nth-of-type(1) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }

            picture:nth-of-type(2) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
            }

            img {
              height: 100%;
            }

            h2 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1.5rem;
            }
          }

          &.t22-home-footer {

            h1 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1rem;
              margin: 0;
            }
          }

          &.t22-home-location {
            ${mq["2xs"]}, ${mq.xs}, ${mq.sm}, ${mq.lg} {
              picture {
                position: absolute;
                display: block;
                top: 3rem;
                left: -3rem;
              }
              
              h1 {
                font-size: 36px;
              }

              picture img {
                transform: rotate(70deg);
                height: 20rem;
                width: 25rem;
              }

              > div {
                padding: 12rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {
            position: relative;
            ${mq.xl}, ${mq["2xl"]} {
              picture {
                width: 40rem;
                height: 30rem;
                position: absolute;
                display: block;
                top: initial;
                left: 0;
                bottom: 0;
              }

              picture img {
                transform: none;
                height: 100%;
                width: 100%;
              }

              > div {
                padding: 4rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {

            h1 {
              font-family: "Inter";
              font-size: 48px;
              margin: 0;
            }

            h2 {
              font-family: "Inter";
              font-size: 48px;
              margin: 0;
            }

            p {
              font-family: "Inter";
              font-size: 20px;
              font-weight: normal
            }
          }
          
          ${mq["2xs"]}, ${mq.xs} {

            &.t22-home-experience > div {
              padding: 1rem 0;
            }

            &.t22-home-experience {

              picture {
                margin-top: 2rem;
                display: block;
                position: relative;
                height: 10rem;
                width: 100%;
              }
              img {
                transform: rotate(180deg) scaleX(-1);
                position: absolute;
                height: 10rem;
                width: 12rem;
                right: -1rem;
              }

              h2 {
                font-family: "Inter";
                font-size: 38px;
                margin: 0 2rem;
              }

              li {
                align-items: stretch !important;
                h4 {
                  text-align: left;
                  margin: 0;
                }
                span {
                  font-family: "Inter";
                  font-size: 1rem;
                  display: block;
                }
                p {
                  display: block;
                  font-family: "Inter";
                  font-size: 1rem;
                  font-weight: normal;
                  text-align: left;
                  margin-top: 0;
                }
              }

              ul {
                padding-inline-start: 0;
                padding: 0 4rem;
              }
            }
          }

          ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
            &.t22-home-experience > div {
              background-color: white;
              width: 100%
              padding: 4rem 0;
              margin: 0 auto;
              margin-top: 30px;
            }
  
            &.t22-home-experience {
              picture {
                display: none;
              }

              h2 {
                font-family: "inter";
                font-size: 48px;
                margin: 0;
                line-height: 100%;
              }
  
              h5 {
                font-family: "Inter";
                font-size: 1.25rem;
                font-weight: normal;
              }
  
              ul {
                list-style-type: none;
                margin: 1rem 0 0 0;
                padding: 0;
                overflow: hidden;
              }
              
              li {
                display: block;
                float: left;
                width: 100%;
              }
  
              li h4 {
                font-family: "Inter";
                display: block;
                text-align: left;
                float: left;
                padding: 0 1rem 0 0;
                margin: 0;
                width: 40%;
                // background-color: gray;
              }
              
              div { 
                hr {
                  margin: 0.5rem 0;
                }
              }

              div:nth-of-type(5) { 
                hr {
                  display: none;
                }
              }
  
              li p {
                display: block;
                font-family: "Inter";
                font-size: 100%;
                font-weight: normal;
                text-align: left;
                float: left;
                width: 60%;
              }
            }
          }

          &.t22-home-footer {
            background-color: black;
            height: 318 px;
          }
          
        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
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
                        height: 35.5rem;
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });

  const ribbon4 = ninteen?.map((block) => {
    return (
      <div
        key={block?.fields?.uuid}
        className={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        id={`${block?.fields?.uuid
          .replace(/\s+/g, "-")
          .replace("#", "hashtag")}`}
        css={css`
          width: 100vw;
          overflow-x: hidden;
          background-color: ${block?.fields?.backgroundColor};
          color: ${block?.fields?.fontColor};

          a {
            color: ${block?.fields?.linkColor};
          }

          p {
            margin-bottom: 1rem;
          }

          &.tw21-home-unicorn-learn-more {
            font-size: 12px;
          }

          ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
            &.t22-home-membership {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: block;

              > div {
                padding: 0;
              }

              h1 {
                padding: 1rem 2rem;
              }
            }

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: block;

              > div {
                background-color: #f2f2f2;
                padding: 1rem;
                margin: 1rem 2rem;
              }

              p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: center;
              }

              a span {
                font-family: "Inter";
                font-size: 20px;
                font-weight: normal;
                margin: 0;
              }
            }
          }

          ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {

            &.t22-home-membership-vanguard-mobile, &.t22-home-membership-standard-mobile, &.t22-home-membership-donor-mobile, &.t22-home-membership-patron-mobile {
              display: none;
            }

            &.t22-home-membership-mobile {
              display: none;
            }

            &.t22-home-membership > div {
              padding: 0;
              max-width: 60rem;

              a span {
                font-family: "Inter";
                font-size: 14px;
                font-weight: 700;
              }
              span {
                p {
                  width: 115.19px;
                  margin: 1rem 11.12px;
                  
                }
              }
              span:nth-of-type(1) {
                p {
                  margin-right: 2rem;
                }
              }
            }

            &.t22-home-membership > div div:nth-of-type(13) li {

              p {
                font-size: 0.75rem !important;
              }
            }

            &.t22-home-membership {
              position: relative;
              display: block;

              > div > p {
                font-family: "Inter";
                margin: 1rem 10rem;
                font-size: 20px;
                width: 611px;
              }

              ${mq.lg} {
                picture {
                  width: 12rem;
                }
              }
              ${mq.xl}, ${mq["2xl"]} {
                picture {
                  width: 15rem;
                }
              }

              picture {
                display: block;
                position: absolute;
                right: 0;
                top: 0;
              }

              picture img {
                height: 100%;
                width: 100%;
              }

              margin-bottom: 5rem;

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
                border-opacity: 0.5;
                padding: 0 1rem 0 2rem;
              }

              div > a:nth-of-type(4) {
                margin: 1rem 0.4rem 0rem 30%;
              }

              div > a:nth-of-type(1) {
                margin: 1rem 2rem 0rem 1rem;
              }

              div > a {
                display: block;
                border-radius: 0;
                border-style: solid;
                border-width: 0.125rem;
                border-color: #000000;
                background-color: transparent;
                padding: 0.5rem;
                margin: 1rem 0.4rem 0 1rem;
                float: right;
                width: 12%;
              }

              h1:first-of-type {
                margin-top: 4rem !important;
              }

              h1 {
                font-family: "Inter";
                font-size: 48px;
                margin: 0;
              }

              li h4 {
                display: block;
                font-size: 1rem;
                font-family: "Inter";
                text-align: left;
                margin: 1rem;
                float: right;
                width: 8%;
              }

              li p:nth-of-type(1), li p:nth-of-type(3){
                background-color: #f5f5f5;
              }

              li p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0 0.25rem 0 0.25rem;
                float: left;
                padding: 0.25rem 0 0 1rem;
                height: 2.5rem;
                width: 14%;
              }

              a span {
                font-family: "Inter";
                font-size: 0.9rem;
                font-weight: bold;
                margin: 0;
              }

              span p {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                float: right;
                width: 14%;
              }

              li h6 {
                display: block;
                font-family: "Inter";
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                margin: 0.5rem;
                float: left;
                width: 38%;
              }
            }
          }

          &.t22-home-subscribe {

            ${mq["2xs"]}, ${mq.xs}, ${mq.sm} {
              color: #ffffff;
              background-color: #000000;

              picture {
                display: none;
              }
            }

            ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
              color: #000000;
              background-color: #ffe400;

              picture {
                display: block;
              }
            }

            position: relative;

            > div form div input:nth-of-type(1) {
              font-family: "Inter";
              margin: 1rem 0;
            }
            > div form div input:nth-of-type(2) {
              font-family: "Inter";
              background-color: #F7621D;
              color: white;
              margin: 1rem 0;
            }

            picture:nth-of-type(1) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }

            picture:nth-of-type(2) {
              padding: 0;
              margin: 0;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
            }

            img {
              height: 100%;
            }

            h2 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1.5rem;
            }
          }

          &.t22-home-footer {

            h1 {
              font-family: "Inter";
              font-size: 2.25rem;
              line-height: 1.3;
            }

            p {
              font-family: "Inter";
              font-size: 1rem;
              margin: 0;
            }
          }

          &.t22-home-location {
            ${mq["2xs"]}, ${mq.xs}, ${mq.sm}, ${mq.lg} {
              picture {
                position: absolute;
                display: block;
                top: 3rem;
                left: -3rem;
              }
              
              h1 {
                font-size: 36px;
              }

              picture img {
                transform: rotate(70deg);
                height: 20rem;
                width: 25rem;
              }

              > div {
                padding: 12rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {
            position: relative;
            ${mq.xl}, ${mq["2xl"]} {
              picture {
                width: 40rem;
                height: 30rem;
                position: absolute;
                display: block;
                top: initial;
                left: 0;
                bottom: 0;
              }

              picture img {
                transform: none;
                height: 100%;
                width: 100%;
              }

              > div {
                padding: 4rem 2rem 4rem 2rem;
              }
            }
          }

          &.t22-home-location {

            h1 {
              font-family: "Inter";
              font-size: 48px;
              margin: 0;
            }

            h2 {
              font-family: "Inter";
              font-size: 48px;
              margin: 0;
            }

            p {
              font-family: "Inter";
              font-size: 20px;
              font-weight: normal
            }
          }
          
          ${mq["2xs"]}, ${mq.xs} {

            &.t22-home-experience > div {
              padding: 1rem 0;
            }

            &.t22-home-experience {

              picture {
                margin-top: 2rem;
                display: block;
                position: relative;
                height: 10rem;
                width: 100%;
              }
              img {
                transform: rotate(180deg) scaleX(-1);
                position: absolute;
                height: 10rem;
                width: 12rem;
                right: -1rem;
              }

              h2 {
                font-family: "Inter";
                font-size: 2.25rem;
                margin: 0 2rem;
              }

              // div hr {
              //   display: none;
              // }

              li {
                align-items: stretch !important;
                h4 {
                  text-align: left;
                  margin: 0;
                }
                span {
                  font-family: "Inter";
                  font-size: 1rem;
                  display: block;
                }
                p {
                  display: block;
                  font-family: "Inter";
                  font-size: 1rem;
                  font-weight: normal;
                  text-align: left;
                  margin-top: 0;
                }
              }

              ul {
                padding-inline-start: 0;
                padding: 0 4rem;
              }
            }
          }

          ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
            &.t22-home-experience > div {
              background-color: white;
              width: 100%
              padding: 4rem 0;
              margin: 0 auto;
              margin-top: 30px;
            }
  
            &.t22-home-experience {
              picture {
                display: none;
              }

              h2 {
                font-family: "inter";
                font-size: 48px;
                margin: 0;
              }
  
              h5 {
                font-family: "Inter";
                font-size: 1.25rem;
                font-weight: normal;
              }
  
              ul {
                list-style-type: none;
                margin: 1rem 0 0 0;
                padding: 0;
                overflow: hidden;
              }
              
              li {
                display: block;
                float: left;
                width: 100%;
              }
  
              li h4 {
                font-family: "Inter";
                display: block;
                text-align: left;
                float: left;
                padding: 0 1rem 0 0;
                margin: 0;
                width: 40%;
                // background-color: gray;
              }
              
              div { 
                hr {
                  margin: 0.5rem 0;
                }
              }

              div:nth-of-type(5) { 
                hr {
                  display: none;
                }
              }
  
              li p {
                display: block;
                font-family: "Inter";
                font-size: 100%;
                font-weight: normal;
                text-align: left;
                float: left;
                width: 60%;
              }
            }
          }

          &.t22-home-footer {
            background-color: black;
            height: 318 px;
          }
          
        `}
      >
        {(() => {
          switch (block?.fields?.uuid) {
            case "t22-home-ribbon-1":
            case "t22-home-ribbon-2":
            case "t22-home-ribbon-3":
            case "t22-home-ribbon-4":
            case "t22-home-ribbon-5": {
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

                      ${mq["2xs"]}, ${mq.xs} {
                        height: 20rem;
                      }

                      ${mq.sm} {
                        width: 50%;
                      }

                      ${mq.lg} {
                        height: 460px;
                      }

                      ${mq.xl} {
                        height: 460px;
                      }

                      ${mq["2xl"]} {
                        height: 460px;
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
                  <RichText document={block?.fields?.value} />
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
                      font-family: "Inter";
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
                      font-family: "Inter";
                      font-size: 1.25rem;
                    }
                  `}
                >
                  <RichText document={block?.fields?.value} />
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
                  <RichText document={block?.fields?.value} />
                </div>
              );
            }
          }
        })()}
      </div>
    );
  });
  const applyButton = (
    <div 
    css={css`

      ${mq["2xs"]}, ${mq.xs}, ${mq.ss} {
        display: block;
      }
      ${mq.sm}, ${mq.lg}, ${mq.xl}, ${mq["2xl"]} {
        display: none;
      }

      background-color: #cae31c;
      margin: 0;
      padding-top: 2rem;

      h6 {
        justify-content: center;
        margin: 0;
      }

      a {
        display: block;
        text-align: center;
        height: 3rem;
        width: 10rem;
        border-radius: 0 !important;
        margin: 0 auto;
        font-weight: bold;
        font-size: 1rem;
        font-family: "Inter";
        padding: 1rem;
        background-color: #ffffff;
      }

    `}
    >
      <h6>
        <a className="mobileApply" href="#t22-home-membership-mobile">Apply now</a>
      </h6>
    </div>
  );

  React.useEffect(() => {
    smoothscroll.polyfill();

    const applyScroll = document.querySelector("h6 > a");
    applyScroll.addEventListener("click", function(){ 
      document.querySelector('.t22-home-membership').scrollIntoView({ behavior: 'smooth' }); 
      document.querySelector('.t22-home-membership-mobile').scrollIntoView({ behavior: 'smooth' });
    });
    
    const applyScrollMobile = document.querySelector("a.mobileApply");
    applyScrollMobile.addEventListener("click", function(){ document.querySelector('.t22-home-membership-mobile').scrollIntoView({ behavior: 'smooth' }); });
    
  },);

  const title = fullPage?.metaTitle ? fullPage?.metaTitle : "";
  return (
    <Container>
      <Head>
        <meta property="og:title" content={`${fullPage?.metaTitle}`} />
        <meta property="title" content={`${fullPage?.metaTitle}`} />
        <title>{title}</title>
        <meta property="og:description" content={`${fullPage?.metaDescription}`} />
        <meta property="description" content={`${fullPage?.metaDescription}`} />
        <meta property="og:url" content={`${fullPage?.metaUrl}`} />
        <meta property="og:image" content={`${fullPage?.metaImageUrl}`} />
        <meta name="keywords" content={`${fullPage?.metaTags}`} />
        <meta name="keywords" content={`${fullPage?.metaTags}`} />
      </Head>
      <Navbar selected="home" />
      {headerBlock}
      {applyButton}
      {introBlock}
      <div style={{ textAlign: "center" }}>{blocks2}</div>
      {blocks3}
      {locationBlock}
      <div className={styles.lastRibbon}>
        <div className={styles.locatinRibbon}>{ribbon4}</div>
        <div className={styles.mapRibbon}>
          <MapContainer />
        </div>
      </div>
      {blocks4}
      <Social />
      <Footer />
    </Container>
  );
};

export default ContentPage;
