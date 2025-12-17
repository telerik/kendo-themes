import { ListHeader, ListContent } from '../list';

export type KendoListGroupProps = {
    root?: boolean;
    virtualization?: boolean;
    label?: string;
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-multiselectable'?: 'true' | 'false';
};

export const ListGroup = (
    props: KendoListGroupProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        label,
        role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-multiselectable': ariaMultiselectable,
    } = props;

    return (
        <>
            {label && <ListHeader>{label}</ListHeader>}
            {props.children && <ListContent
                virtualization={virtualization}
                role={role}
                ulRole="group"
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-multiselectable={ariaMultiselectable}
            >{props.children}</ListContent>}
        </>
    );
};
