import React from "react";
import { Themed } from "theme-ui";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";

import Layout from "../components/Layout";
import { ArtworkSvg as Artwork } from "../components/Artwork";

export default function ArtworkTemplate({
  data: {
    artworksJson: { date, rows, columns, cells },
  },
}) {
  return (
    <Layout>
      <Helmet>
        <title>{date}</title>
      </Helmet>
      <Themed.h2>{date}</Themed.h2>
      <Artwork rows={rows} columns={columns} cells={cells} />
    </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    artworksJson(fields: { slug: { eq: $slug } }) {
      date(formatString: "MMMM DD, YYYY")
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
