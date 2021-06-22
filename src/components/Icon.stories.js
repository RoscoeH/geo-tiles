import React from "react";

import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Grid = Template.bind({});
Grid.args = { icon: "grid" };

export const List = Template.bind({});
List.args = { icon: "list" };
