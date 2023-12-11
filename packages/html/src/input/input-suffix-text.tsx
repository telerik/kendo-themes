import { classNames } from '../misc';

const className = `k-input-suffix-text`;

export const InputSuffixText = (props: React.HTMLAttributes<HTMLSpanElement>) => {

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
