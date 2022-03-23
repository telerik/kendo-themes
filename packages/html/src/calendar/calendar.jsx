import { CalendarHeaderStatic, CalendarFooterStatic, CalendarViewStatic } from '../calendar/index';
import { Component, globalDefaultProps } from '../component/index';

class Calendar extends Component {
    render() {
        return <CalendarStatic {...this.props} />;
    }
}

function CalendarStatic(props) {

    const {
        className: ownClassName,

        calendarHeaderText,
        calendarView,
        viewsCount,
        verticalCalendar,
        showCalendarFooter,
        showWeek,
        showOtherMonth,
        showCalendarCaption,

        aria,

        ...htmlAttributes

    } = props;

    const calendarViewAttributes = {
        calendarHeaderText,
        calendarView,
        viewsCount,
        verticalCalendar,
        showWeek,
        showOtherMonth,
        showCalendarCaption,
    };

    let ariaAttr = aria
        ? {}
        : {};


    let CalendarClasses = [
        ownClassName,
        "k-calendar",
        {"k-week-number": showWeek === true},
    ];

    return (
        <div className={CalendarClasses} {...ariaAttr} {...htmlAttributes}>
            <CalendarHeaderStatic showToday={showCalendarFooter ? false : true } {...calendarViewAttributes} />

            <CalendarViewStatic {...calendarViewAttributes} />

            {showCalendarFooter && <CalendarFooterStatic /> }
        </div>

    );
}

CalendarStatic.defaultProps = {
    ...globalDefaultProps,
    calendarHeaderText: 'October 2021',
    calendarView: 'month',
    viewsCount: '1',
    verticalCalendar: false,
    showCalendarFooter: false,
    showWeek: false,
    showOtherMonth: false,
    showCalendarCaption: false,
};

CalendarStatic.propTypes = {
    className: typeof '',

    calendarHeaderText: typeof '',
    calendarView: typeof [ 'month', 'year', 'decade', 'century' ],
    viewsCount: typeof '',
    verticalCalendar: typeof false,
    showCalendarFooter: typeof false,
    showWeek: typeof false,
    showOtherMonth: typeof false,
    showCalendarCaption: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};


export { Calendar, CalendarStatic };
