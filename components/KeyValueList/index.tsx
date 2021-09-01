/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";

import RichText from "../../components/tedwomen2020/rich-text";
import { mq } from "../../lib/breakpoints";

type Props = {
  id: string;
  rows: Entry<{ uuid: string; text: Document }>[];
};

const KeyValueList: React.FC<Props> = ({ rows, id }) => {
  return (
    <ul
      className={`key-value-list ${id}`}
      css={css`
        padding-top: 1rem;

        hr {
          margin: 1rem 0;
        }

        li {
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: space-between;

          ${mq.lg} {
            padding: 0 2rem;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: left;
          }

          h4 {
            ${mq.lg} {
              width: 50%;
            }
          }

          p {
            ${mq.md} {
              width: 50%;
            }
          }
        }
      `}
    >
      {rows.map((row) => (
        <div key={row.sys.id}>
          <li>
            <RichText document={row.fields.text} />
          </li>
          <hr />
        </div>
      ))}
    </ul>
  );
};

export default KeyValueList;
