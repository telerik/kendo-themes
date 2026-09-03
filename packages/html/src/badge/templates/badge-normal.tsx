import { Badge, KendoBadgeProps } from "../badge.spec";

export type BadgeNormalProps = Omit<KendoBadgeProps, 'position' | 'align'> & React.HTMLAttributes<HTMLSpanElement>;

export const BadgeNormal = (props: BadgeNormalProps) => <Badge {...props} />;
