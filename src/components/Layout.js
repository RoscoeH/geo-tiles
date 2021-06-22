/** @jsx jsx */
import { jsx } from "theme-ui";

export default function Layout({ children }) {
  return (
    <div>
      <h1>Layout</h1>
      <main sx={{ maxWidth: 420, m: "0 auto", px: 2 }}>{children}</main>
    </div>
  );
}
