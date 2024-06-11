import { Text, type TextProps } from "@/stories/Text";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Typography/Text",
	component: Text,

	args: {
		children: "Example text",
	},
	argTypes: {
		size: {
			options: [
				"xxs",
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"4xl",
				"5xl",
				"6xl",
				"7xl",
				"8xl",
				"9xl",
			],
			control: { type: "inline-radio" },
		},
	},
} satisfies Meta;

type Story = StoryObj<TextProps>;

export const Primary: Story = {};
export const StrongText: Story = {
	args: {
		children: <b>Strong text</b>,
	},
};
