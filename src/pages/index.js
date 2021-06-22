/** @jsx jsx */
import { jsx, Themed, Box, Grid, Link, IconButton } from "theme-ui";
import { useState } from "react";
import { Link as GatsbyLink } from "gatsby";

import { useArtworks } from "../hooks/useArtworks";
import Layout from "../components/Layout";
import { ArtworkSvg as Artwork } from "../components/Artwork";
import Icon from "../components/Icon";

const LIST_MODE = {
  grid: "grid",
  list: "list",
};

export default function Index({ data }) {
  const [listMode, setListMode] = useState(LIST_MODE.list);
  const artworks = useArtworks();

  function handleModeClick() {
    setListMode(listMode === LIST_MODE.grid ? LIST_MODE.list : LIST_MODE.grid);
  }

  return (
    <Layout>
      <Box sx={{ textAlign: "right" }}>
        <IconButton onClick={handleModeClick}>
          <Icon icon={listMode === LIST_MODE.grid ? "list" : "grid"} />
        </IconButton>
      </Box>
      <Grid columns={listMode === LIST_MODE.grid ? [2, null, null, 3, 4] : 1}>
        {artworks.map(({ date, rows, columns, cells, fields }, index) => (
          <Box key={index}>
            {listMode === LIST_MODE.list && (
              <Themed.h2 sx={{ mt: 0 }}>
                <Link variant="links.heading" as={GatsbyLink} to={fields.slug}>
                  {date}
                </Link>
              </Themed.h2>
            )}
            <Link variant="links.heading" as={GatsbyLink} to={fields.slug}>
              <Artwork rows={rows} columns={columns} cells={cells} />
            </Link>
          </Box>
        ))}
      </Grid>
    </Layout>
  );
}
