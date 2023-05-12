import { classNames } from '../misc';

export const CARDDECK_CLASSNAME = `k-card-deck`;

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
