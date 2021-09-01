import { Document as CtflDocument } from "@contentful/rich-text-types";
import { Entry } from "contentful";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type Page = {
  metaTitle: string;
  metaImageUrl: string;
  metaDescription: string;
  metaTags: string;
  metaUrl: string;
  fields: {
    metaTitle: string;
    metaImageUrl: string;
    metaDescription: string;
    metaTags: string;
    metaUrl: string;
    blocks: any;
  };
};

export type Block = {
  uuid: string;
  value: CtflDocument;
  type: string;
  backgroundColor?: string;
  fontColor?: string;
  linkColor?: string;
  json?: Record<string, Any>;
};
