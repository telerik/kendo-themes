import { Component, globalDefaultProps } from '../component/index';
import { CheckboxStatic } from '../checkbox/index';
import { IconStatic } from '../icon/index';

class ListItem extends Component {
    render() {
        return <ListItemStatic {...this.props} />;
    }
}

function ListItemStatic(props) {
    const {
        className: ownClassName,
        children,

        groupLabel,

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

    let listItemClasses = [
        ownClassName,
        'k-list-item',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true
        }
    ];


    let legacyListItemClasses = [
        ownClassName,
        'k-item',
        {
            'k-state-hover': hover === true,
            'k-state-focused': focus === true,
            'k-state-selected': selected === true,
            'k-state-disabled': disabled === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <li className={legacyListItemClasses} {...ariaAttr} {...htmlAttributes}>
                {showCheckbox && <CheckboxStatic checked={checked} />}
                {showIcon && <IconStatic name={iconName} />}
                <span className="k-list-item-text">{children}</span>
                {groupLabel !== '' && <div className="k-group">{groupLabel}</div>}
            </li>
        );
    }

    return (
        <li className={listItemClasses} {...ariaAttr} {...htmlAttributes}>
            {showCheckbox && <CheckboxStatic checked={checked} />}
            {showIcon && <IconStatic name={iconName} />}
            <span className="k-list-item-text">{children}</span>
            {groupLabel !== '' && <div className="k-list-item-group-label">{groupLabel}</div>}
        </li>
    );
}

ListItemStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    groupLabel: '',

    showIcon: false,
    iconName: '',
    showCheckbox: false,
    checked: false,
};

ListItemStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    groupLabel: typeof '',

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

export { ListItem, ListItemStatic };
