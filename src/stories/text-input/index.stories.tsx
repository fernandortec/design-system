import { Box } from "@/stories/Box";
import { Text } from "@/stories/Text";
import { TextInput, type TextInputProps } from "@/stories/text-input";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Form/Text Input",
	component: TextInput,
	args: {},
	decorators: [
		(Story) => (
			<Box style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
				<Text size="sm">Email address</Text>
				{Story()}
			</Box>
		),
	],
} satisfies Meta;

type Story = StoryObj<TextInputProps>;

export const Primary: Story = { args: { placeholder: "Type your name" } };
export const WithPrefix: Story = { args: { prefix: "https://" } };
export const Disabled: Story = { args: { disabled: true } };
