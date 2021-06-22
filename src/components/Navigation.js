/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export default function Navigation({ links }) {
  return (
    <nav>
      <ul
        sx={{ p: 0, mt: 3, mb: 4, listStyleType: "none", textAlign: "center" }}
      >
        {links.map(({ label, to }, index) => (
          <li key={index} sx={{ display: "inline", p: 2 }}>
            <Link
              to={to}
              activeClassName="active"
              sx={{
                position: "relative",
                color: "text",
                textDecoration: "none",
                "&.active:after": {
                  content: "' '",
                  position: "absolute",
                  top: ({ space }) => space[1] * 5,
                  left: ({ space }) => `calc(50% - ${space[1] / 2}px)`,
                  width: 1,
                  height: 1,
                  bg: "text",
                  borderRadius: 7,
                },
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};
