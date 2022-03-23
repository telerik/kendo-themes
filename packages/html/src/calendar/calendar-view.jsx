import { CalendarTableStatic } from './index';
import { Component, globalDefaultProps } from '../component/index';

class CalendarView extends Component {
    render() {
        return <CalendarViewStatic {...this.props} />;
    }
}

function CalendarViewStatic(props) {

    const {
        className: ownClassName,

        verticalCalendar,
        calendarView,
        viewsCount,
        showWeek,
        showOtherMonth,
        showCalendarCaption,

        aria,

        ...htmlAttributes

    } = props;


    const calendarTableAttributes = {
        calendarView,
        showWeek,
        showOtherMonth,
        showCalendarCaption,
    };

    let ariaAttr = aria
        ? {}
        : {};

    let CalendarViewClasses = [
        ownClassName,
        "k-calendar-view",
        `k-calendar-${calendarView}view`,
        'k-align-items-start',
        'k-justify-content-center',
        verticalCalendar ? "k-vstack" : "k-hstack",
    ];

    const views = parseInt(viewsCount);

    return (
        <div className={CalendarViewClasses} {...ariaAttr} {...htmlAttributes}>
            { [...Array(views)].map(() => <CalendarTableStatic {...calendarTableAttributes} />) }
        </div>
    );
}

CalendarViewStatic.defaultProps = {
    ...globalDefaultProps,
    verticalCalendar: false,
    viewsCount: '1',
    showWeek: false,
    showOtherMonth: false,
    showCalendarCaption: false,
};

CalendarViewStatic.propTypes = {
    className: typeof '',

    verticalCalendar: typeof false,
    viewsCount: typeof '',
    showWeek: typeof false,
    showOtherMonth: typeof false,
    showCalendarCaption: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarView, CalendarViewStatic };
