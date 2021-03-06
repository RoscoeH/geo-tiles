/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { range } from "lodash";

import { ROTATIONS, SHAPES } from "../core/const.mjs";
import Cell from "./Cell";

export default function Artwork({
  rows = 8,
  columns = 8,
  cellWidth = 64,
  cellHeight = 64,
  cells,
}) {
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

export const ArtworkSvg = ({ size = 64, rows = 8, columns = 8, cells }) => {
  const cellWidth = size;
  const cellHeight = size;
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${cellWidth * columns} ${cellHeight * rows}`}
      sx={{ display: "block" }}
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
