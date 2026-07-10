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

/**
 * @aria {aria-invalid="true"} Rendered only when the radio button is in a form and announces the invalid state.
 * @ux {Exclusive selection} Selecting one radio button automatically deselects all others in the group.
 * @ux {Layout} Items can be arranged horizontally or vertically.
 * @ux {Disabled group} When the group is disabled, all contained radio buttons are non-interactive.
 */
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

export default RadioGroup;
