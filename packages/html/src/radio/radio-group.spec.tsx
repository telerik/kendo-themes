import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { RADIO_FOLDER_NAME, RADIO_MODULE_NAME } from './constants';
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
            role="radiogroup"
        >
            {props.children}
        </ul>
    );
};

RadioGroup.states = states;
RadioGroup.options = options;
RadioGroup.className = RADIOGROUP_CLASSNAME;
RadioGroup.defaultOptions = defaultOptions;
RadioGroup.moduleName = RADIO_MODULE_NAME;
RadioGroup.folderName = RADIO_FOLDER_NAME;

/**
 * @ariaSpec
 * RadioGroup implements the WAI-ARIA radiogroup pattern.
 *
 * - Container: role="radiogroup"
 * - Items: role="none" to avoid nested interactive issues
 */
RadioGroup.ariaSpec = {
    selector: '.k-radio-list',
    rules: [
        { selector: '.k-radio-list', attribute: 'role=radiogroup', usage: 'Announces the radiogroup role of the element.' },
        { selector: '.k-radio-list-item', attribute: 'role=none', usage: 'Due to issues with nested items, forces a no-role state.' },
        { selector: '.k-radio', attribute: 'readonly or aria-readonly (when readonly)', usage: 'The attribute is rendered only when the radio button is read-only.' },
        { selector: '.k-radio', attribute: 'aria-invalid=true (when invalid)', usage: 'The attribute is rendered only when the radio button is in a form and announces the invalid state of the component.' },
        { selector: '.k-radio-list-item.k-disabled .k-radio', attribute: 'disabled or aria-disabled (when disabled)', usage: 'The attribute is rendered only when the radio button is disabled.' },
    ]
};

export default RadioGroup;
