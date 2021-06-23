import { graphql, useStaticQuery } from "gatsby";

export function useArtworks() {
  const query = useStaticQuery(graphql`
    query IndexQuery {
      allArtworksJson(sort: { order: DESC, fields: date }) {
        edges {
          node {
            fields {
              slug
            }
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
      }
    }
  `);
  return query.allArtworksJson.edges.map(({ node }) => node);
}
