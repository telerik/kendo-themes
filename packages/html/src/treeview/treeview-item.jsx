import { Component, globalDefaultProps } from '../component/index';
import { TreeviewGroupStatic } from './treeview-group.jsx';
import { TreeviewLeafStatic } from './treeview-leaf.jsx';
import { IconStatic } from '../icon/index';
import { CheckboxStatic } from '../checkbox/index';

class TreeviewItem extends Component {
    render() {
        return <TreeviewItemStatic {...this.props} />;
    }
}

function TreeviewItemStatic(props) {
    const {
        className: ownClassName,
        leafClassName,

        items,
        expanded,
        hasChildren: _hasChildren,

        text,

        showIcon,
        iconName,
        showCheckbox,
        checked,

        hover,
        focus,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    const leafProps = {
        className: leafClassName,
        text,
        showIcon,
        iconName,
        hover,
        focus,
        selected
    };

    const hasChildren = _hasChildren || items.length > 0;

    let treeviewItemClasses = [
        ownClassName,
        'k-treeview-item',
        {
            'k-disabled': disabled === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyTreeviewItemClasses = [
            ownClassName,
            'k-item',
            {
                'k-state-disabled': disabled === true
            }
        ];

        return (
            <li className={legacyTreeviewItemClasses} {...ariaAttr} {...htmlAttributes}>
                <span className="k-mid">
                    {hasChildren && <span className="k-treeview-toggle"><IconStatic name={expanded ? 'collapse' : 'expand'} /></span>}
                    {showCheckbox && <CheckboxStatic checked={checked} />}
                    <TreeviewLeafStatic {...leafProps} />
                </span>
                {expanded && hasChildren && <TreeviewGroupStatic items={items} />}
            </li>
        );
    }

    return (
        <li className={treeviewItemClasses} {...ariaAttr} {...htmlAttributes}>
            <span className="k-treeview-mid">
                {hasChildren && <span className="k-treeview-toggle"><IconStatic name={expanded ? 'collapse' : 'expand'} /></span>}
                {showCheckbox && <CheckboxStatic checked={checked} />}
                <TreeviewLeafStatic {...leafProps} />
            </span>
            {expanded && hasChildren && <TreeviewGroupStatic items={items} />}
        </li>
    );
}

TreeviewItemStatic.defaultProps = {
    ...globalDefaultProps,

    leafClassName: '',

    text: '',

    items: [],
    expanded: false,
    hasChildren: false,

    showIcon: false,
    iconName: '',
    showCheckbox: false,
    checked: false,
};

TreeviewItemStatic.propTypes = {
    children: typeof [],
    className: typeof '',
    leafClassName: typeof '',

    text: typeof '',

    items: [],
    expanded: typeof false,
    hasChildren: typeof false,

    showIcon: typeof false,
    iconName: typeof '',
    showCheckbox: typeof false,
    checked: typeof false,

    hover: typeof false,
    focus: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { TreeviewItem, TreeviewItemStatic };
