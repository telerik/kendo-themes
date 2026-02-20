import { classNames } from '../misc';
import { ListUl } from './list-ul';

const className = `k-list-content`;

export type KendoListContentProps = {
    virtualization?: boolean;
    /**
     * When true, indicates grouped content where ListContent gets role="listbox"
     * and child ULs get role="group".
     */
    grouping?: boolean;
    /**
     * Accessible label for grouped listbox.
     * @aria aria-label - Provides accessible name for grouped listbox
     */
    'aria-label'?: string;
    /**
     * ID of element that labels this listbox.
     * @aria aria-labelledby - References external label element
     */
    'aria-labelledby'?: string;
    /**
     * ID for the listbox element. Used by aria-controls on the combobox input.
     * @aria id - Referenced by aria-controls="${id}"
     */
    listboxId?: string;
};

export const ListContent = (
    props: KendoListContentProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        grouping,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        listboxId,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(className, props.className)}
            role={grouping ? 'listbox' : undefined}
            id={grouping ? listboxId : undefined}
            aria-label={grouping ? ariaLabel : undefined}
            aria-labelledby={grouping ? ariaLabelledby : undefined}
        >
            {grouping ? props.children : <ListUl role="listbox" id={listboxId} aria-label={ariaLabel} aria-labelledby={ariaLabelledby}>{props.children}</ListUl>}
            { virtualization && <div className="k-height-container"><div></div></div> }
        </div>
    );
};

/**
 * Accessibility specification for ListContent.
 * @accessibility
 * - For grouped lists: role="listbox" on ListContent, role="group" on child ULs
 * - For ungrouped lists: role="listbox" on the inner UL element
 */
ListContent.ariaSpec = {
    selector: '.k-list-content',
    rules: [
        { selector: '.k-list-content[role="listbox"]', attribute: 'role=listbox', usage: 'For grouped lists, the list content container has the listbox role.' },
        { selector: '.k-list-content[role="listbox"]', attribute: 'aria-label or aria-labelledby (when has accessible name)', usage: 'Accessible name for the listbox.' },
    ]
};
