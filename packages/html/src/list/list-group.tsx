import * as React from 'react';
import { ListHeader, ListContent } from '../list';

export interface ListGroupProps {
    children?: React.ReactNode;
    label?: string;
    root?: boolean;
    virtualization?: boolean;
}


export class ListGroup extends React.Component<ListGroupProps> {

    render() {
        const {
            children,
            label,
        } = this.props;


        return (
            <>
                {label && <ListHeader>{label}</ListHeader>}
                {children && <ListContent virtualization>{children}</ListContent>}
            </>
        );
    }
}
