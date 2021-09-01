import {Page} from "./types";
import safeJsonStringify from 'safe-json-stringify';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export const fetchEntries = async(id, event) => {
  let uuid = "";

  if (id === "home") {
    uuid = `${event}/home`;
  } else if (id === `program`) {
    uuid = `${event}/program`;
  } else if (id === `partners`) {
    uuid = `${event}/partners`;
  } else if (id === `speakers`) {
    uuid = `${event}/speakers`;
  }

  const entries: Page = await client.getEntries({
    content_type: "page",
    "fields.uuid": uuid,
    include: 3})
    .then(({ items }) => items[0]);

  if (entries) {
    const stringifiedData = safeJsonStringify(entries);
    const pageItems = JSON.parse(stringifiedData);
    return entries
  } 
}

export default { fetchEntries }