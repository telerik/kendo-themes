import { Component, globalDefaultProps } from '../component';

class ListFooter extends Component {
    render() {
        return <ListFooterStatic {...this.props} />;
    }
}

function ListFooterStatic(props) {
    const {
        className: ownClassName,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listFooterClasses = [
        ownClassName,
        'k-list-footer'
    ];

    let legacyListFooterClasses = [
        ownClassName
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListFooterClasses} {...ariaAttr} {...htmlAttributes}>

            </div>
        );
    }

    return (
        <div className={listFooterClasses} {...ariaAttr} {...htmlAttributes}>

        </div>
    );
}

ListFooterStatic.defaultProps = {
    ...globalDefaultProps,

    className: ''
};

ListFooterStatic.propTypes = {
    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListFooter, ListFooterStatic };
