import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHECKBOX_FOLDER_NAME, CHECKBOX_MODULE_NAME } from './constants';
export const CHECKBOXGROUP_CLASSNAME = `k-checkbox-list`;

const states = [];

const options = {};

export type KendoCheckboxGroupProps = {
    layout?: 'vertical' | 'horizontal';
};

const defaultOptions = {
    layout: 'vertical',
};

export const CheckboxGroup: KendoComponent<KendoCheckboxGroupProps & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoCheckboxGroupProps &
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
CheckboxGroup.defaultOptions = defaultOptions;
CheckboxGroup.moduleName = CHECKBOX_MODULE_NAME;
CheckboxGroup.folderName = CHECKBOX_FOLDER_NAME;

export default CheckboxGroup;
