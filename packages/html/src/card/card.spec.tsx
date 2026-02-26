import { classNames, optionClassNames, stateClassNames, States, ThemeColor } from '../misc';
import { CardCallout } from './card-callout';

import { KendoComponent } from '../_types/component';
import { CARD_FOLDER_NAME, CARD_MODULE_NAME } from './constants';
export const CARD_CLASSNAME = `k-card`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.primary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
    ],
};

const defaultOptions = {};

export type KendoCardOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoCardProps = KendoCardOptions & {
    orientation?: null | 'vertical' | 'horizontal';
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
};

export type KendoCardState = { [K in (typeof states)[number]]?: boolean };

export const Card: KendoComponent<KendoCardProps & KendoCardState & React.HTMLAttributes<HTMLDivElement>> = (
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
                    [`k-card-${orientation}`]: orientation,
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
Card.defaultOptions = defaultOptions;
Card.moduleName = CARD_MODULE_NAME;
Card.folderName = CARD_FOLDER_NAME;

/**
 * Accessibility specification for Card.
 *
 * The Card component is a UI container with styles for organized content.
 * It does not have WAI-ARIA and keyboard navigation unless used in a Card List.
 *
 * @wcag 1.3.1 Info and Relationships - semantic container structure
 */
Card.ariaSpec = {
    selector: '.k-card',
    rules: [
        { selector: '.k-card-list .k-card', attribute: 'role=listitem', usage: 'When the card is located in a list, it should have the listitem role.' },
        { selector: '.k-card-list .k-card', attribute: 'tabindex=0', usage: 'The card component is focusable when navigatable.' },
        { selector: '.k-card-list .k-card', attribute: 'aria-describedby=.k-card-title id', usage: 'Associate the card to the title element.' },
        { selector: '.k-card-list .k-card', attribute: 'aria-keyshortcuts=Enter', usage: 'Announces the bound Enter key that enables navigation inside the card.' },
    ]
};

export default Card;
