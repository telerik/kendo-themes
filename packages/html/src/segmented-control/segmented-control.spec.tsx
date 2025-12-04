import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTED_CONTROL_FOLDER_NAME, SEGMENTED_CONTROL_MODULE_NAME } from './constants';
export const SEGMENTEDCONTROL_CLASSNAME = `k-segmented-control`;

const states = [];

const options = {};

export type KendoSegmentedControlProps = {
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
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SEGMENTEDCONTROL_CLASSNAME,
            )}
        >
            <div className="segmented-control-thumb"></div>
            { children }
        </div>
    );
};

SegmentedControl.states = states;
SegmentedControl.options = options;
SegmentedControl.className = SEGMENTEDCONTROL_CLASSNAME;
// SegmentedControl.defaultOptions = defaultOptions;
SegmentedControl.moduleName = SEGMENTED_CONTROL_MODULE_NAME;
SegmentedControl.folderName = SEGMENTED_CONTROL_FOLDER_NAME;

export default SegmentedControl;
