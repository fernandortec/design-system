import { Button, type ButtonProps } from "@/stories/Button";
import type { Meta, StoryObj } from "storybook-solidjs";

export default {
	title: "Button",
	component: Button,

	args: { children: "Enviar" },
} satisfies Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};
export const Big: Story = { args: { size: "big" } };
