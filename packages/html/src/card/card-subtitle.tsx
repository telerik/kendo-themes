import { classNames } from '../utils';

export const CARDSUBTITLE_CLASSNAME = `k-card-subtitle`;

export const CardSubtitle = (
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
                CARDSUBTITLE_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
