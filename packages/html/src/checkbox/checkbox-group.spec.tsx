import { classNames } from '../misc';

export const CHECKBOXGROUP_CLASSNAME = `k-checkbox-list`;

const states = [];

const options = {};

export type KendoCheckboxGroupProps = {
    layout?: 'vertical' | 'horizontal';
};

const defaultProps = {
    layout: 'vertical',
};

export const CheckboxGroup = (
    props: KendoCheckboxGroupProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = defaultProps.layout,
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
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
