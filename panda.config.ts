import { colors } from "@/tokens/colors";
import { fontSizes } from "@/tokens/font-sizes";
import { fontWeights } from "@/tokens/font-weights";
import { fonts } from "@/tokens/fonts";
import { lineHeights } from "@/tokens/line-heights";
import { radii } from "@/tokens/radii";
import { spaces } from "@/tokens/spaces";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors: colors,
				fontSizes: fontSizes,
				fontWeights: fontWeights,
				fonts: fonts,
				lineHeights: lineHeights,
				radii: radii,
				spacing: spaces,
			},
		},
	},
	outdir: "(styled-system)",
	jsxFramework: "solid",
});
