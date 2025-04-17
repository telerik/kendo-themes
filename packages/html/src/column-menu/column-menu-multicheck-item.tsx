import { classNames, Size } from '../misc';
import { Checkbox } from '../checkbox';

const className = `k-item`;

const options = {
    size: [Size.small, Size.medium, Size.large]
};

const states = [];

const defaultOptions = {
    size: Size.medium
};

export type KendoColumnMenuMulticheckItemOptions = {
    size?: (typeof options.size)[number] | null;
}

export type KendoColumnMenuMulticheckItemProps = KendoColumnMenuMulticheckItemOptions & {
    text: string;
}

export const ColumnMenuMulticheckItem = (
    props: KendoColumnMenuMulticheckItemProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        size,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                className
            )}
        >
            <label className="k-label k-checkbox-label">
                <Checkbox size={size} /><span>{text}</span>
            </label>
        </li>
    );
};

ColumnMenuMulticheckItem.states = states;
ColumnMenuMulticheckItem.options = options;
ColumnMenuMulticheckItem.defaultOptions = defaultOptions;

export default ColumnMenuMulticheckItem;
