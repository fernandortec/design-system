import { Text, type TextProps } from "@/stories/Text";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Typography/Text",
	component: Text,

	args: {
		children: "Example text",
	},
} satisfies Meta;

type Story = StoryObj<TextProps>;

export const Primary: Story = {};
export const StrongText: Story = {
	args: {
		children: <b>Strong text</b>,
	},
};
