import React from "react";

import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = { title: "GeoTiles" };

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: "GeoTiles",
  subtitle: "New artwork daily!",
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  title: "GeoTiles",
  links: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
};

export const WithSubtitleAndLinks = Template.bind({});
WithSubtitleAndLinks.args = {
  title: "GeoTiles",
  subtitle: "New artwork daily!",
  links: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
};
