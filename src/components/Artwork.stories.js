import React from "react";
import { random as randomColor } from "@ctrl/tinycolor";
import { range, random } from "lodash";

import { SHAPES } from "../core/const";
import { pickRandom } from "../core/utils";
import generateArtwork from "../core/generateArtwork";
import { ArtworkSvg as Artwork } from "../components/Artwork";

export default {
  title: "Artwork",
  component: Artwork,
  argTypes: {
    shape: {
      options: SHAPES,
      control: { type: "select" },
      default: pickRandom(SHAPES),
    },
    rows: { control: { type: "range", min: 2, max: 32 } },
    columns: { control: { type: "range", min: 2, max: 32 } },
  },
};

const Template = (args) => <Artwork {...args} />;

export const Square = Template.bind({});
Square.args = { ...generateArtwork({ shape: "square" }) };

export const Triangle = Template.bind({});
Triangle.args = { ...generateArtwork({ shape: "triangle" }) };

export const SmallTriangle = Template.bind({});
SmallTriangle.args = { ...generateArtwork({ shape: "smallTriangle" }) };

export const Dot = Template.bind({});
Dot.args = { ...generateArtwork({ shape: "dot" }) };

export const Skewed = Template.bind({});
Skewed.args = { ...generateArtwork({ shape: "skewed" }) };

export const Circle = Template.bind({});
Circle.args = { ...generateArtwork({ shape: "circle" }) };

export const Curved = Template.bind({});
Curved.args = { ...generateArtwork({ shape: "curved" }) };

export const Noodle = Template.bind({});
Noodle.args = { ...generateArtwork({ shape: "noodle" }) };

export const SmallSquare = Template.bind({});
SmallSquare.args = { ...generateArtwork({ shape: "smallSquare" }) };

export const SmallCircle = Template.bind({});
SmallCircle.args = { ...generateArtwork({ shape: "smallCircle" }) };
