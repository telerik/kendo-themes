import { Component, globalDefaultProps } from '../component';

class ListItemText extends Component {
    render() {
        return <ListItemTextStatic {...this.props} />;
    }
}

function ListItemTextStatic(props) {
    const {
        className: ownClassName,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listItemTextClasses = [
        ownClassName,
        'k-list-item-text'
    ];


    let legacyListItemTextClasses = [
        ownClassName,
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <span className={legacyListItemTextClasses} {...ariaAttr} {...htmlAttributes}>

            </span>
        );
    }

    return (
        <span className={listItemTextClasses} {...ariaAttr} {...htmlAttributes}>

        </span>
    );
}

ListItemTextStatic.defaultProps = {
    ...globalDefaultProps,

    className: ''
};

ListItemTextStatic.propTypes = {
    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ListItemText, ListItemTextStatic };
