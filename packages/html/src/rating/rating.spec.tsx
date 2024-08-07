import { classNames, stateClassNames, States } from '../misc';
import RatingItem from './rating-item';

export const RATING_CLASSNAME = `k-rating`;

const states = [
    States.disabled,
    States.readonly,
];

const options = {};

export type RatingState = { [K in (typeof states)[number]]?: boolean };

export type RatingProps = {
    max?: number;
    value: number;
    label?: string;
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    max: 5,
};

export const Rating = (
    props: RatingState & RatingProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        value,
        max = defaultOptions.max,
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

export default Rating;
