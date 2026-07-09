import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTED_CONTROL_FOLDER_NAME, SEGMENTED_CONTROL_MODULE_NAME } from './constants';
export const SEGMENTED_CONTROL_CLASSNAME = `k-segmented-control`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoSegmentedControlOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoSegmentedControlProps = KendoSegmentedControlOptions & {
    stretched?: boolean;
    children?: React.ReactNode;
    thumbStyles?: React.CSSProperties;
};

export type KendoSegmentedControlState = { [K in (typeof states)[number]]?: boolean };

/**
 * @aria {role="group"} Sets the proper role for the group of buttons.
 * @aria {aria-hidden="true"} The thumb is purely decorative and should be hidden from screen readers.
 */
export const SegmentedControl: KendoComponent<KendoSegmentedControlProps & KendoSegmentedControlState & React.HTMLAttributes<HTMLDivElement>> = (
    props:
        KendoSegmentedControlProps &
        KendoSegmentedControlState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        stretched,
        children,
        thumbStyles,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SEGMENTED_CONTROL_CLASSNAME,
                optionClassNames(SEGMENTED_CONTROL_CLASSNAME, {
                    size
                }),
                {
                    [`${SEGMENTED_CONTROL_CLASSNAME}-stretched`]: stretched
                }
            )}
            role="group"
        >
            <div className="k-segmented-control-thumb" aria-hidden="true" style={thumbStyles}/>
            { children }
        </div>
    );
};

SegmentedControl.states = states;
SegmentedControl.options = options;
SegmentedControl.className = SEGMENTED_CONTROL_CLASSNAME;
SegmentedControl.moduleName = SEGMENTED_CONTROL_MODULE_NAME;
SegmentedControl.folderName = SEGMENTED_CONTROL_FOLDER_NAME;

/**
 * @keyboard {Tab} Focuses the next button in the control. If the focus is on the last button, focuses the next focusable element on the page.
 * @keyboard {Shift + Tab} Focuses the previous button in the control. If the focus is on the first button, focuses the previous focusable element before the Segmented Control.
 * @keyboard {Enter or Space} Activates the focused button and selects it.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#button WAI-ARIA `button` Role Specification
 * @see https://www.w3.org/TR/wai-aria-1.2/#group WAI-ARIA `group` Role Specification
 */

export default SegmentedControl;
