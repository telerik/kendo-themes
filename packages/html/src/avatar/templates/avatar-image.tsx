import React from "react";

import Avatar, { KendoAvatarProps, KendoAvatarState } from "../avatar.spec";

type AvatarImageProps = KendoAvatarProps &
	KendoAvatarState &
	React.HTMLAttributes<HTMLDivElement> & {
		altText?: string;
	};

const applyAltToImg = (child: React.ReactNode, altText: string) => {
	if (React.isValidElement<React.ImgHTMLAttributes<HTMLImageElement>>(child) && child.type === "img") {
		if (child.props.alt == null || child.props.alt === "") {
			return React.cloneElement(child, { alt: altText });
		}
	}

	return child;
};

export const AvatarImage = ({ children, altText = "User avatar", ...props }: AvatarImageProps) => (
	<Avatar type="image" {...props}>
		{React.Children.map(children, (child) => applyAltToImg(child, altText))}
	</Avatar>
);
