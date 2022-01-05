import { Component, globalDefaultProps } from '../component/index';

class TreeviewGroup extends Component {
    render() {
        return <TreeviewGroupStatic {...this.props} />;
    }
}

function TreeviewGroupStatic(props) {
    const {
        className: ownClassName,

        items,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let treeviewULClasses = [
        ownClassName,
        'k-treeview-group'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyTreeviewULClasses = [
            ownClassName,
            'k-group',
        ];

        return (
            <ul className={legacyTreeviewULClasses} {...ariaAttr} {...htmlAttributes}>
                {items}
            </ul>
        );
    }

    return (
        <ul className={treeviewULClasses} {...ariaAttr} {...htmlAttributes}>
            {items}
        </ul>
    );
}

TreeviewGroupStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    items: []
};

TreeviewGroupStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    items: typeof [],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { TreeviewGroup, TreeviewGroupStatic };
