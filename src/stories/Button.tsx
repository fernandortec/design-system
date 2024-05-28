import { type StyledComponent, styled } from "@/panda/jsx";

export const Button = styled("button", {
	base: {
		paddingY: "2",
		paddingX: "4",
		border: 0,
		borderRadius: "sm",
		fontFamily: "default",
		fontWeight: "bold",
		backgroundColor: "ignite.300",
		color: "white",
	},
	variants: {
		size: {
			small: {
				fontSize: 14,
				paddingY: "2",
				paddingX: "4",
			},
			big: {
				fontSize: 16,
				paddingY: "3",
				paddingX: "6",
			},
		},
	},

	defaultVariants: { size: "small" },
});

export type ButtonProps = StyledComponent<typeof Button>;
