import React from "react";
import { graphql } from "gatsby";

import { ArtworkSvg as Artwork } from "../components/Artwork";

export default function ArtworkTemplate({
  data: {
    artworksJson: { rows, columns, cells },
  },
}) {
  return (
    <div>
      <p>{columns}</p>
      <p>{rows}</p>
      <Artwork rows={rows} columns={columns} cells={cells} />
    </div>
  );
}
export const query = graphql`
  query($slug: String!) {
    artworksJson(fields: { slug: { eq: $slug } }) {
      rows
      columns
      cells {
        shape
        color
        color2
        rotate
      }
    }
  }
`;
