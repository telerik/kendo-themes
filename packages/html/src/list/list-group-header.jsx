import { Component, globalDefaultProps } from '../component';

class ListGroupHeader extends Component {
    render() {
        return <ListGroupHeaderStatic {...this.props} />;
    }
}

function ListGroupHeaderStatic(props) {
    const {
        className: ownClassName,

        children,

        root,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listGroupHeaderClasses = [
        ownClassName,
        'k-list-group-header',
        {
            'k-stuck': root === true
        }
    ];

    let legacyListGroupHeaderClasses = [
        ownClassName,
        'k-group-header'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        if (root) {
            return (
                <div className={legacyListGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>
                    {children}
                </div>
            );
        }

        return (
            <li className={legacyListGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </li>
        );
    }

    if (root) {
        return (
            <div className={listGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </div>
        );
    }

    return (
        <li className={listGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </li>
    );
}

ListGroupHeaderStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    root: false
};

ListGroupHeaderStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    root: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ListGroupHeader, ListGroupHeaderStatic };
