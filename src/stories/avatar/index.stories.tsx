import { Avatar, type AvatarProps } from "@/stories/avatar";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Data display/Avatar",
	component: Avatar,

	args: {
		src: "https://github.com/fernandortec.png",
		alt: "Fernando Rodrigues",
	},
	argTypes: {
		src: {
			control: { type: "text" },
		},
	},
} satisfies Meta;

type Story = StoryObj<AvatarProps>;

export const Primary: Story = {};
export const WithFallback: Story = {
	args: {
		src: undefined,
	},
};
