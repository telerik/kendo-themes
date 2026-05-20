import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHIP_FOLDER_NAME, CHIP_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const CHIPLIST_CLASSNAME = `k-chip-list`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoChipListOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoChipListProps = KendoChipListOptions & {
    /** @aria When true, adds aria-multiselectable="true" to indicate multiple selection. */
    multiselectable?: boolean;
    /** @aria Accessible name for the chip list. Required for the listbox role. */
    ariaLabel?: string;
};

const defaultOptions = {
};

export const ChipList: KendoComponent<KendoChipListProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChipListProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        multiselectable,
        ariaLabel,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CHIPLIST_CLASSNAME,
                optionClassNames(CHIPLIST_CLASSNAME, {
                    size,
                }),
            )}
            role={props.role || "listbox"}
            aria-label={props.role === 'none' ? undefined : (ariaLabel || 'chip list')}
            aria-orientation={props.role === 'none' ? undefined : "horizontal"}
            aria-multiselectable={multiselectable ? 'true' : undefined}
        >
            {props.children}
        </div>
    );
};

ChipList.states = states;
ChipList.options = options;
ChipList.className = CHIPLIST_CLASSNAME;
ChipList.defaultOptions = defaultOptions;
ChipList.moduleName = CHIP_MODULE_NAME;
ChipList.folderName = CHIP_FOLDER_NAME;

ChipList.ariaSpec = a11ySpec.ariaSpec;

export default ChipList;
