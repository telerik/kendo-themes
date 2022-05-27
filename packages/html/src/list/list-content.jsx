import { Component, globalDefaultProps } from '../component/index';

class ListContent extends Component {
    render() {
        return <ListContentStatic {...this.props} />;
    }
}

function ListContentStatic(props) {
    const {
        className: ownClassName,

        children,

        virtualization,

        aria,

        ...htmlAttributes
    } = props;

    let listContentClasses = [
        ownClassName,
        'k-list-content'
    ];

    let listULClasses = [
        'k-list-ul'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <div className={listContentClasses} {...ariaAttr} {...htmlAttributes}>
            <ul className={listULClasses}>
                {children}
            </ul>
            { virtualization && <div className="k-height-container"><div></div></div> }
        </div>
    );
}

ListContentStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    virtualization: false
};

ListContentStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    virtualization: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ListContent, ListContentStatic };
