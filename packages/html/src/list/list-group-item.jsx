import { Component, globalDefaultProps } from '../component/index';

class ListGroupItem extends Component {
    render() {
        return <ListGroupItemStatic {...this.props} />;
    }
}

function ListGroupItemStatic(props) {
    const {
        className: ownClassName,

        children,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listGroupItemClasses = [
        ownClassName,
        'k-list-group-item'
    ];

    let legacyListGroupItemClasses = [
        ownClassName,
        'k-group-header'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <li className={legacyListGroupItemClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </li>
        );
    }

    return (
        <li className={listGroupItemClasses} {...ariaAttr} {...htmlAttributes}>
            <span className="k-list-item-text">{children}</span>
        </li>
    );
}

ListGroupItemStatic.defaultProps = {
    ...globalDefaultProps,

    children: []
};

ListGroupItemStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ListGroupItem, ListGroupItemStatic };
