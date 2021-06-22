/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

import Navigation from "./Navigation";

export default function Header({ title, links }) {
  return (
    <header>
      <Link as={GatsbyLink} variant="title" to="/">
        <Themed.h1 sx={{ textAlign: "center", mb: 0 }}>{title}</Themed.h1>
      </Link>
      <Navigation links={links} />
    </header>
  );
}
