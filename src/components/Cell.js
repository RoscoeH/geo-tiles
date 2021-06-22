import React from "react";
import PropTypes from "prop-types";

import { SHAPES, ROTATIONS } from "../core/const.mjs";

const DEFAULT_SIZE = 128;
const DEFAULT_ANGLE = 90;

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
  triangle: ({ width, height, color, color2 }) => (
    <g shapeRendering="crispEdges">
      <polygon points={`0,0 ${width},${height} 0,${height}`} fill={color} />
      <polygon points={`0,0 ${width},0 ${width},${height}`} fill={color2} />
    </g>
  ),
  circle: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
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
  smallCircle: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
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
  dot: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
        shapeRendering="crispEdges"
      />
      <circle cx={width / 3} cy={height / 3} r={width / 8} fill={color} />
    </g>
  ),
  skewed: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
        shapeRendering="crispEdges"
      />
      <path
        d={`m0,0 h${width} v${height} h${-width / 3}`}
        fill={color}
        shapeRendering="crispEdges"
      />
    </g>
  ),
  curved: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
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
  smallTriangle: ({ width, height, color, color2 }) => (
    <g shapeRendering="crispEdges">
      <rect x="0" y="0" width={width} height={height} fill={color2} />
      <polygon
        points={`0,0 ${width / 2},${height / 2} 0,${height}`}
        fill={color}
      />
    </g>
  ),
  noodle: ({ width, height, color, color2 }) => (
    <g>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={color2}
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
  smallSquare: ({ width, height, color, color2 }) => (
    <g>
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
        fill={color2}
        shapeRendering="crispEdges"
      />
    </g>
  ),
};

export default function Cell({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  shape = "circle",
  color = "red",
  color2 = "blue",
  rotate = 0,
}) {
  return (
    <g
      transform={`rotate(${rotate * DEFAULT_ANGLE} ${width / 2} ${height / 2})`}
    >
      {CELL_TYPES[shape]({ width, height, color, color2 })};
    </g>
  );
}
Cell.propTypes = {
  shape: PropTypes.oneOf(SHAPES),
  color: PropTypes.string,
  color2: PropTypes.string,
  rotate: PropTypes.oneOf(ROTATIONS),
};

export function CellSvg({
  shape = "circle",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  color = "red",
  color2 = "blue",
  rotate = 0,
}) {
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`}>
      <Cell
        shape={shape}
        color={color}
        color2={color2}
        rotate={rotate}
        width={width}
        height={height}
      />
    </svg>
  );
}
CellSvg.propTypes = {
  shape: PropTypes.oneOf(SHAPES),
  color: PropTypes.string,
  color2: PropTypes.string,
  rotate: PropTypes.oneOf(ROTATIONS),
};
