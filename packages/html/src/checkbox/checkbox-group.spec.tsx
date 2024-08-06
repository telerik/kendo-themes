import { classNames } from '../misc';

export const CHECKBOXGROUP_CLASSNAME = `k-checkbox-list`;

const states = [];

const options = {};

export type KendoCheckboxGroupProps = {
    layout?: 'vertical' | 'horizontal';
};

export const CheckboxGroup = (
    props: KendoCheckboxGroupProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = "vertical",
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                CHECKBOXGROUP_CLASSNAME,
                {
                    [`k-list-${layout}`]: layout,
                },
            )}
        >
            {props.children}
        </ul>
    );
};

CheckboxGroup.states = states;
CheckboxGroup.options = options;
CheckboxGroup.className = CHECKBOXGROUP_CLASSNAME;

export default CheckboxGroup;
