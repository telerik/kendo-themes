import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const RADIOGROUP_CLASSNAME = `k-radio-list`;

const states = [];

const options = {};

export type KendoRadioGroupProps = {
    layout?: 'vertical' | 'horizontal';
};

const defaultOptions = {
    layout: 'vertical',
};

export const RadioGroup: KendoComponent<KendoRadioGroupProps & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoRadioGroupProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        layout = defaultOptions.layout,
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
RadioGroup.defaultOptions = defaultOptions;
RadioGroup.moduleName = "radio";
RadioGroup.folderName = "radio";

export default RadioGroup;
