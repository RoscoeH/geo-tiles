/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui";
import { Helmet } from "react-helmet";

import { useConfig } from "../hooks/useConfig";
import Header from "./Header";

export default function Layout({ children }) {
  const { title, subtitle, description, url, navigation } = useConfig();
  return (
    <div>
      <Helmet titleTemplate="%s | GeoTiles">
        <title>Home</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header title={title} subtitle={subtitle} links={navigation} />
      <main
        sx={{
          maxWidth: 9,
          m: "0 auto",
          pt: 4,
          px: [3, null, null, null, null, 0],
        }}
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
    </div>
  );
}
