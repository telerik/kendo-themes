import { classNames, stateClassNames, States } from '../misc';
import { CardCallout } from './card-callout';

import { KendoComponent } from '../_types/component';
import { CARD_FOLDER_NAME, CARD_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

Card.ariaSpec = a11ySpec.ariaSpec;

export default Card;
