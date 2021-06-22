/** @jsx jsx */
import { jsx } from "theme-ui";

import { useConfig } from "../hooks/useConfig";
import Header from "./Header";

export default function Layout({ children }) {
  const { title } = useConfig();
  return (
    <div>
      <Header title={title} />
      <main sx={{ maxWidth: 9, m: "0 auto", px: 3 }}>{children}</main>
    </div>
  );
}
