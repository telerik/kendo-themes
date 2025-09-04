import { classNames, stateClassNames } from '../misc';

import { KendoComponent } from '../_types/component';

export const CARD_WRAP_CLASSNAME = `k-card-wrap`;

const states = ['focus', 'selected'];

const options = {};

const defaultOptions = {};

export type KendoCardWrapOptions = {};

export type KendoCardWrapProps = KendoCardWrapOptions & {};

export type KendoCardWrapState = { [K in (typeof states)[number]]?: boolean };

export const CardWrap: KendoComponent<KendoCardWrapProps & KendoCardWrapState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCardWrapProps & KendoCardWrapState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        selected,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARD_WRAP_CLASSNAME,
                stateClassNames(CARD_WRAP_CLASSNAME, {
                    focus,
                    selected,
                }),
            )}>
            {props.children}
        </div>
    );
};

CardWrap.states = states;
CardWrap.options = options;
CardWrap.className = CARD_WRAP_CLASSNAME;
CardWrap.defaultOptions = defaultOptions;
CardWrap.moduleName = "card";
CardWrap.folderName = "card";

export default CardWrap;
