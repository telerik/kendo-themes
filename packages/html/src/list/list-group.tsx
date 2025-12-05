import { ListHeader, ListContent } from '../list';

export type KendoListGroupProps = {
    root?: boolean;
    virtualization?: boolean;
    label?: string;
    groupIcon?: boolean;
    groupIconName?: string;
};

export const ListGroup = (
    props: KendoListGroupProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        virtualization,
        label,
    } = props;

    return (
        <>
            {label && <ListHeader>{label}</ListHeader>}
            {props.children && <ListContent virtualization={virtualization}>{props.children}</ListContent>}
        </>
    );
};
