import { styled } from "@/panda/jsx";
import { Text } from "@/stories/Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, {
	base: { color: "$gray200" },

	defaultVariants: {
		size: "xs",
	},
});

export const Steps = styled("div", {
	base: {
		display: "grid",
		gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
		gap: "2",
		marginTop: "1",
	},
});

export const Step = styled("div", {
	base: {
		height: "1",
		borderRadius: "sm",
		backgroundColor: "gray.600",
	},

	variants: {
		active: {
			true: {
				backgroundColor: "$gray100",
			},
		},
	},
});
