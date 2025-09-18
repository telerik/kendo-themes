import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Card } from './card.spec';

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
CardDeck.moduleName = Card.moduleName;
CardDeck.folderName = Card.folderName;
