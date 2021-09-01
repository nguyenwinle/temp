/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

import KeyValueList from "../../components/KeyValueList";
import NewsletterSignup from "../../components/NewsletterSignup";
import Text from "../../components/Text";
import { Any } from "../../lib/types";

import { styled } from "./theme";

const Strike: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  ...props
}) => (
  <span
    {...props}
    css={css`
      text-decoration: line-through;
    `}
  >
    {children}
  </span>
);

const ButtonLink = styled.a`
  padding: 1rem 1.5rem;
  text-decoration: none;
  display: inline-block;
  margin: 1rem auto;
  border-radius: 4px;
`;

const RichText: React.FC<{
  document: Document;
  options?: Options;
}> = ({ document, options = {} }) => {
  return (
    <>
      {documentToReactComponents(document, {
        renderMark: {
          ...options.renderMark,
          [MARKS.BOLD]: (children) => <Text variant="bold">{children}</Text>,
        },
        renderNode: {
          [INLINES.EMBEDDED_ENTRY]: (node) => {
            const test = node.data.target as Entry<Record<string, Any>>;
            switch (test.sys.contentType.sys.id) {
              case "strikeText": {
                const entry = node.data.target as Entry<{
                  value: Document;
                  uuid: string;
                }>;
                return (
                  <RichText
                    document={entry.fields.value}
                    options={{
                      renderNode: {
                        [BLOCKS.PARAGRAPH]: (_, children) => (
                          <Strike className={entry.fields.uuid}>
                            {children}
                          </Strike>
                        ),
                      },
                    }}
                  />
                );
              }

              case "coloredText": {
                const {
                  fields: { text, color },
                } = node.data.target as Entry<{
                  text: Document;
                  color: string;
                }>;
                return (
                  <span
                    css={css`
                      color: ${color};
                    `}
                  >
                    <RichText
                      document={text}
                      options={{
                        renderNode: {
                          [BLOCKS.PARAGRAPH]: (_node, children) => {
                            return <span>{children}</span>;
                          },
                        },
                      }}
                    />
                  </span>
                );
              }

              default: {
                console.error(
                  `Unable to render inline embedded entry: ${test.sys.contentType.sys.id}`
                );
                return null;
              }
            }
          },

          [BLOCKS.HEADING_2]: (_, children) => {
            return (
              <Text
                css={css`
                  margin-bottom: 2rem;
                `}
                variant="heading2"
              >
                {children}
              </Text>
            );
          },

          [BLOCKS.HEADING_3]: (_, children) => {
            return <Text variant="heading3">{children}</Text>;
          },

          [BLOCKS.HEADING_4]: (_, children) => {
            return <Text variant="heading4">{children}</Text>;
          },

          [BLOCKS.PARAGRAPH]: (_, children) => {
            return <Text as="p">{children}</Text>;
          },

          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const entry = node.data.target as Entry<Record<string, Any>>;
            switch (entry.sys.contentType?.sys.id) {
              case "keyValueList": {
                const { uuid, rows } = entry.fields as {
                  uuid: string;
                  rows: Entry<{ uuid: string; text: Document }>[];
                };
                return <KeyValueList rows={rows} id={uuid} />;
              }

              case "unicornText": {
                const {
                  fields: { text, uuid },
                } = node.data.target as Entry<{
                  text: Document;
                  uuid: string;
                }>;
                const options = ((): Options => {
                  switch (uuid) {
                    case "tw20-home-unicorn-learn-more": {
                      return {
                        renderNode: {
                          [BLOCKS.PARAGRAPH]: (_, children) => (
                            <Text
                              css={css`
                                display: block;
                              `}
                              variant="tiny"
                            >
                              {children}
                            </Text>
                          ),
                        },
                      };
                    }
                  }
                })();
                return (
                  <span className={uuid}>
                    <RichText document={text} options={options} />
                  </span>
                );
              }

              case "coloredText": {
                const {
                  fields: { text, color },
                } = node.data.target as Entry<{
                  text: Document;
                  color: string;
                }>;
                return (
                  <div
                    css={css`
                      color: ${color};
                    `}
                  >
                    <RichText
                      document={text}
                      options={{
                        renderNode: {
                          [BLOCKS.PARAGRAPH]: (_node, children) => {
                            return <span>{children}</span>;
                          },
                        },
                      }}
                    />
                  </div>
                );
              }

              case "button": {
                const {
                  text,
                  url,
                  backgroundColor,
                  fontColor,
                } = entry.fields as {
                  url: string;
                  text: string;
                  backgroundColor: string;
                  fontColor: string;
                };
                return (
                  <ButtonLink
                    css={css`
                      background-color: ${backgroundColor};
                      color: ${fontColor};
                    `}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Text variant="button">{text || url}</Text>
                  </ButtonLink>
                );
              }

              case "newsletterSignup": {
                const { url } = entry.fields as { url: string };
                return <NewsletterSignup url={url} />;
              }

              default: {
                console.error(
                  `Unable to render embedded entry: ${entry.sys.contentType?.sys.id}`
                );
                return null;
              }
            }
          },

          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const img = node.data.target as Asset;
            return (
              <picture>
                <source
                  srcSet={`${img.fields?.file.url}?fm=webp`}
                  type="image/webp"
                />
                <img
                  src={`${img.fields?.file.url}?fm=jpg&fl=progressive`}
                  alt={img.fields?.title}
                />
              </picture>
            );
          },
          ...options.renderNode,
        },
        ...(options.renderText ? { renderText: options.renderText } : {}),
      })}
    </>
  );
};

export default RichText;

export * from "@contentful/rich-text-types";
