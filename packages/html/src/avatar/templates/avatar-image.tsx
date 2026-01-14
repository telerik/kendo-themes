import Avatar, { KendoAvatarProps, KendoAvatarState } from "../avatar.spec";

export const AvatarImage = (props: Omit<KendoAvatarProps & KendoAvatarState & React.HTMLAttributes<HTMLDivElement>, 'type'>) => <Avatar type="image" {...props} />;
