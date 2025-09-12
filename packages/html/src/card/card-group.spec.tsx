import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';

export const CARD_GROUP_CLASSNAME = `k-card-group`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCardGroupOptions = {};

export type KendoCardGroupProps = KendoCardGroupOptions & {};

export const CardGroup: KendoComponent<KendoCardGroupProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCardGroupProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARD_GROUP_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

CardGroup.states = states;
CardGroup.options = options;
CardGroup.className = CARD_GROUP_CLASSNAME;
CardGroup.defaultOptions = defaultOptions;
CardGroup.moduleName = "card";
CardGroup.folderName = "card";

export default CardGroup;
