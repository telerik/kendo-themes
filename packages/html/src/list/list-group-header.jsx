import { Component, globalDefaultProps } from '../component';

class ListGroupHeader extends Component {
    render() {
        return <ListGroupHeaderStatic {...this.props} />;
    }
}

function ListGroupHeaderStatic(props) {
    const {
        className: ownClassName,

        stuck,
        virtualization,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listGroupHeaderClasses = [
        ownClassName,
        'k-list-group-header',
        {
            'k-stuck': stuck === true
        }
    ];

    let legacyListGroupHeaderClasses = [
        ownClassName,
        'k-outer-group-header',
        {
            'k-first': stuck === true,
            'k-virtual-item': virtualization === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        if (stuck) {
            return (
                <div className={legacyListGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>

                </div>
            );
        } else {
            return (
                <li className={legacyListGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>

                </li>
            );
        }
    }

    if (stuck) {
        return (
            <div className={listGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>

            </div>
        );
    } else {
        return (
            <li className={listGroupHeaderClasses} {...ariaAttr} {...htmlAttributes}>

            </li>
        );
    }
}

ListGroupHeaderStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    stuck: false
};

ListGroupHeaderStatic.propTypes = {
    stuck: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListGroupHeader, ListGroupHeaderStatic };
