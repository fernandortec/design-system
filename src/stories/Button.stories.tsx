import { Button, type ButtonProps } from "@/stories/Button";
import type { Meta, StoryObj } from "storybook-solidjs";

export default {
	title: "Button",
	component: Button,

	args: { children: "Enviar" },
} satisfies Meta;

export const Primary: StoryObj<ButtonProps> = {};
export const Big: StoryObj<ButtonProps> = { args: { size: "big" } };
