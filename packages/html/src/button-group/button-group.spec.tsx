import { classNames, optionClassNames, stateClassNames, States, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
import { BUTTON_GROUP_FOLDER_NAME, BUTTON_GROUP_MODULE_NAME } from './constants';
export const BUTTONGROUP_CLASSNAME = `k-button-group`;

const states = [
    States.disabled
];

const options = {
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoButtonGroupOptions = {
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoButtonGroupProps = KendoButtonGroupOptions & {
    stretched?: boolean;
};

export type KendoButtonGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

/**
 * @aria {role="group"} Sets the proper role for the group of buttons.
 * @aria {aria-disabled="true"} The attribute is rendered only when the entire button group is disabled.
 * @aria {aria-pressed} Specifies the current state of the ButtonGroup. Only the selected button within the group will have this attribute set to true.
 * @ux {Exclusive selection} Only one button in the group can be active at a time.
 * @ux {Multi-select} Multiple buttons can be active simultaneously when configured.
 * @ux {Disabled group} When the group is disabled, all buttons are non-interactive.
 */
export const ButtonGroup: KendoComponent<KendoButtonGroupProps & KendoButtonGroupState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoButtonGroupProps &
        KendoButtonGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode,
        disabled,
        stretched,
        ...other
    } = props;

    return (
        <div
            role="group"
            {...other}
            className={classNames(
                props.className,
                BUTTONGROUP_CLASSNAME,
                optionClassNames(BUTTONGROUP_CLASSNAME, {
                    fillMode
                }),
                stateClassNames(BUTTONGROUP_CLASSNAME, {
                    disabled
                }),
                {
                    [`${BUTTONGROUP_CLASSNAME}-stretched`]: stretched,
                }
            )}
            {...(disabled && { 'aria-disabled': 'true' })}
        >
            { props.children }
        </div>
    );
};

ButtonGroup.states = states;
ButtonGroup.options = options;
ButtonGroup.className = BUTTONGROUP_CLASSNAME;
ButtonGroup.defaultOptions = defaultOptions;
ButtonGroup.moduleName = BUTTON_GROUP_MODULE_NAME;
ButtonGroup.folderName = BUTTON_GROUP_FOLDER_NAME;

/**
 * @keyboard {Tab} Focuses the next button in the group. If the focus is on the last button, focuses the next focusable element on the page.
 * @keyboard {Shift + Tab} Focuses the previous button in the group. If the focus is on the first button, focuses the previous focusable element before the ButtonGorup.
 * @keyboard {Enter or Space} Triggers a click action on the button.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#button WAI-ARIA `button` Role Specification
 * @see https://www.w3.org/TR/wai-aria-1.2/#group WAI-ARIA `group` Role Specification
 */

export default ButtonGroup;
