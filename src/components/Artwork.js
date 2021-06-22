import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";

import { ROTATIONS, SHAPES } from "../core/const";
import Cell from "./Cell";

export default function Artwork({
  rows = 8,
  columns = 8,
  cellWidth = 64,
  cellHeight = 64,
  cells,
}) {
  console.log(cells);
  return (
    <g>
      {range(rows).map((row) => (
        <g key={row} transform={`translate(0 ${row * cellHeight})`}>
          {range(columns).map((col) => {
            const { shape, color, color2, rotate } = cells[row * columns + col];
            return (
              <g key={col} transform={`translate(${col * cellWidth} 0)`}>
                <Cell
                  width={cellWidth}
                  height={cellHeight}
                  shape={shape}
                  color={color}
                  color2={color2}
                  rotate={rotate}
                />
              </g>
            );
          })}
        </g>
      ))}
    </g>
  );
}
Artwork.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  cellWidth: PropTypes.number,
  cellHeight: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  cells: PropTypes.arrayOf(
    PropTypes.shape({
      shape: PropTypes.oneOf(SHAPES),
      color: PropTypes.string,
      color2: PropTypes.string,
      rotate: PropTypes.oneOf(ROTATIONS),
    })
  ),
};

export const ArtworkSvg = ({
  size = 64,
  rows = 8,
  columns = 8,
  shape = "circle",
  cells,
}) => {
  const cellWidth = size;
  const cellHeight = size;
  return (
    <svg
      width={cellWidth * columns}
      height={cellHeight * rows}
      viewBox={`0 0 ${cellWidth * columns} ${cellHeight * rows}`}
      style={{ border: "1px solid black" }}
    >
      <Artwork
        rows={rows}
        columns={columns}
        cellWidth={cellWidth}
        cellHeight={cellHeight}
        cells={cells}
      />
    </svg>
  );
};
