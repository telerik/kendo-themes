import { classNames, optionClassNames, Size } from '../utils';
import { TreeviewGroup, TreeviewItem } from '../treeview';

export const TREEVIEW_CLASSNAME = `k-treeview`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoTreeviewOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTreeviewProps = KendoTreeviewOptions & {
    children?: JSX.Element | JSX.Element[];
    dir?: 'ltr' | 'rtl'
};

export type KendoTreeviewState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
};

export const Treeview = (
    props: KendoTreeviewProps &
        KendoTreeviewState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        children,
        dir,
        ...other
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

                if ( child.type === TreeviewGroup) {
                    listChildren.push(
                        <TreeviewGroup {...child.props} dir={dir} key={index} />
                    );
                }
            });
        } else {
            if ( children.type === TreeviewItem) {
                listChildren.push(
                    <TreeviewItem {...children.props} dir={dir} />
                );
            }

            if ( children.type === TreeviewGroup) {
                listChildren.push(
                    <TreeviewGroup {...children.props} dir={dir} />
                );
            }
        }
    }

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                TREEVIEW_CLASSNAME,
                optionClassNames(TREEVIEW_CLASSNAME, {
                    size,
                })
            )}
        >
            <TreeviewGroup className="k-treeview-lines" dir={dir}>
                {listChildren}
            </TreeviewGroup>
        </div>
    );
};

Treeview.states = states;
Treeview.options = options;
Treeview.className = TREEVIEW_CLASSNAME;
Treeview.defaultProps = defaultProps;

export default Treeview;
