import { classNames } from '../misc';

export const RADIOGROUP_CLASSNAME = `k-radio-list`;

const states = [];

const options = {};

export type KendoRadioGroupProps = {
    layout?: 'vertical' | 'horizontal';
};

export const RadioGroup = (
    props: KendoRadioGroupProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = 'vertical',
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                RADIOGROUP_CLASSNAME,
                {
                    [`k-list-${layout}`]: layout,
                },
            )}
        >
            {props.children}
        </ul>
    );
};

RadioGroup.states = states;
RadioGroup.options = options;
RadioGroup.className = RADIOGROUP_CLASSNAME;

export default RadioGroup;
