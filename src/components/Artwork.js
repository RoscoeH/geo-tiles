import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";

import { SHAPES } from "../core/const";
import { pickRandom } from "../core/utils";

console.log(SHAPES);

const DEFAULT_ROWS = 16;
const DEFAULT_COLS = 16;
const SHAPE = "triangle";
const COLORS = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"];
const ANGLES = [0, 90, 180, 270];
const POSITIONS = [1 / 3, 2 / 3];
const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;

export default function Artwork({
  cell = CELL_TYPES[pickRandom(SHAPES)],
  rows = 8,
  columns = 8,
  cellWidth = 64,
  cellHeight = 64,
  colors = COLORS,
}) {
  return (
    <g>
      {range(rows).map((row) => (
        <g key={row} transform={`translate(0 ${row * cellHeight})`}>
          {range(columns).map((col) => (
            <g key={col} transform={`translate(${col * cellWidth} 0)`}>
              {cell({
                width: cellWidth,
                height: cellHeight,
                color: pickRandom(colors),
                colorAlt: pickRandom(colors),
              })}
            </g>
          ))}
        </g>
      ))}
    </g>
  );
}
Artwork.propTypes = {
  cell: PropTypes.func,
  rows: PropTypes.number,
  columns: PropTypes.number,
  cellWidth: PropTypes.number,
  cellHeight: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export const ArtworkSvg = ({
  size = 64,
  rows = 8,
  columns = 8,
  shape = "circle",
  colors = COLORS,
}) => {
  const cellWidth = size;
  const cellHeight = size;
  const cell = CELL_TYPES[shape];
  console.log(shape, cell);
  return (
    <svg
      width={cellWidth * columns}
      height={cellHeight * rows}
      viewBox={`0 0 ${cellWidth * columns} ${cellHeight * rows}`}
      style={{ border: "1px solid black" }}
    >
      <Artwork
        cell={cell}
        rows={rows}
        columns={columns}
        cellWidth={cellWidth}
        cellHeight={cellHeight}
        colors={colors}
      />
    </svg>
  );
};
