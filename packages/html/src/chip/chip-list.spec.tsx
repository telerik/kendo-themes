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

/**
 * Accessibility specification for ChipList.
 *
 * When selection is disabled, the ChipList role should be set to `none`
 * and child Chips should retain their standalone `role=button`.
 *
 * @wcag 4.1.2 Name, Role, Value - listbox pattern with option children
 * @see Chip.ariaSpec for standalone chip rules
 */
ChipList.ariaSpec = {
    selector: '.k-chip-list',
    sectionLinks: { chip: 'chip' },
    seeAlso: ['chip'],
    rules: [
        { selector: '.k-chip-list', attribute: 'role=listbox', usage: 'Announces the list role of the chip list.' },
        { selector: '.k-chip-list', attribute: 'aria-label or aria-labelledby', usage: 'Adds label to the ChipList element. ListBox element requires an accessible name.' },
        { selector: '.k-chip-list', attribute: 'aria-orientation=horizontal', usage: 'Specifies the horizontal orientation of the chiplist.' },
        { selector: '.k-chip-list', attribute: 'aria-multiselectable=true (when multiple selection)', usage: 'Announces the multiple selection ability of the chiplist.' },
        { section: 'chip', selector: '.k-chip-list .k-chip', attribute: 'role=option', usage: 'Announces the chip is an option inner component of the chip list.' },
        { section: 'chip', selector: '.k-chip-list .k-chip.k-selected', attribute: 'aria-selected=true', usage: 'Announces the chip is selected.' },
        { section: 'chip', selector: '.k-chip-list .k-chip:not(.k-selected)', attribute: 'aria-selected=false', usage: 'Announces the chip is not selected.' },
        { section: 'chip', selector: '.k-chip-list .k-chip:has(.k-i-x-circle), .k-chip-list .k-chip:has(.k-svg-i-x-circle)', attribute: 'aria-keyshortcuts=Enter Delete', usage: 'Announces the Delete action along with the default Enter key.' },
    ]
};

export default ChipList;
