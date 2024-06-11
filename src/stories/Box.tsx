import { type StyledComponent, styled } from "@/panda/jsx";
export const Box = styled("div", {
	base: {
		padding: "4",
		borderRadius: "md",
		backgroundColor: "gray.800",
		border: "1px solid gray.600",
	},
});

export type BoxProps = StyledComponent<typeof Box>;
Box.displayName = "Box";