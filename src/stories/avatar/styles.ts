import { styled } from "@/panda/jsx";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
	base: {
		borderRadius: "1",
		display: "inline-block",
		width: "12",
		height: "12",
		overflow: "hidden",
	},
});

export const AvatarImage = styled(Avatar.Image, {
	base: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "inherit",
	},
});
export const AvatarFallback = styled(Avatar.Fallback, {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "gray.600",
		color: " gray.800",

    "& svg": {
      width: "6",
      height: "6",
    },
	},
});
