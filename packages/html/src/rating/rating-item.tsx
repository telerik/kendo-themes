import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const RATINGITEM_CLASSNAME = `k-rating-item`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled,
];

const options = {};

export type RatingItemState = { [K in (typeof states)[number]]?: boolean };

export type RatingItemProps = {
    iconType?: "solid" | "outline" | "split";
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    iconType: "solid",
};


export const RatingItem = (
    props: RatingItemState & RatingItemProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        iconType = defaultOptions.iconType,
        hover,
        focus,
        selected,
        disabled,
        dir,
        ...other
    } = props;

    let itemContent;

    switch (iconType) {
        case "split":
            itemContent =
                <>
                    <span className="k-rating-precision-complement">
                        <Icon icon="star-outline" size="xlarge"></Icon>
                    </span>
                    <span className="k-rating-precision-part" style={{ clipPath: `inset(${dir === "rtl" ? "0px 0px 0px 50%" : "0px 50% 0px 0px"})` }}>
                        <Icon icon="star" size="xlarge"></Icon>
                    </span>
                    <span style={{ width: "24px", height: "24px", display: "block" }}></span>
                </>
            ;
            break;
        case "outline":
            itemContent = <Icon icon="star-outline" size="xlarge"></Icon>;
            break;
        case "solid":
            itemContent = <Icon icon="star" size="xlarge"></Icon>;
            break;
        default:
            return undefined;
    }

    return (
        <span
            {...other}
            className={classNames(
                RATINGITEM_CLASSNAME,
                stateClassNames(RATINGITEM_CLASSNAME, { hover, focus, selected, disabled }),
            )}
            dir={dir}
        >
            {itemContent}
        </span>
    );
};

RatingItem.states = states;
RatingItem.options = options;
RatingItem.className = RATINGITEM_CLASSNAME;
RatingItem.defaultOptions = defaultOptions;

export default RatingItem;
