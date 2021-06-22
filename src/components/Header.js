/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

export default function Header({ title }) {
  return (
    <header>
      <Themed.h1 sx={{ textAlign: "center" }}>{title}</Themed.h1>
    </header>
  );
}
