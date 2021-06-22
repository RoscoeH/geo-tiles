import React from "react";

import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
};
