import { classNames, variantClassNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const SKELETON_CLASSNAME = `k-skeleton`;

const SKELETON_VARIANTS = ["circle", "text", "rect"] as const;

const states = [];

const options = {};

export type KendoSkeletonOptions = {
    variant?: (typeof SKELETON_VARIANTS)[number] | null;
};

export type KendoSkeletonProps = KendoSkeletonOptions & {
    /**
     * @deprecated Use `variant` instead
     */
    shape?: 'circle' | 'text' | 'rect'; // Deprecated: use variant instead
    animation?: false | 'wave' | 'pulse';
    style?: React.CSSProperties;
};

const defaultOptions = {
    variant: 'text' as const,
    shape: 'text' as const,
    animation: 'pulse' as const
};

export const Skeleton: KendoComponent<KendoSkeletonProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoSkeletonProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        variant,
        shape, // Deprecated: use variant instead
        animation = defaultOptions.animation,
        ...other
    } = props;

    // Use variant if provided, otherwise fall back to shape for backward compatibility
    const effectiveVariant = `skeleton-${variant || shape || defaultOptions.variant}`;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                SKELETON_CLASSNAME,
                variantClassNames(SKELETON_CLASSNAME, effectiveVariant),
                {
                    [`k-skeleton-${animation}`]: animation,
                },
            )}
            style={props.style}>
        </span>
    );
};

Skeleton.states = states;
Skeleton.options = options;
Skeleton.variants = SKELETON_VARIANTS;
Skeleton.className = SKELETON_CLASSNAME;
Skeleton.defaultOptions = defaultOptions;
Skeleton.moduleName = "skeleton";
Skeleton.folderName = "skeleton";

export default Skeleton;
