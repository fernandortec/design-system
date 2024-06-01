import { Heading, type HeadingProps } from "@/stories/Heading";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Typography/Heading",
	component: Heading,

	args: {
		children: "Example heading",
	},
} satisfies Meta;

type Story = StoryObj<HeadingProps>;

export const Primary: Story = {};
export const StrongerHeading: Story = {
	args: {
		children: <h1>H1 heading</h1>,
	},
};
