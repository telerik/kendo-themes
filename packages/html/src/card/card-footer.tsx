import { classNames } from '../misc';

export const CARDFOOTER_CLASSNAME = `k-card-footer`;

export const CardFooter = (
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
                CARDFOOTER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
