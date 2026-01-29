import { AvatarImage } from "../templates/avatar-image";

export const AvatarImageWithAlt = (props) => (
    <AvatarImage {...props}>
        <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
    </AvatarImage>
);
