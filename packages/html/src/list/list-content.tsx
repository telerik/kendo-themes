import { classNames } from '../misc';
import { ListUl } from './list-ul';

const className = `k-list-content`;

export type KendoListContentProps = {
    virtualization?: boolean;
    /** When true, content gets role="listbox" and child ULs get role="group". */
    grouping?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    listboxId?: string;
};

/**
 * @aria {role="listbox"} Applied to the content element when grouping=true.
 * @aria {aria-label} Accessible name for the grouped listbox.
 * @aria {aria-labelledby} References an external label element.
 * @aria {id} Referenced by aria-controls on the associated combobox input.
 */
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
 */
