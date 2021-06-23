/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { keyframes } from "@emotion/react";

import Navigation from "./Navigation";

const pulse = keyframes({
  from: { transform: "scale(1)" },
  to: { transform: "scale(1.075)" },
});

export default function Header({ title, subtitle, links }) {
  return (
    <header sx={{ textAlign: "center" }}>
      <Link as={GatsbyLink} variant="title" to="/">
        <Themed.h1 sx={{ textAlign: "center", mb: 0 }}>{title}</Themed.h1>
      </Link>
      {subtitle && (
        <small
          sx={{
            display: "inline-block",
            color: "primary",
            animation: `${pulse} 0.5s infinite linear alternate-reverse`,
          }}
        >
          {subtitle}
        </small>
      )}
      {links && <Navigation links={links} />}
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    })
  ),
};
