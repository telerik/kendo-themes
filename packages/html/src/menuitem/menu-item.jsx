import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

class MenuItem extends Component {
    init() {
        let subItem = <></>;
        let contentTemplate = <></>;
        let children = this._props.children;
        let newChildren = [];

        children.forEach( child => {
            let component = child._component;

            if (component === 'MenuItem') {
                subItem.props.children.push( child );
                return;
            }

            if (component === 'MenuItemContent') {
                contentTemplate.props.children.push( child );
                return;
            }

            newChildren.push( child );
        });

        this._props.subItem = subItem;
        this._props.contentTemplate = contentTemplate;
        this._props.children = newChildren;
    }
    render() {
        return <MenuItemStatic {...this.props} />;
    }
}

function MenuItemStatic(props) {
    const {
        className: ownClassName,

        text,

        icon,

        showArrow,
        arrowIconName,

        contentTemplate,

        hover,
        focus,
        active,
        selected,
        disabled,

        dir,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let menuItemClasses = [
        ownClassName,
        'k-item k-menu-item',
        {
            'k-disabled': disabled === true
        }
    ];

    let menuItemLinkClasses = [
        'k-link k-menu-link',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true
        }
    ];


    let legacyMenuItemClasses = [
        ownClassName,
        'k-item k-menu-item',
        {
            'k-state-hover': hover === true,
            'k-state-focus': focus === true,
            'k-state-selected': selected === true,
            'k-state-disabled': disabled === true,
        }
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;
    htmlAttributes.dir = dir;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <li className={legacyMenuItemClasses} {...ariaAttr} {...htmlAttributes}>
                <span className={`k-link k-menu-link ${active === true && 'k-state-active'}`}>
                    {icon && <IconStatic name={icon} />}
                    {text}
                    {showArrow && <IconStatic className="k-menu-expand-arrow" name={dir === 'ltr' ? 'arrow-60-right' : 'arrow-60-left'} />}
                </span>
            </li>
        );
    }

    const renderLTRArrowIconName = showArrow ? arrowIconName || 'arrow-60-right' : 'none';

    const renderRTLArrowIconName = showArrow ? arrowIconName || 'arrow-60-left' : 'none';

    return (
        <li className={menuItemClasses} {...ariaAttr} {...htmlAttributes}>
            <span className={menuItemLinkClasses}>
                {icon && <IconStatic name={icon} />}
                <span className="k-menu-link-text">{text}</span>
                {showArrow && <span className="k-menu-expand-arrow"><IconStatic name={dir === 'ltr' ? renderLTRArrowIconName : renderRTLArrowIconName} /></span>}
            </span>
            {contentTemplate}
        </li>
    );
}

MenuItemStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    className: '',

    size: 'medium',

    dir: 'ltr'
};

MenuItemStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    showArrow: typeof false,
    arrowIconName: typeof '',

    contentTemplate: typeof '#fragment',

    size: typeof [ null, 'small', 'medium', 'large' ],

    hover: typeof false,
    focus: typeof false,
    active: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    dir: typeof '',

    className: typeof '',
    htmlAttributes: typeof []
};

export { MenuItem, MenuItemStatic };
