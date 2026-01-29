import React from "react";

import Avatar, { KendoAvatarProps, KendoAvatarState } from "../avatar.spec";

type AvatarImageProps = KendoAvatarProps &
	KendoAvatarState &
	React.HTMLAttributes<HTMLDivElement> & {
		altText?: string;
	};

const applyAltToImg = (child: React.ReactNode, altText: string) => {
	if (React.isValidElement(child) && child.type === "img") {
		const imgProps = child.props as React.ImgHTMLAttributes<HTMLImageElement>;
		if (imgProps.alt == null || imgProps.alt === "") {
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
