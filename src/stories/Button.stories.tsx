import { Button, type ButtonProps } from "@/stories/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { CaretRight } from "phosphor-react";

export default {
	title: "Form/Button",
	component: Button,

	args: { children: "Send", variant: "primary", size: "md", disabled: false },
	argTypes: {
		variant: {
			options: ["primary", "secondary", "tertiary"],
			control: { type: "inline-radio" },
		},
		size: {
			options: ["sm", "md"],
			control: { type: "inline-radio" },
		},
		disabled: {
			control: { type: "boolean" },
		},
		onClick: { action: "click" },
	},
} satisfies Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		disabled: false,
	},
};
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
