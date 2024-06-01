import { styled } from "@/panda/jsx";
import type { ComponentProps } from "@/panda/types";

export const Text = styled("p", {
	base: {
		fontFamily: "default",
		lineHeight: "base",
		margin: "0",
		color: "gray.100",
	},
	variants: {
		size: {
			xxs: { fontSize: "xxs" },
			xs: { fontSize: "xs" },
			sm: { fontSize: "sm" },
			md: { fontSize: "md" },
			lg: { fontSize: "lg" },
			xl: { fontSize: "xl" },
			"2xl": { fontSize: "2xl" },
			"4xl": { fontSize: "4xl" },
			"5xl": { fontSize: "5xl" },
			"6xl": { fontSize: "6xl" },
			"7xl": { fontSize: "7xl" },
			"8xl": { fontSize: "8xl" },
			"9xl": { fontSize: "9xl" },
		},
	},
	defaultVariants: { size: "md" },
});

export type TextProps = ComponentProps<typeof Text>;
