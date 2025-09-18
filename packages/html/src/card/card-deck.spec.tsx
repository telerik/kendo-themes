import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CARD_FOLDER_NAME, CARD_MODULE_NAME } from './constants';

export const CARDDECK_CLASSNAME = `k-card-deck`;

const states = [];

const options = {};

const defaultOptions = {};

export const CardDeck: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARDDECK_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

CardDeck.states = states;
CardDeck.options = options;
CardDeck.className = CARDDECK_CLASSNAME;
CardDeck.defaultOptions = defaultOptions;
CardDeck.moduleName = CARD_MODULE_NAME;
CardDeck.folderName = CARD_FOLDER_NAME;
