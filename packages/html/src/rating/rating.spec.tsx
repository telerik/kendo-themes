import { classNames, stateClassNames, States } from '../misc';
import RatingItem from './rating-item';

import { KendoComponent } from '../_types/component';
import { RATING_FOLDER_NAME, RATING_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const RATING_CLASSNAME = `k-rating`;

const states = [
    States.disabled,
    States.readonly,
];

const options = {};

export type RatingState = { [K in (typeof states)[number]]?: boolean };

export type RatingProps = {
    max?: number;
    min?: number;
    value: number;
    label?: string;
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    max: 5,
    min: 0,
};

/**
 * Rating component - star rating input using slider pattern.
 *
 * @accessibility
 * - Uses `role="slider"` to announce the rating as a slider
 * - Uses `aria-valuenow` for current value, `aria-valuemin` and `aria-valuemax` for range
 * - Uses `tabindex="0"` to make the element focusable (removed when disabled)
 * - Must have accessible name via `aria-label`, `aria-labelledby`, or `title`
 * - Uses `aria-disabled="true"` when disabled
 * - Uses `aria-readonly="true"` when readonly (can focus but not change)
 *
 * @example
 * ```tsx
 * // Basic rating
 * <Rating value={3} aria-label="Product rating" />
 *
 * // Readonly rating display
 * <Rating value={4.5} readonly aria-label="Average rating" />
 * ```
 *
 * @wcag 4.1.2 Name, Role, Value - slider must have accessible name and value
 */

export const Rating: KendoComponent<RatingState & RatingProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: RatingState & RatingProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        value,
        max = defaultOptions.max,
        min = defaultOptions.min,
        disabled,
        readonly,
        label,
        dir,
        ...other
    } = props;

    const listChildren: React.JSX.Element[] = [];

    const solidItems = Math.floor(value);
    const splitItems = value % 1 === 0.5;
    const outlineItems = max - Math.ceil(value);

    for (let i = 0; i < solidItems; i++) {
        listChildren.push(<RatingItem dir={dir} iconType="solid" selected/>);
    }

    if (splitItems) {
        listChildren.push(<RatingItem dir={dir} iconType="split" selected/>);
    }

    for (let i = 0; i < outlineItems; i++) {
        listChildren.push(<RatingItem dir={dir} iconType="outline"/>);
    }


    return (
        <span
            {...other}
            className={classNames(
                props.className,
                RATING_CLASSNAME,
                stateClassNames(RATING_CLASSNAME, { disabled, readonly }),
            )}
            dir={dir}
            role="slider"
            tabIndex={disabled ? undefined : 0}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-disabled={disabled ? 'true' : undefined}
            aria-readonly={readonly ? 'true' : undefined}
        >
            <span className="k-rating-container">
                {listChildren}
            </span>
            {label &&
                <span className="k-rating-label">
                    <span>{label}</span>
                </span>
            }
        </span>
    );
};

Rating.states = states;
Rating.options = options;
Rating.className = RATING_CLASSNAME;
Rating.defaultOptions = defaultOptions;
Rating.moduleName = RATING_MODULE_NAME;
Rating.folderName = RATING_FOLDER_NAME;

Rating.ariaSpec = a11ySpec.ariaSpec;

export default Rating;
