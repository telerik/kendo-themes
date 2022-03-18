import { globalDefaultProps, Component } from '../component/index';
import { FloatingLabelStatic } from '../input/index';
import { DateInputStatic } from '../dateinput/index';

class DateRangePicker extends Component {
    render() {
        return <DateRangePickerStatic {...this.props} />;
    }
}

function DateRangePickerStatic(props) {

    const {
        className: ownClassName,

        size,
        rounded,
        fillMode,

        disabled,

        aria,

        ...htmlAttributes
    } = props;


    const dateInputAttributes = {
        size,
        rounded,
        fillMode
    };


    let DateRangePickerClasses = [
        ownClassName,
        'k-daterangepicker',
        {'k-disabled': disabled === true}
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <span className={DateRangePickerClasses} {...ariaAttr} {...htmlAttributes}>
            <FloatingLabelStatic label="Start">
                <DateInputStatic showSpinButton="false" {...dateInputAttributes}/>
            </FloatingLabelStatic>
            <FloatingLabelStatic label="End">
                <DateInputStatic showSpinButton="false" {...dateInputAttributes}/>
            </FloatingLabelStatic>
        </span>
    );
}

DateRangePickerStatic.defaultProps = {
    ...globalDefaultProps,

    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
};

DateRangePickerStatic.propTypes = {
    className: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],
    fillMode: typeof [ null, 'solid', 'flat', 'outline' ],

    disabled: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { DateRangePicker, DateRangePickerStatic };
