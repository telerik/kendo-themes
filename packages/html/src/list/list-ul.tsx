import { classNames } from '../misc';

const className = `k-list-ul`;

export type ListUlProps = React.HTMLAttributes<HTMLUListElement> & {
    /**
     * ARIA role for the list. Use 'listbox' for selection lists, 'group' for grouped items.
     * @aria role="listbox" for selection lists, role="group" for grouped sublists
     */
    role?: 'listbox' | 'group';
    /**
     * ID of the element that labels this list (for grouped lists).
     * @aria aria-labelledby - References the group header ID
     */
    'aria-labelledby'?: string;
    /**
     * Accessible label for the list.
     * @aria aria-label - Provides accessible name when no visible label
     */
    'aria-label'?: string;
    /**
     * Unique identifier for the list. Used by aria-controls on combobox/input elements.
     * @aria id - Referenced by aria-controls="${id}"
     */
    id?: string;
};

export const ListUl = (props: ListUlProps) => {
    const { children, role, id, ...other } = props;

    return (
        <ul
            {...other}
            id={id}
            role={role}
            className={classNames(className, props.className)}
        >
            {children}
        </ul>
    );
};

/**
 * Accessibility specification for ListUl.
 * @accessibility
 * - For ungrouped lists: role="listbox" with aria-label
 * - For grouped lists: role="group" with aria-labelledby referencing group header
 */
ListUl.ariaSpec = {
    selector: '.k-list-ul',
    rules: [
        { selector: '.k-list-ul[role="listbox"]', attribute: 'role=listbox', usage: 'For ungrouped lists, the UL has the listbox role.' },
        { selector: '.k-list-ul[role="listbox"]', attribute: 'aria-label or aria-labelledby (when has accessible name)', usage: 'Accessible name for the listbox.' },
        { selector: '.k-list-ul[role="group"]', attribute: 'role=group', usage: 'For grouped sublists under a group header.' },
        { selector: '.k-list-ul[role="group"]', attribute: 'aria-labelledby (when grouped)', usage: 'References the group header ID.' },
    ]
};
