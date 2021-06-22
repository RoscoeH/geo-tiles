import React from "react";
import { graphql } from "gatsby";

// import Layout from "../components/layout"

export default function ArtworkTemplate({
  data: {
    artworksJson: { rows, columns },
  },
}) {
  return (
    // <Layout>
    <div>
      <p>{columns}</p>
      <p>{rows}</p>
    </div>
    // </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    artworksJson(fields: { slug: { eq: $slug } }) {
      rows
      columns
    }
  }
`;
