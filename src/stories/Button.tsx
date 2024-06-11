import { styled } from "@/panda/jsx";
import type { ComponentProps } from "@/panda/types";

export const Button = styled("button", {
	base: {
		all: "unset",
		borderRadius: "sm",
		fontFamily: "default",
		fontWeight: "medium",
		fontSize: "sm",
		textAlign: "center",
		minWidth: 120,
		boxSizing: "border-box",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		gap: "2",
		cursor: "pointer",
		paddingY: "0",
		paddingX: "4",

		"& svg": {
			width: "4",
			height: "4",
		},

		_disabled: {
			cursor: "not-allowed",
		},
	},
	variants: {
		variant: {
			primary: {
				color: "white",
				bgColor: "ignite.500",

				"&:not(disabled):hover": {
					backgroundColor: "ignite.300",
				},

				_disabled: {
					backgroundColor: "gray.200",
				},
			},

			secondary: {
				color: "ignite.300",
				border: "2px solid",
				borderColor: "ignite.500",

				"&:not(disabled):hover": {
					backgroundColor: "ignite.500",
					color: "white",
				},

				_disabled: {
					color: "gray.200",
					borderColor: "gray.200",
				},
			},

			tertiary: {
				color: "gray.100",

				"&:not(disabled):hover": {
					color: "white",
				},

				_disabled: {
					color: "gray.600",
				},
			},
		},

		size: {
			sm: {
				height: 38,
			},
			md: {
				height: 46,
			},
		},
	},

	defaultVariants: { variant: "primary", size: "md" },
});

export type ButtonProps = ComponentProps<typeof Button>;
Button.displayName = "Button";