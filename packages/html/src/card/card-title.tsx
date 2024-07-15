import { classNames, stateClassNames, States } from '../misc';

export const CARDTITLE_CLASSNAME = `k-card-title`;

const states = [
    States.hover,
    States.focus,
];

export type KendoCardTitleState = { [K in (typeof states)[number]]?: boolean };

export const CardTitle = (
    props: KendoCardTitleState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        focus,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARDTITLE_CLASSNAME,
                stateClassNames(CARDTITLE_CLASSNAME, {
                    hover,
                    focus
                }),
            )}>
            {props.children}
        </div>
    );
};


CardTitle.states = states;
CardTitle.className = CARDTITLE_CLASSNAME;

export default CardTitle;
