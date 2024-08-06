import { classNames } from '../misc';

export const SKELETON_CLASSNAME = `k-skeleton`;

const states = [];

const options = {};

export type KendoSkeletonProps = {
    shape?: 'circle' | 'text' | 'rect';
    animation?: false | 'wave' | 'pulse';
    style?: React.CSSProperties;
};

export const Skeleton = (
    props: KendoSkeletonProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        shape = 'text',
        animation = 'pulse',
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                SKELETON_CLASSNAME,
                {
                    [`k-skeleton-${shape}`]: shape,
                    [`k-skeleton-${animation}`]: animation,
                },
            )}
            style={props.style}>
        </span>
    );
};

Skeleton.states = states;
Skeleton.options = options;
Skeleton.className = SKELETON_CLASSNAME;

export default Skeleton;
