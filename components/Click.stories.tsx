import React from "react";

import { Click } from "./Click";

export default {
    title: "Example/Click",
    component: Click
}

const Template = (args) => <Click {...args} />;

export const Primary = Template.bind({});
Primary.args = {};