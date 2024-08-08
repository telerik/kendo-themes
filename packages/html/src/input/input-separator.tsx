import { classNames } from '../misc';

const className = `k-input-separator`;

export type InputSeparatorProps = {
    direction?: "horizontal" | "vertical";
};

const defaultOptions = {
    direction: "vertical"
};

export const InputSeparator = (props:
    React.HTMLAttributes<HTMLSpanElement> &
    InputSeparatorProps
) => {
    const {
        direction = defaultOptions.direction,
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
