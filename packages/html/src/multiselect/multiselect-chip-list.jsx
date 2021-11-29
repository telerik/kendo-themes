import { Component, globalDefaultProps } from '../component';
import { ChipListStatic } from '../chip/index';

class MultiSelectChipList extends Component {
    render() {
        return <MultiSelectChipListStatic {...this.props} />;
    }
}

function MultiSelectChipListStatic(props) {

    const {
        className: ownClassName,

        children,

        size,

        ...htmlAttributes
    } = props;

    let inputValuesClasses = [
        ownClassName,
        'k-input-values'
    ];

    if (children.length === 0) {
        return <></>;
    }

    return (
        <ChipListStatic selection="multiple" size={size} className={inputValuesClasses} {...htmlAttributes}>
            {children}
        </ChipListStatic>
    );
}

MultiSelectChipListStatic.defaultProps = {
    ...globalDefaultProps,

    size: 'medium',

    children: []
};

MultiSelectChipListStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],

    htmlAttributes: typeof []
};

export { MultiSelectChipList, MultiSelectChipListStatic };
