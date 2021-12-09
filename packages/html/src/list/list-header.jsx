import { Component, globalDefaultProps } from '../component/index';

class ListHeader extends Component {
    render() {
        return <ListHeaderStatic {...this.props} />;
    }
}

function ListHeaderStatic(props) {
    const {
        className: ownClassName,

        children,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listHeaderClasses = [
        ownClassName,
        'k-list-header'
    ];

    let legacyListHeaderClasses = [
        ownClassName,
        'k-group-header'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListHeaderClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </div>
        );
    }

    return (
        <div className={listHeaderClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

ListHeaderStatic.defaultProps = {
    ...globalDefaultProps,

    children: []
};

ListHeaderStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ListHeader, ListHeaderStatic };
