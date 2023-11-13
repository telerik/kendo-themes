import { classNames, optionClassNames, stateClassNames, States, ThemeColor } from '../misc';
import { CardCallout } from './card-callout';

export const CARD_CLASSNAME = `k-card`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {
    themeColor: [
        ThemeColor.primary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
    ],
};

const defaultProps = {};

export type KendoCardOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoCardProps = KendoCardOptions & {
    orientation?: null | 'vertical' | 'horizontal';
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
};

export type KendoCardState = { [K in (typeof states)[number]]?: boolean };

export const Card = (
    props: KendoCardProps &
        KendoCardState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation,
        themeColor,
        callout,
        hover,
        focus,
        selected,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARD_CLASSNAME,
                optionClassNames(CARD_CLASSNAME, {
                    themeColor,
                }),
                stateClassNames(CARD_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                }),
                {
                    [`k-card-${orientation}`]: orientation === "horizontal",
                    'k-card-with-callout': callout,
                },
            )}>
            {callout && callout !== 'true' &&
                <CardCallout callout={callout} />
            }
            <>{props.children}</>
        </div>

    );
};

Card.states = states;
Card.options = options;
Card.className = CARD_CLASSNAME;
Card.defaultProps = defaultProps;

export default Card;
