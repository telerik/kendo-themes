import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTED_CONTROL_FOLDER_NAME, SEGMENTED_CONTROL_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

SegmentedControl.ariaSpec = a11ySpec.ariaSpec;

export default SegmentedControl;
