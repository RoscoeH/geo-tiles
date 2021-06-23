/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { useConfig } from "../hooks/useConfig";
import Header from "./Header";

export default function Layout({ children }) {
  const { title, navigation } = useConfig();
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | GeoTiles">
        <title>Home</title>
      </Helmet>
      <Header title={title} links={navigation} />
      <main
        sx={{ maxWidth: 9, m: "0 auto", px: [3, null, null, null, null, 0] }}
      >
        {children}
      </main>
      <footer sx={{ fontSize: 0, pt: 3, textAlign: "center" }}>
        <Themed.p>
          Want to hire me?{" "}
          <Link href="https://roscoe.dev/#contact">Let's get in touch</Link>
        </Themed.p>
        <Themed.p>
          Want to support me?{" "}
          <Link href="https://www.buymeacoffee.com/roscoe.dev">
            Buy me a coffee
          </Link>{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>
        </Themed.p>
        <Themed.p>© {new Date().getFullYear()} roscoe.dev</Themed.p>
      </footer>
    </HelmetProvider>
  );
}
