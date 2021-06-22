import { graphql, useStaticQuery } from "gatsby";

export function useConfig() {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          navigation {
            label
            to
          }
        }
      }
    }
  `);
  return query.site.siteMetadata;
}
