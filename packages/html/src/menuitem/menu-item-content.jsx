import { Component, globalDefaultProps } from '../component';

class MenuItemContent extends Component {
    render() {
        return <MenuItemContentStatic {...this.props} />;
    }
}

function MenuItemContentStatic(props) {

    const {
        className: ownClassName,

        children,

        ...htmlAttributes
    } = props;

    let menuItemContentClasses = [
        ownClassName,
        'k-menu-item-content'
    ];

    if (children.length === 0) {
        return <></>;
    }

    return (
        <span className={menuItemContentClasses} {...htmlAttributes}>
            {children}
        </span>
    );
}

MenuItemContentStatic.defaultProps = {
    ...globalDefaultProps,

    children: []
};

MenuItemContentStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    htmlAttributes: typeof []
};

export { MenuItemContent, MenuItemContentStatic };
