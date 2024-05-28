import "../src/index.css";
import { background, themes } from "@storybook/theming";
import type { Preview } from "storybook-solidjs";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: { default: "dark" },
	},
};

export default preview;
