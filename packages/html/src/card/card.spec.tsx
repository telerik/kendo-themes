import { classNames, stateClassNames, States } from '../misc';
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

const options = {};

const defaultOptions = {};

export type KendoCardOptions = {};

export type KendoCardProps = KendoCardOptions & {
    orientation?: null | 'vertical' | 'horizontal';
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
};

export type KendoCardState = { [K in (typeof states)[number]]?: boolean };

/**
 * @ux {Content container} Groups related content in a visually elevated surface.
 * @ux {Header and footer} Optional header and footer sections hold titles and actions.
 * @ux {Media} Supports an image or other media element at the top of the card.
 * @aria {role="listitem"} Required when the card is located in a `.k-card-list`.
 * @aria {tabindex="0"} The card is focusable when navigatable; inner elements are not focusable until Enter is pressed.
 * @aria {aria-describedby=".k-card-title id"} Associates the card with its title element.
 * @aria {aria-keyshortcuts="Enter"} Announces the Enter key that enables navigation inside the card.
 * @ux {Actions} Optional action buttons are placed in the card body or footer.
 * @ux {No built-in keyboard support} The Card has no ARIA role or keyboard navigation unless used in a Card List.
 */
export const Card: KendoComponent<KendoCardProps & KendoCardState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCardProps &
        KendoCardState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation,
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
 * @keyboard {Enter} Enables navigation inside a navigatable card.
 * @keyboard {Tab} Moves focus through the elements inside the card, following their own keyboard navigation sequence.
 */

export default Card;
