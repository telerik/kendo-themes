import { classNames } from '../utils';
import TreeviewItem from './treeview-item.spec';

const className = `k-treeview-group`;

export type KendoTreeviewGroupProps = {
    children?: JSX.Element | JSX.Element[];
    dir?: 'ltr' | 'rtl'
};

export const TreeviewGroup = (
    props: KendoTreeviewGroupProps &
    React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        children,
        dir,
    } = props;

    const listChildren : JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if ( child.type === TreeviewItem) {
                    listChildren.push(
                        <TreeviewItem {...child.props} dir={dir} key={index} />
                    );
                }
            });
        } else {
            if ( children.type === TreeviewItem) {
                listChildren.push(
                    <TreeviewItem {...children.props} dir={dir} />
                );
            }
        }
    }

    return (
        <ul className={classNames(props.className, className)}>
            {listChildren}
        </ul>
    );
};
