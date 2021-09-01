import React from "react";
import { ThemeProvider } from "emotion-theming";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { HomeProvider } from "../../components/Ted2022/context";
import Speakers from "../../components/Ted2022/speakers";
import { theme } from "../../components/Ted2022/theme";
import getClient from "../../lib/contentful-client";
import { Page } from "../../lib/types";

const speakers = ({ page }) => {
  return (
    <div>
      <Head>
        <title>TED2022</title>
        <link rel="icon" href="/favicon.ico?v=2"/>
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <ThemeProvider theme={theme}>
        <HomeProvider page={page}>
          <Speakers />
        </HomeProvider>
      </ThemeProvider>
    </div>
  );
};


export default speakers;
