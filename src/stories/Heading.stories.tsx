import { Heading, type HeadingProps } from "@/stories/Heading";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Typography/Heading",
	component: Heading,

	args: {
		children: "Example heading",
	},
	parameters: {
		docs: {
			description: {
				story:
					'Por padrão, o componente renderiza um `<h2>`".',
			},
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
