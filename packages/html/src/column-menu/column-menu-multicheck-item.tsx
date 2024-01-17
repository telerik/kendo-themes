import { classNames } from '../misc';
import { Checkbox } from '../checkbox';

const className = `k-item`;

export type KendoColumnMenuMulticheckItemProps = {
    text: string;
}

export const ColumnMenuMulticheckItem = (
    props: KendoColumnMenuMulticheckItemProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
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
                <Checkbox /><span>{text}</span>
            </label>
        </li>
    );
};