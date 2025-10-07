import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CARD_FOLDER_NAME, CARD_MODULE_NAME } from './constants';

export const CARDDECK_SCROLLWRAP_CLASSNAME = `k-card-deck-scrollwrap`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCardDeckScrollwrapOptions = {};

export type KendoCardDeckScrollwrapProps = KendoCardDeckScrollwrapOptions & {};

export const CardDeckScrollwrap: KendoComponent<KendoCardDeckScrollwrapProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCardDeckScrollwrapProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARDDECK_SCROLLWRAP_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

CardDeckScrollwrap.states = states;
CardDeckScrollwrap.options = options;
CardDeckScrollwrap.className = CARDDECK_SCROLLWRAP_CLASSNAME;
CardDeckScrollwrap.defaultOptions = defaultOptions;
CardDeckScrollwrap.moduleName = CARD_MODULE_NAME;
CardDeckScrollwrap.folderName = CARD_FOLDER_NAME;

export default CardDeckScrollwrap;
