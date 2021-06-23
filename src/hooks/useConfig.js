import { graphql, useStaticQuery } from "gatsby";

export function useConfig() {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          description
          url
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
