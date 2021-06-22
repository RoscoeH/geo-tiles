import React from "react";
import { graphql } from "gatsby";

// import Layout from "../components/layout"

export default function ArtworkTemplate({
  data: {
    artworksJson: { rows, columns, cells },
  },
}) {
  console.log(cells);
  return (
    // <Layout>
    <div>
      <p>{columns}</p>
      <p>{rows}</p>
      <ul>
        {cells.map((cell) => (
          <li>{`${cell.shape} - ${cell.color}`}</li>
        ))}
      </ul>
    </div>
    // </Layout>
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
        rotate
      }
    }
  }
`;
