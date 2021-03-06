import lodash from "lodash";

import utils from "./utils.js";
import { SHAPES } from "./const.mjs";

const { pickRandom, dateString, generateColors } = utils;
const { random, range } = lodash;

const MIN_ROWS = 4;
const MAX_ROWS = 12;
const MIN_COLORS = 2;
const MAX_COLORS = 7;
const MIN_ROTATION = 0;
const MAX_ROTATION = 3;

export default function generateArtwork(options) {
  const date = (options && options.date) || dateString();
  const rows = random(MIN_ROWS, MAX_ROWS);
  const columns = rows;
  const effectiveShape = (options && options.shape) || pickRandom(SHAPES);
  const colors = generateColors(random(MIN_COLORS, MAX_COLORS));
  const cells = range(rows * columns).map(() => ({
    shape: effectiveShape,
    rotate: random(MIN_ROTATION, MAX_ROTATION),
    color: pickRandom(colors),
    color2: pickRandom(colors),
  }));

  return { date, rows, columns, cells };
}
