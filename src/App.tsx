import { styled } from "@/panda/jsx";
import type { JSX } from "solid-js";

const Button = styled("button", {
	base: {
		width: "220px",
		height: "200px",
		backgroundColor: "red",
	},
});

export function App(): JSX.Element {
	return (
		<div>
			<p>Hello world</p>
			<Button />
		</div>
	);
}
