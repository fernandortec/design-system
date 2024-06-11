import { Box } from "@/stories/Box";
import { Text } from "@/stories/Text";
import { TextArea, type TextAreaProps } from "@/stories/TextArea";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Form/Text Area",
	component: TextArea,
	args: {},
	decorators: [
		(Story) => (
			<Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<Text size="sm">Observations</Text>
				{Story()}
			</Box>
		),
	],
	argTypes: {
				variant: {
			options: ["primary", "secondary", "tertiary"],
			control: { type: "inline-radio" },
		},
	}
} satisfies Meta;

type Story = StoryObj<TextAreaProps>;

export const Primary: Story = { args: { placeholder: "Add any observations..." } };
export const Disabled: Story = { args: { disabled: true } };
