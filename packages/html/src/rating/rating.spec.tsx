import { classNames, stateClassNames, States } from '../misc';

export const RATING_CLASSNAME = `k-rating`;

const states = [
    States.disabled,
    States.readonly,
];

const options = {};

const defaultProps = {};

export type RatingState = { [K in (typeof states)[number]]?: boolean };

export type RatingProps = {
    label?: string;
    dir?: "rtl" | "ltr";
};

export const Rating = (
    props: RatingState & RatingProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        disabled,
        readonly,
        label,
        dir,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                RATING_CLASSNAME,
                stateClassNames(RATING_CLASSNAME, { disabled, readonly }),
            )}
            dir={dir}
        >
            <span className="k-rating-container">
                {props.children}
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
Rating.defaultProps = defaultProps;

export default Rating;
