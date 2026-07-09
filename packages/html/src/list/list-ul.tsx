import { classNames } from '../misc';

const className = `k-list-ul`;

export type ListUlProps = React.HTMLAttributes<HTMLUListElement> & {
    role?: 'listbox' | 'group';
    'aria-labelledby'?: string;
    'aria-label'?: string;
    id?: string;
};

/**
 * @aria {role="listbox"} For selection lists; role="group" for grouped sublists.
 * @aria {aria-labelledby} References the group header ID.
 * @aria {aria-label} Accessible name when no visible label exists.
 * @aria {id} Referenced by aria-controls on the associated combobox or input.
 */
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
 */
