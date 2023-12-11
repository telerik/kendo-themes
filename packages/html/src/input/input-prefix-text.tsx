import { classNames } from '../misc';

const className = `k-input-prefix-text`;

export const InputPrefixText = (props: React.HTMLAttributes<HTMLSpanElement>) => {

    const {
        children,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                className,
                props.className
            )}>
            {children}
        </span>
    );
};
