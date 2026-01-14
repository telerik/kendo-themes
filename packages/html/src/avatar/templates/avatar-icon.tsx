import Avatar, { KendoAvatarProps, KendoAvatarState } from "../avatar.spec";

export const AvatarIcon = (props: Omit<KendoAvatarProps & KendoAvatarState & React.HTMLAttributes<HTMLDivElement>, 'type'>) => <Avatar type="icon" {...props} />;
