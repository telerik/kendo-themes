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
};

export type KendoSegmentedControlState = { [K in (typeof states)[number]]?: boolean };

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
            <div className="k-segmented-control-thumb" aria-hidden="true"></div>
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
 * @see Button ariaSpec for base button accessibility within segmented control buttons
 */
SegmentedControl.ariaSpec = {
    selector: '.k-segmented-control',
    rules: [
        { selector: '.k-segmented-control', attribute: 'role=group', usage: 'Sets the proper role for the group of buttons.' },
        { selector: '.k-segmented-control-button', attribute: 'role=button or nodeName=button', usage: 'Each button must have the appropriate button role.' },
        { selector: '.k-segmented-control-button.k-selected', attribute: 'aria-pressed=true', usage: 'Only the selected button within the group will have this attribute set to true.' },
        { selector: '.k-segmented-control-button.k-disabled', attribute: 'aria-disabled=true', usage: 'Indicates that the button is disabled and cannot be interacted with.' },
        { selector: '.k-segmented-control-thumb', attribute: 'aria-hidden=true', usage: 'The thumb is purely decorative and should be hidden from screen readers.' },
    ]
};

export default SegmentedControl;
