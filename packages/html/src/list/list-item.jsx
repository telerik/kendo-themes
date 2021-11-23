import { Component, globalDefaultProps } from '../component';

class ListItem extends Component {
    render() {
        return <ListItemStatic {...this.props} />;
    }
}

function ListItemStatic(props) {
    const {
        className: ownClassName,

        virtualization,
        custom,

        hover,
        focus,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listItemClasses = [
        ownClassName,
        'k-list-item',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true,
            'k-custom-item': custom === true
        }
    ];


    let legacyListItemClasses = [
        ownClassName,
        'k-item',
        {
            'k-state-hover': hover === true,
            'k-state-focused': focus === true,
            'k-state-selected': selected === true,
            'k-state-disabled': disabled === true,
            'k-virtual-item': virtualization === true,
            'k-custom-item': custom === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <li className={legacyListItemClasses} {...ariaAttr} {...htmlAttributes}>

            </li>
        );
    }

    return (
        <li className={listItemClasses} {...ariaAttr} {...htmlAttributes}>

        </li>
    );
}

ListItemStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    virtualization: false,
    custom: false
};

ListItemStatic.propTypes = {
    virtualization: typeof false,
    custom: typeof false,

    hover: typeof false,
    focus: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListItem, ListItemStatic };
