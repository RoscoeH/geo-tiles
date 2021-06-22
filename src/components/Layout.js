/** @jsx jsx */
import { jsx } from "theme-ui";

import { useConfig } from "../hooks/useConfig";
import Header from "./Header";

export default function Layout({ title, children }) {
  const { title } = useConfig();
  return (
    <div>
      <Header title={title} />
      <main sx={{ maxWidth: 420, m: "0 auto", px: 2 }}>{children}</main>
    </div>
  );
}
