import { ContentfulClientApi, createClient } from "contentful";

// node/server only

const getClient = (
  env: NodeJS.ProcessEnv["NODE_ENV"] = "development"
): ContentfulClientApi =>
  createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    ...(env === "production"
      ? {
          accessToken: process.env.CONTENTFUL_DRAFT_ACCESS_TOKEN,
          host: "preview.contentful.com",
        }
      : {
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          host: "cdn.contentful.com",
        }),
  });

export default getClient;
