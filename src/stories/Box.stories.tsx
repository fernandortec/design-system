import { Box, type BoxProps } from "@/stories/Box";
import { Text } from "@/stories/Text";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Box",
	component: Box,

	args: {
		children: (
			<>
				<Text>Testando o elemento box</Text>
			</>
		),
	},
} satisfies Meta;

type Story = StoryObj<BoxProps>;

export const Primary: Story = {};
