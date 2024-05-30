import "../styles/tokens-grid.css";

interface TokensGridProps {
	tokens: { [key: string]: { value: string } };
	hasRemValue?: boolean;
}
export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
	return (
		<table className="tokens-grid">
			<thead>
				<tr>
					<th>Name</th>
					<th>Value</th>
					{hasRemValue && <th>Pixels</th>}
				</tr>
			</thead>

			<tbody>
				{Object.entries(tokens).map(([key, value]) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{value.value}</td>
						{hasRemValue && <td>{+value.value.replace("rem", "") * 16}px</td>}
					</tr>
				))}
			</tbody>
		</table>
	);
}
