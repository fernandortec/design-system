import { colors } from "@/tokens/colors";
import { getContrast } from "polished";

export function ColorsGrid() {
	return Object.entries(colors).map(([key, color]) => (
		<div key={key} style={{ backgroundColor: color.value, padding: "2rem" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					fontFamily: "monospace",
					color: getContrast(color.value, "#FFF") < 3.5 ? "#000" : "#FFF",
				}}
			>
				<strong>${key}</strong>
				<span>{color.value}</span>
			</div>
		</div>
	));
}
