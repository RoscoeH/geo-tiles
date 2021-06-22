/** @jsx jsx */
import { jsx, Themed, Link, Box, Grid } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

import { SHAPES } from "../core/const";
import { generateColors } from "../core/utils";
import { useConfig } from "../hooks/useConfig";
import Layout from "../components/Layout";
import { CellSvg as Cell } from "../components/Cell";

export default function About() {
  const { title } = useConfig();
  return (
    <Layout>
      <Themed.p>
        <Link as={GatsbyLink} to="/">
          {title}
        </Link>{" "}
        is an experimental art project. A new random artwork is published daily
        with no input from <Link href="https://roscoe.dev">the creator</Link>.
      </Themed.p>
      <Themed.p>
        Each artwork is consists of a grid of tiles with randomised attributes
        such as the <strong>shape</strong>, <strong>colors</strong> and{" "}
        <strong>rotation</strong>.
      </Themed.p>
      <Themed.p>
        The <em>shape</em> of a tile is chosen from the following list:
      </Themed.p>
      <Grid columns={5} sx={{ maxWidth: 7, m: "0 auto" }}>
        {SHAPES.map((shape) => (
          <Cell shape={shape} color="pink" color2="purple" />
        ))}
      </Grid>
      <Themed.p>
        The colors of a tile are selected from a generated palette of two to
        seven colors. Palettes are generated using algorithm that selects{" "}
        <em>attractive</em> colors.
      </Themed.p>
      <Grid columns={5} sx={{ maxWidth: 7, m: "0 auto" }}>
        {generateColors(10).map((color) => (
          <Box bg={color} sx={{ width: "100%", height: 4, borderRadius: 3 }} />
        ))}
      </Grid>
      <Themed.p>
        Tiles are then rotated in multiples of 90 degrees and pieced together to
        form a complete artwork.
      </Themed.p>
    </Layout>
  );
}
