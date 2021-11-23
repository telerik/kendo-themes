import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';

class List extends Component {
    render() {
        return <ListStatic {...this.props} />;
    }
}

function ListStatic(props) {
    const {
        className: ownClassName,

        size,

        virtualization,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listClasses = [
        ownClassName,
        'k-list',
        styles.sizeClass( size, 'k-list' ),
        {
            'k-virtual-list': virtualization === true
        }
    ];


    let legacyListClasses = [
        ownClassName,
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListClasses} {...ariaAttr} {...htmlAttributes}>

            </div>
        );
    }

    return (
        <div className={listClasses} {...ariaAttr} {...htmlAttributes}>

        </div>
    );
}

ListStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    size: 'medium',

    virtualization: false
};

ListStatic.propTypes = {
    size: typeof [ 'none', 'small', 'medium', 'large' ],

    virtualization: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { List, ListStatic };
