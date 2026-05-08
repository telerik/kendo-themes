import { SvgIcon } from '../icon';
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

// Remove after adoption of v5 of the kendo-icons
// Those icons should NOT be hardcoded and should come from the
// kendo-icons package and be changed to "star" (solid) and "star" (outline).
const SolidStarIcon = {
    name: 'star',
    content: '<path d="M256 391.5 117.2 480 154 314.1 32 202.4 192.9 188 256 32l63.1 156L480 202.4 358 314.1 394.8 480z"></path>',
    viewBox: '0 0 512 512'
};

const OutlineStarIcon = {
    name: 'star-outline',
    content: '<path d="M480 202.4 319.1 188 256 32l-63.1 156L32 202.4l122 111.7L117.2 480 256 391.5 394.8 480 358 314.1zM256 353.6l-90.8 57.9 24-108.5-82.1-75.2 108.1-9.7L256 117.3l40.8 100.8 108.1 9.7-82.1 75.2 24.1 108.5z"></path>',
    viewBox: '0 0 512 512'
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
                        <SvgIcon className='k-icon' icon={OutlineStarIcon} size="xlarge" />
                    </span>
                    <span className="k-rating-precision-part" style={{ clipPath: `inset(${dir === "rtl" ? "0px 0px 0px 50%" : "0px 50% 0px 0px"})` }}>
                        <SvgIcon className='k-icon' icon={SolidStarIcon} size="xlarge" />
                    </span>
                    <span style={{ width: "24px", height: "24px", display: "block" }}></span>
                </>
            ;
            break;
        case "outline":
            itemContent = <SvgIcon className='k-icon' icon={OutlineStarIcon} size="xlarge" />;
            break;
        case "solid":
            itemContent = <SvgIcon className='k-icon' icon={SolidStarIcon} size="xlarge" />;
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
