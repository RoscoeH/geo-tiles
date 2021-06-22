/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

import Navigation from "./Navigation";

export default function Header({ title, links }) {
  return (
    <header>
      <Themed.h1 sx={{ textAlign: "center", mb: 0 }}>{title}</Themed.h1>
      <Navigation links={links} />
    </header>
  );
}
