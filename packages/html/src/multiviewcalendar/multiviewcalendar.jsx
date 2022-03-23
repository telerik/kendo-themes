import { Calendar, CalendarStatic } from '../calendar/index';
import { globalDefaultProps } from '../component/index';

class MultiViewCalendar extends Calendar {
    render() {
        return <MultiViewCalendarStatic {...this.props} />;
    }
}

function MultiViewCalendarStatic(props) {

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


    htmlAttributes.calendarHeaderText = calendarHeaderText
    htmlAttributes.calendarView = calendarView;
    htmlAttributes.viewsCount = viewsCount;
    htmlAttributes.verticalCalendar = verticalCalendar;
    htmlAttributes.showCalendarFooter = showCalendarFooter;
    htmlAttributes.showWeek = showWeek;
    htmlAttributes.showOtherMonth = showOtherMonth;
    htmlAttributes.showCalendarCaption = showCalendarCaption;


    let MultiViewCalendarClasses = [
        ownClassName,
        'k-calendar-range'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <CalendarStatic className={MultiViewCalendarClasses} {...ariaAttr} {...htmlAttributes}></CalendarStatic>
    );
}

MultiViewCalendarStatic.defaultProps = {
    ...globalDefaultProps,
    calendarHeaderText: 'October 2021 - November 2021',
    calendarView: 'month',
    viewsCount: '2',
    verticalCalendar: false,
    showCalendarFooter: false,
    showWeek: false,
    showOtherMonth: false,
    showCalendarCaption: false,
};

MultiViewCalendarStatic.propTypes = {
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

export { MultiViewCalendar, MultiViewCalendarStatic };

