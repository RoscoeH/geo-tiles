import React from "react";

import { SHAPES, ROTATIONS } from "../core/const";
import { CellSvg as Cell } from "./Cell";

export default {
  title: "Cell",
  component: Cell,
  argTypes: {
    shape: {
      control: {
        type: "select",
      },
      options: SHAPES,
    },
    rotate: {
      control: { type: "select" },
      options: ROTATIONS,
    },
  },
};

const Template = (args) => <Cell {...args} />;

export const Square = Template.bind({});
Square.args = { shape: "square" };

export const Triangle = Template.bind({});
Triangle.args = { shape: "triangle" };

export const SmallTriangle = Template.bind({});
SmallTriangle.args = { shape: "smallTriangle" };

export const Dot = Template.bind({});
Dot.args = { shape: "dot" };

export const Skewed = Template.bind({});
Skewed.args = { shape: "skewed" };

export const Circle = Template.bind({});
Circle.args = { shape: "circle" };

export const Curved = Template.bind({});
Curved.args = { shape: "curved" };

export const Noodle = Template.bind({});
Noodle.args = { shape: "noodle" };

export const SmallSquare = Template.bind({});
SmallSquare.args = { shape: "smallSquare" };

export const SmallCircle = Template.bind({});
SmallCircle.args = { shape: "smallCircle" };

export const RotateTriangle = Template.bind({});
RotateTriangle.args = { shape: "triangle", rotate: 1 };
