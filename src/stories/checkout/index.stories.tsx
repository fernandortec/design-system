import { Box } from "@/stories/Box";
import { Text } from "@/stories/Text";
import { Checkbox, type CheckboxProps } from "@/stories/checkout";

import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Form/Checkbox",
	component: Checkbox,
	args: {},
	decorators: [
		(Story) => (
			<Box style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
				{Story()}
				<Text size="sm">Accept terms of use</Text>
			</Box>
		),
	],
} satisfies Meta;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};
