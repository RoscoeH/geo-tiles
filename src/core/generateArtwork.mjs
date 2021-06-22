import lodash from "lodash";
import TinyColor from "@ctrl/tinycolor";

import { pickRandom, dateString } from "./utils.mjs";
import { SHAPES } from "./const.mjs";

const { random, range } = lodash;
const randomColor = TinyColor.random;

const MIN_ROWS = 8;
const MAX_ROWS = 8;
const MIN_COLORS = 2;
const MAX_COLORS = 7;
const MIN_ROTATION = 0;
const MAX_ROTATION = 3;

export default function generateArtwork(options) {
  const date = dateString();
  const rows = random(MIN_ROWS, MAX_ROWS);
  const columns = rows;
  const effectiveShape = (options && options.shape) || pickRandom(SHAPES);
  const colors = range(random(MIN_COLORS, MAX_COLORS)).map(() =>
    randomColor().toHexString()
  );

  const cells = range(rows * columns).map(() => ({
    shape: effectiveShape,
    rotate: random(MIN_ROTATION, MAX_ROTATION),
    color: pickRandom(colors),
    color2: pickRandom(colors),
  }));

  return { date, rows, columns, cells };
}
