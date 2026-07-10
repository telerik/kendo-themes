import { classNames, stateClassNames, States } from '../misc';
import RatingItem from './rating-item';

import { KendoComponent } from '../_types/component';
import { RATING_FOLDER_NAME, RATING_MODULE_NAME } from './constants';
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

 * @aria {role="slider"} Announces the slider role of the Rating element.
 * @aria {aria-label|aria-labelledby|title} The Rating needs an accessible name to be assigned to it.
 * @aria {aria-valuenow} Specifies the currently selected value in the Rating.
 * @aria {aria-valuemin} Specifies the minimum available value in the Rating.
 * @aria {aria-valuemax} Specifies the maximum available value in the Rating.
 * @aria {tabindex="0"} The element must be focusable. Disabled ratings are removed from tab order.
 * @aria {aria-disabled="true"} Rendered only when the Rating is disabled.
 * @aria {aria-readonly="true"} Rendered only when the Rating is readonly. Readonly ratings remain focusable but their value cannot be changed.
 * @ux {Selection} Clicking an icon selects the corresponding rating value.
 * @ux {Hover preview} Hovering over icons previews the rating value before committing.
 * @ux {Half precision} Supports half-value increments when half-precision mode is enabled.
 * @ux {Read-only} When read-only, the current rating is displayed but cannot be changed.
 * @ux {Disabled state} When disabled, the rating cannot be changed.
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

/**
 * @keyboard {ArrowDown or ArrowLeft} Decreases value by one rating step.
 * @keyboard {ArrowUp or ArrowRight} Increases value by one rating step.
 * @keyboard {Home} Sets value to the Min available value in the Rating.
 * @keyboard {End} Sets value to the Max available value in the Rating.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#slider WAI-ARIA specification for slider

 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value — slider must have accessible name and value
 */

export default Rating;
