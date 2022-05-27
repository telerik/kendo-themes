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

        ...htmlAttributes
    } = props;

    let listGroupItemClasses = [
        ownClassName,
        'k-list-group-item'
    ];

    let ariaAttr = aria
        ? {}
        : {};

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
