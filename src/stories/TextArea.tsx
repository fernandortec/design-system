import { styled } from "@/panda/jsx";
import type { ComponentProps } from "@/panda/types";

export const TextArea = styled("textarea", {
	base: {
		bgColor: "gray.900",
		paddingY: "3",
		paddingX: 4,

		borderRadius: "sm",
		boxSizing: "border-box",
		border: "2px solid",
		borderColor: "gray.900",

		display: "flex",
		alignItems: "baseline",

		fontFamily: "default",
		fontSize: "sm",
		color: "white",
		fontWeight: "regular",
		resize: "vertical",
		minHeight: 80,

		_focus: { outline: 0, borderColor: "ignite.300" },
		_disabled: { opacity: 0.5, cursor: "not-allowed" },
		_placeholder: { color: "gray.400" },
	},
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
