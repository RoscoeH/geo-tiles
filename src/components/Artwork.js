import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";

import { pickRandom } from "../core/utils";

const DEFAULT_ROWS = 16;
const DEFAULT_COLS = 16;
const SHAPE = "triangle";
const COLORS = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"];
const ANGLES = [0, 90, 180, 270];
const POSITIONS = [1 / 3, 2 / 3];
const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;

const CELL_TYPES = {
  square: ({ width, height, color }) => (
    <rect
      x="0"
      y="0"
      width={width}
      height={height}
      fill={color}
      shapeRendering="crispEdges"
    />
  ),
  triangle: ({ width, height, color, colorAlt }) => (
    <g shapeRendering="crispEdges">
      <polygon points={`0,0 ${width},${height} 0,${height}`} fill={color} />
      <polygon points={`0,0 ${width},0 ${width},${height}`} fill={colorAlt} />
    </g>
  ),
  circle: ({ width, height, color, colorAlt }) => (
    <g transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <path
        d={`M 0 0
           A ${width} ${height}, 0, 0, 0, ${width} ${height}
           L ${width} 0 Z`}
        fill={color}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  smallCircle: ({ width, height, color, colorAlt }) => (
    <g transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <path
        d={`M ${width / 2} 0
           A ${width / 2} ${height / 2}, 0, 0, 1, 0 ${height / 2}
           L 0 0 Z`}
        fill={color}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  dot: ({ width, height, color, colorAlt }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <circle
        cx={pickRandom(POSITIONS) * width}
        cy={pickRandom(POSITIONS) * height}
        r={width / 8}
        fill={color}
      />
    </g>
  ),
  skewed: ({ width, height, color, colorAlt }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <path
        d={`m0,0 h${width} v${height} h${-width / 3}`}
        fill={color}
        transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  curved: ({ width, height, color, colorAlt }) => (
    <g transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <path
        d={`M 0 0 
           L 0 ${height / 2}
           A ${width / 2} ${height / 2}, 0, 0, 0, ${width / 2} ${height}
           H ${width} V 0 Z`}
        fill={color}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  smallTriangle: ({ width, height, color, colorAlt }) => (
    <g
      transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}
      shapeRendering="crispEdges"
    >
      <rect x="0" y="0" width={width} height={height} fill={colorAlt} />
      <polygon
        points={`0,0 ${width / 2},${height / 2} 0,${height}`}
        fill={color}
      />
    </g>
  ),
  noodle: ({ width, height, color, colorAlt }) => (
    <g transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
      <path
        d={`M 0 ${height / 2} 
           A ${width / 2} ${height / 2}, 0, 0, 1, ${width / 2} ${height}`}
        fill="none"
        stroke={color}
        strokeWidth={width / 8}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  smallSquare: ({ width, height, color, colorAlt }) => (
    <g transform={`rotate(${pickRandom(ANGLES)} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color}
        shapeRendering="crispEdges"
      />
      <rect
        x="0"
        y="0"
        width={width / 2}
        height={height / 2}
        fill={colorAlt}
        shapeRendering="crispEdges"
      />
    </g>
  ),
};
export const SHAPES = Object.keys(CELL_TYPES);

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
