import Avatar from "../avatar.spec";

export const AvatarImageA11y = (props: any) => (
    <Avatar type="image" {...props}>
        <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
    </Avatar>
);
