import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const SKELETON_CLASSNAME = `k-skeleton`;

const states = [];

const options = {};

export type KendoSkeletonProps = {
    shape?: 'circle' | 'text' | 'rect';
    animation?: false | 'wave' | 'pulse';
    style?: React.CSSProperties;
};

const defaultOptions = {
    shape: 'text',
    animation: 'pulse'
};

export const Skeleton: KendoComponent<KendoSkeletonProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoSkeletonProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        shape = defaultOptions.shape,
        animation = defaultOptions.animation,
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
Skeleton.defaultOptions = defaultOptions;

export default Skeleton;
