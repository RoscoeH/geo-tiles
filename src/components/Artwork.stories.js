import React from "react";
import { random as randomColor } from "@ctrl/tinycolor";
import { range, random } from "lodash";

import { pickRandom } from "../core/utils";
import { ArtworkSvg as Artwork, SHAPES } from "../components/Artwork";

const randomColors = () =>
  range(random(2, 7)).map(() => randomColor().toHexString());

console.log("rc", randomColors());

export default {
  title: "Artwork",
  component: Artwork,
  argTypes: {
    shape: {
      control: { type: "select", options: SHAPES },
      default: pickRandom(SHAPES),
    },
    rows: { control: { type: "range", min: 2, max: 32 } },
    columns: { control: { type: "range", min: 2, max: 32 } },
  },
};

const Template = (args) => <Artwork {...args} colors={randomColors()} />;

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
