import type { ComponentProps } from "@/panda/types";
import { User } from "phosphor-react";
import type { JSX } from "react";
import * as S from "./styles";

export interface AvatarProps extends ComponentProps<typeof S.AvatarImage> {}

export function Avatar(props: AvatarProps): JSX.Element {
	return (
		<S.AvatarContainer>
			<S.AvatarImage {...props} />
			<S.AvatarFallback delayMs={600}>
				<User />
			</S.AvatarFallback>
		</S.AvatarContainer>
	);
}

Avatar.displayName = "Avatar";
