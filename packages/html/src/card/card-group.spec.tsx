import { classNames } from '../misc';

export const CARD_GROUP_CLASSNAME = `k-card-group`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCardGroupOptions = {};

export type KendoCardGroupProps = KendoCardGroupOptions & {};

export const CardGroup = (
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

export default CardGroup;
