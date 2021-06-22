/** @jsx jsx */
import { jsx } from "theme-ui";

import { useConfig } from "../hooks/useConfig";
import Header from "./Header";

export default function Layout({ children }) {
  const { title, navigation } = useConfig();
  return (
    <div>
      <Header title={title} links={navigation} />
      <main
        sx={{ maxWidth: 9, m: "0 auto", px: [3, null, null, null, null, 0] }}
      >
        {children}
      </main>
    </div>
  );
}
