import { Component, globalDefaultProps } from '../component/index';

class CalendarCell extends Component {
    render() {
        return <CalendarCellStatic {...this.props} />;
    }
}

function CalendarCellStatic(props) {

    const {
        className: ownClassName,

        text,

        headerCell,
        today,
        weekend,
        otherMonth,
        showOtherMonth,
        weekCell,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,

        ...htmlAttributes

    } = props;


    let ariaAttr = aria
        ? {}
        : {};

    let cellType = headerCell ? 'th' : 'td';

    let calendarCellClasses = [
        ownClassName,
        `k-calendar-${cellType}`,
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true,
            'k-today': today === true,
            'k-weekend': weekend === true,
            'k-other-month': otherMonth === true,
            'k-alt': weekCell === true,
        }
    ];

    return (
        <>
            {headerCell
            ?   <th className={calendarCellClasses} {...ariaAttr} {...htmlAttributes} >
                    {text}
                </th>

            :   weekCell
                ?   <td className={calendarCellClasses} {...ariaAttr} {...htmlAttributes} >
                        {text}
                    </td>
                :   <td className={calendarCellClasses} {...ariaAttr} {...htmlAttributes} >
                        {otherMonth && !showOtherMonth
                                    ? ''
                                    : <span className="k-link">{text}</span>
                        }
                    </td>
            }
        </>
    );
}

CalendarCellStatic.defaultProps = {
    ...globalDefaultProps,
    text: '',
    headerCell: false,
    today: false,
    weekend: false,
    otherMonth: false,
    showOtherMonth: false,
    weekCell: false,
};

CalendarCellStatic.propTypes = {
    className: typeof '',

    text: typeof '',

    headerCell: typeof false,
    today: typeof false,
    weekend: typeof false,
    otherMonth: typeof false,
    showOtherMonth: typeof false,
    weekCell: typeof false,

    hover: typeof false,
    focus: typeof false,
    active: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarCell, CalendarCellStatic };
