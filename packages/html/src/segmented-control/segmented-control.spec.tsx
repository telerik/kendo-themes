import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTED_CONTROL_FOLDER_NAME, SEGMENTED_CONTROL_MODULE_NAME } from './constants';
export const SEGMENTED_CONTROL_CLASSNAME = `k-segmented-control`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
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
        >
            <div className="k-segmented-control-thumb"></div>
            { children }
        </div>
    );
};

SegmentedControl.states = states;
SegmentedControl.options = options;
SegmentedControl.className = SEGMENTED_CONTROL_CLASSNAME;
SegmentedControl.moduleName = SEGMENTED_CONTROL_MODULE_NAME;
SegmentedControl.folderName = SEGMENTED_CONTROL_FOLDER_NAME;

export default SegmentedControl;
