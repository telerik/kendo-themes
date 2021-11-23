import { Component, globalDefaultProps } from '../component';

class ListHeader extends Component {
    render() {
        return <ListHeaderStatic {...this.props} />;
    }
}

function ListHeaderStatic(props) {
    const {
        className: ownClassName,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listHeaderClasses = [
        ownClassName,
        'k-list-header'
    ];

    let legacyListHeaderClasses = [
        ownClassName
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListHeaderClasses} {...ariaAttr} {...htmlAttributes}>

            </div>
        );
    }

    return (
        <div className={listHeaderClasses} {...ariaAttr} {...htmlAttributes}>

        </div>
    );
}

ListHeaderStatic.defaultProps = {
    ...globalDefaultProps,

    className: ''
};

ListHeaderStatic.propTypes = {
    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListHeader, ListHeaderStatic };
