/** @jsx jsx */
import { jsx, Themed, Grid, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

import { useArtworks } from "../hooks/useArtworks";
import Layout from "../components/Layout";
import { ArtworkSvg as Artwork } from "../components/Artwork";

export default function Index({ data }) {
  const artworks = useArtworks();
  return (
    <Layout>
      <Grid>
        {artworks.map(({ date, rows, columns, cells, fields }) => (
          <div>
            <Themed.h2>
              <Link variant="links.heading" as={GatsbyLink} to={fields.slug}>
                {date}
              </Link>
            </Themed.h2>
            <Link variant="links.heading" as={GatsbyLink} to={fields.slug}>
              <Artwork rows={rows} columns={columns} cells={cells} />
            </Link>
          </div>
        ))}
      </Grid>
    </Layout>
  );
}
