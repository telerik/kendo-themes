import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

class TreeviewLeaf extends Component {
    render() {
        return <TreeviewLeafStatic {...this.props} />;
    }
}

function TreeviewLeafStatic(props) {
    const {
        className: ownClassName,

        text,

        showIcon,
        iconName,

        hover,
        focus,
        selected,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let treeviewLeafClasses = [
        ownClassName,
        'k-treeview-leaf',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-selected': selected === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyTreeviewLeafClasses = [
            ownClassName,
            'k-in',
            {
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-selected': selected === true
            }
        ];

        return (
            <span className={legacyTreeviewLeafClasses} {...ariaAttr} {...htmlAttributes}>
                {showIcon && <IconStatic name={iconName} />}
                <span className="k-treeview-leaf-text">{text}</span>
            </span>
        );
    }

    return (
        <span className={treeviewLeafClasses} {...ariaAttr} {...htmlAttributes}>
            {showIcon && <IconStatic name={iconName} />}
            <span className="k-treeview-leaf-text">{text}</span>
        </span>
    );
}

TreeviewLeafStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',

    showIcon: false,
    iconName: ''
};

TreeviewLeafStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    text: typeof '',

    showIcon: typeof false,
    iconName: typeof '',

    hover: typeof false,
    focus: typeof false,
    selected: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { TreeviewLeaf, TreeviewLeafStatic };
