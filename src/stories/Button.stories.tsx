import { Button, type ButtonProps } from "@/stories/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { CaretRight } from "phosphor-react";

export default {
	title: "Form/Button",
	component: Button,

	args: { children: "Send" },
} satisfies Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};
export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "See more",
	},
};

export const Tertiary: Story = {
	args: {
		variant: "tertiary",
		children: "Cancel",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
export const WithIcon: Story = {
	args: {
		children: (
			<>
				Next step
				<CaretRight />
			</>
		),
	},
};
