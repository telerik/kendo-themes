import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { ListItem, ListGroup, ListItemProps, ListContent, ListGroupItem } from '../list';
import { NoData } from '../nodata';

export interface ListProps {
    children?: React.ReactElement[];
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    virtualization?: boolean;
    framework?: null | 'universal' | 'angular' | 'blazor';
}


export class List extends React.Component<ListProps> {

    static defaultProps = {
        size: 'medium',
    };

    render() {
        const {
            children,
            className,
            size,
            virtualization,
            framework,
        } = this.props;

        let listHeader: string | undefined;
        let listGroup: string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
        let listContent: string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
        const listChildren : React.ReactElement<ListItemProps>[] = [];

        if (children) {
            children.map((child, index) => {
                if ( child.type === ListGroup) {
                    if (child.props.root === true) {
                        listHeader = child.props.label;

                        child.props.children.map( (optChild, index) => {
                            listChildren.push(
                                <ListItem
                                    key={`optChild-${index}-${new Date().getTime()}`}
                                    {...optChild.props}
                                />
                            );
                        });

                    } else {
                        if ( framework === 'angular' || framework === 'blazor' ) {
                            listChildren.push(
                                <ListGroupItem
                                    key={`listChild-${index}`}
                                    {...child.props}
                                >
                                    {child.props.label}
                                </ListGroupItem>
                            );

                            child.props.children.map( (optChild, index) => {
                                listChildren.push(
                                    <ListItem
                                        key={`fwOptChild-${index}-${new Date().getTime()}`}
                                        {...optChild.props}
                                    />
                                );
                            });
                        } else {
                            child.props.children.forEach( ( optChild, index ) => {
                                let groupLabel = '';

                                if ( index === 0 ) {
                                    groupLabel = child.props.label;
                                }

                                listChildren.push(
                                    <ListItem
                                        className={index === 0 ? 'k-first' : ''}
                                        key={`groupLabel-${index}-${new Date().getTime()}`}
                                        {...optChild.props}
                                        groupLabel={groupLabel}
                                    />
                                );
                            });
                        }
                    }

                    listGroup = <ListGroup label={listHeader} virtualization={virtualization}>{listChildren}</ListGroup>;

                } else if ( child.type === ListItem ) {
                    listChildren.push( <ListItem key={`${child.type}-${index}`} {...child.props} /> );
                    listContent = <ListContent virtualization={virtualization}>{listChildren}</ListContent>;
                }
            });
        } else {
            listContent = <NoData>No data found.</NoData>;
        }

        return (
            <div
                className={classNames(
                    className,
                    'k-list',
                    {
                        [`k-list-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        'k-virtual-list': virtualization
                    }
                )}>
                {listGroup}
                {listContent}
            </div>
        );
    }
}
