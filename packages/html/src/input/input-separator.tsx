import { classNames } from '../misc';

const className = `k-input-separator`;

export type InputSeparatorProps = {
    direction?: "horizontal" | "vertical";
};

const defaultProps = {
    direction: "vertical"
};

export const InputSeparator = (props:
    React.HTMLAttributes<HTMLSpanElement> &
    InputSeparatorProps
) => {
    const {
        direction = defaultProps.direction,
        ...other
    } = props;


    return (
        <span
            {...other}
            className={classNames(
                className,
                props.className,
                {
                    [`${className}-${direction}`]: direction,
                }
            )}
        />
    );
};
