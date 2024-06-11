import { Heading, type HeadingProps } from "@/stories/Heading";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Typography/Heading",
	component: Heading,

	args: {
		children: "Example heading",
		size: "md"
	},
	parameters: {
		docs: {
			description: {
				story: 'Por padrão, o componente renderiza um `<h2>`".',
			},
		},
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
			control: { type: "inline-radio" },
		},
	},
} satisfies Meta;

type Story = StoryObj<HeadingProps>;

export const Primary: Story = {};
export const StrongerHeading: Story = {
	args: {
		children: <h1>H1 heading</h1>,
	},
};
