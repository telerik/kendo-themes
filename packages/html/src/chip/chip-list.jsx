
import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class ChipList extends Component {
    render() {
        return <ChipListStatic {...this.props} />;
    }
}

function ChipListStatic(props) {
    const {
        className: ownClassName,

        children,

        size,

        selection,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let listClasses = [
        ownClassName,
        'k-chip-list',
        styles.sizeClass( size, 'k-chip-list' ),
        {
            'k-selection-single': selection === 'single',
            'k-selection-multiple': selection === 'multiple'
        }
    ];


    let legacyListClasses = [
        ownClassName,
        'k-chip-list'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyListClasses} {...ariaAttr} {...htmlAttributes}>
                {children}
            </div>
        );
    }

    return (
        <div className={listClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

ChipListStatic.defaultProps = {
    ...globalDefaultProps,

    size: 'medium',

    selection: 'none'
};

ChipListStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    size: typeof [ null, 'small', 'medium', 'large' ],

    selection: typeof [ null, 'single', 'multiple' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ChipList, ChipListStatic };
