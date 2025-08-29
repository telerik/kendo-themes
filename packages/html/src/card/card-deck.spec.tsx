import { classNames } from '../misc';

export const CARDDECK_CLASSNAME = `k-card-deck`;

const states = [];

const options = {};

const defaultOptions = {};

export const CardDeck = (
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
