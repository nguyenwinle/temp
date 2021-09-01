/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import Text, { VARIANTS } from ".";

export default {
  title: "Components/Text",
  Component: Text,
};

const text = `
In this moment, diversity of ideas is more important than ever. As such, in
collaboration with an incredible group of TEDx organizers, we'll
celebrate and amplify the most interesting, dynamic, multi-dimensional ideas
-- from Lagos, Nigeria, Port of Spain, Trinidad and Tobago, Montreal,
Canada, Colombo, Sri Lanka, and Sydney, Australia. These talks, along with
an array of interactive and participatory sessions, will be shared via
TED's custom digital events space to create an unforgettable day.
`;

export const Variants: React.FC = () => (
  <div>
    {VARIANTS.map((v) => (
      <div key={v}>
        <Text variant={v}>{v}</Text>
      </div>
    ))}
  </div>
);

export const LongText: React.FC = () => {
  return <Text>{text}</Text>;
};

export const Inverted: React.FC = () => (
  <div
    css={css`
      background-color: black;
      color: white;
    `}
  >
    <Text>{text}</Text>
  </div>
);
