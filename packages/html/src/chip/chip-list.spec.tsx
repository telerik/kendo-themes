import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { CHIP_FOLDER_NAME, CHIP_MODULE_NAME } from './constants';
export const CHIPLIST_CLASSNAME = `k-chip-list`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoChipListOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoChipListProps = KendoChipListOptions & {
    multiselectable?: boolean;
    ariaLabel?: string;
};

const defaultOptions = {
};

/**
 * @aria {role="listbox"} Announces the list role of the chip list.
 * @aria {aria-orientation="horizontal"} Specifies the horizontal orientation of the chiplist.
 * @aria {role="option"} Announces the chip is an option inner component of the chip list.
 * @aria {aria-selected="true"} Announces the chip is selected.
 * @aria {aria-selected="false"} Announces the chip is not selected.
 * @aria {aria-keyshortcuts="Enter Delete"} Announces the Delete action along with the default Enter key.
 * @aria {aria-multiselectable="true"} Indicates multiple selections are allowed.
 * @aria {aria-label} Accessible name for the chip list; required when role="listbox".
 */
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

export default ChipList;
