import { Component, globalDefaultProps } from '../component';

class ListContent extends Component {
    render() {
        return <ListContentStatic {...this.props} />;
    }
}

function ListContentStatic(props) {
    const {
        className: ownClassName,

        virtualization,

        children,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listContentClasses = [
        ownClassName,
        'k-list-content',
        {
            'k-list-scroller': virtualization === false,
            'k-virtual-content': virtualization === true
        }
    ];

    let legacyListContentClasses = [
        ownClassName,
        {
            'k-list-scroller': virtualization === false,
            'k-virtual-content': virtualization === true
        }
    ];

    let listULClasses = [
        'k-list-ul'
    ];

    let legacyListULClasses = [
        'k-list',
        'k-reset',
        {
            'k-virtual-list': virtualization === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        if (virtualization) {
            return (
                <div className={legacyListContentClasses} {...ariaAttr} {...htmlAttributes}>
                    <ul className={legacyListULClasses}>
                        {children}
                    </ul>
                    <div className="k-height-container">
                        <div></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={legacyListContentClasses} {...ariaAttr} {...htmlAttributes}>
                    <ul className={legacyListULClasses}>
                        {children}
                    </ul>
                </div>
            );
        }
    }

    if (virtualization) {
        return (
            <div className={listContentClasses} {...ariaAttr} {...htmlAttributes}>
                <ul className={listULClasses}>
                    {children}
                </ul>
                <div className="k-height-container">
                    <div></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={listContentClasses} {...ariaAttr} {...htmlAttributes}>
                <ul className={listULClasses}>
                    {children}
                </ul>
            </div>
        );
    }
}

ListContentStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    virtualization: false
};

ListContentStatic.propTypes = {
    virtualization: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListContent, ListContentStatic };
