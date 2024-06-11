import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "@/panda/jsx"

export const CheckboxContainer = styled(Checkbox.Root, {
	base: {
		all: "unset",
		width: "6",
		height: "6",
		bgColor: "gray.900",
		borderRadius: "xs",
		lineHeight: 0,
		cursor: "pointer",
		overflow: "hidden",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "2px solid",
		borderColor: "gray.900",


		_focus: { border: "2px solid", borderColor: "ignite.300" },
	},
});


export const CheckboxIndicator = styled(Checkbox.Indicator, {
	base: {
		color: "white",
		width: "4",
		height: "4",
	},
});
