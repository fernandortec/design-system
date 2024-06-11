import type { ComponentProps } from "@/panda/types";
import { Check } from "phosphor-react";
import type { JSX } from "react";
import * as S from "./styles";

export interface CheckboxProps
	extends ComponentProps<typeof S.CheckboxContainer> {}

export function Checkbox(props: CheckboxProps): JSX.Element {
	return (
		<S.CheckboxContainer {...props}>
			<S.CheckboxIndicator asChild>
				<Check weight="bold" />
			</S.CheckboxIndicator>
		</S.CheckboxContainer>
	);
}

Checkbox.displayName = "Checkbox";