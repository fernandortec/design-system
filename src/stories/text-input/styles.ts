import { styled } from "@/panda/jsx";

export const TextInputContainer = styled("div", {
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

		"&:has(input:focus)": {
			borderColor: "ignite.300",
		},

		"&:has(input:disabled)": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});

export const Prefix = styled("span", {
	base: {
		fontFamily: "default",
		fontSize: "sm",
		color: "gray.400",
		fontWeight: "regular",
	},
});
export const Input = styled("input", {
	base: {
		fontFamily: "default",
		fontSize: "sm",
		color: "white",
		fontWeight: "regular",
		bgColor: "transparent",
		border: 0,
		width: "100%",

		_focus: { outline: 0 },
		_disabled: { cursor: "not-allowed" },
    _placeholder: { color: "gray.400" },
	},
});
