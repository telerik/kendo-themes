import { classNames } from '../misc';

const className = `k-no-data`;

export const NoData = (props: React.HTMLAttributes<HTMLSpanElement>) => {
    const { children, ...other } = props;

    return (
        <span {...other} className={classNames(className, props.className)}>
            {children}
        </span>
    );
};
