
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

ChipListStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    size: 'medium',

    selection: 'none'
};

ChipListStatic.propTypes = {
    size: typeof [ null, 'small', 'medium', 'large' ],

    selection: typeof [ null, 'single', 'multiple' ],

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ChipList, ChipListStatic };
