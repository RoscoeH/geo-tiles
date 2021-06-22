import lodash from "lodash";
import { random as randomColor } from "@ctrl/tinycolor";

import { pickRandom, dateString } from "./utils.js";
import { SHAPES } from "./const.js";

const { random, range } = lodash;

const MIN_ROWS = 8;
const MAX_ROWS = 8;
const MIN_COLUMNS = 8;
const MAX_COLUMNS = 12;
const MIN_COLORS = 2;
const MAX_COLORS = 7;
const MIN_ROTATION = 0;
const MAX_ROTATION = 3;

export default function generateArtwork() {
  const date = dateString();
  const rows = random(MIN_ROWS, MAX_ROWS);
  const columns = rows;
  const shape = pickRandom(SHAPES);
  const colors = range(random(MIN_COLORS, MAX_COLORS)).map(() =>
    randomColor().toHexString()
  );

  const cells = range(rows * columns).map(() => ({
    shape,
    rotate: random(MIN_ROTATION, MAX_ROTATION),
    color: pickRandom(colors),
    color2: pickRandom(colors),
  }));

  return { date, rows, columns, cells };
}
