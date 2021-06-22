import React from "react";
import { InlineIcon } from "@iconify/react";
import roundViewGrid from "@iconify/icons-ic/round-grid-view";
import roundViewAgenda from "@iconify/icons-ic/round-view-agenda";

const ICONS = {
  grid: roundViewGrid,
  list: roundViewAgenda,
};

export default function Icon({ icon = "grid", size = 32 }) {
  const iconData = ICONS[icon];
  return <InlineIcon icon={iconData} width={size} height={size} />;
}
