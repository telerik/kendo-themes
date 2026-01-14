import Avatar, { KendoAvatarProps, KendoAvatarState } from "../avatar.spec";

export const AvatarText = (props: Omit<KendoAvatarProps & KendoAvatarState & React.HTMLAttributes<HTMLDivElement>, 'type'>) => <Avatar type="text" {...props} />;
