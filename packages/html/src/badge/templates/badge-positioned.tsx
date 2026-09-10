import { Badge, KendoBadgeProps } from "../badge.spec";

export type BadgePositionedProps = Omit<KendoBadgeProps, 'position' | 'align'> & {
    position: NonNullable<KendoBadgeProps['position']>;
    align: NonNullable<KendoBadgeProps['align']>;
} & React.HTMLAttributes<HTMLSpanElement>;

export const BadgePositioned = (props: BadgePositionedProps) => <Badge {...props} />;
