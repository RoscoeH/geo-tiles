/** @jsx jsx */
import {
  jsx,
  Themed,
  Box,
  Grid,
  Link,
  IconButton,
  useColorMode,
} from "theme-ui";
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

export default function Index() {
  const [colorMode, setColorMode] = useColorMode();
  const [listMode, setListMode] = useState(LIST_MODE.list);
  const artworks = useArtworks();

  function handleViewModeClick() {
    setListMode(listMode === LIST_MODE.grid ? LIST_MODE.list : LIST_MODE.grid);
  }

  function handleColorModeClick() {
    setColorMode(isLightMode ? "dark" : "default");
  }

  const isGrid = listMode === LIST_MODE.grid;
  const isLightMode = colorMode === "default";

  return (
    <Layout>
      <Box
        sx={{
          textAlign: "right",
          "& > *:not(:last-child)": {
            mr: 2,
          },
        }}
      >
        <IconButton onClick={handleColorModeClick}>
          <Icon icon={isLightMode ? "darkMode" : "lightMode"} />
        </IconButton>
        <IconButton onClick={handleViewModeClick}>
          <Icon icon={isGrid ? "list" : "grid"} />
        </IconButton>
      </Box>
      <Grid columns={isGrid ? [2, null, null, 3, 4] : 1} gap={isGrid ? 3 : 4}>
        {artworks.map(({ date, rows, columns, cells, fields }, index) => (
          <Box key={index}>
            {!isGrid && (
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
