import { ButtonStatic } from '../button/index';
import { Component, globalDefaultProps } from '../component/index';

class CalendarHeader extends Component {
    render() {
        return <CalendarHeaderStatic {...this.props} />;
    }
}

function CalendarHeaderStatic(props) {

    const {
        className: ownClassName,

        calendarHeaderText,
        showToday,
        verticalCalendar,
        calendarView,

        aria,

        ...htmlAttributes

    } = props;

    let ariaAttr = aria
        ? {}
        : {};


    let CalendarHeaderClasses = [
        ownClassName,
        'k-calendar-header',
        verticalCalendar && "k-vstack",
    ];

    return (
        <div className={CalendarHeaderClasses} {...ariaAttr} {...htmlAttributes}>
            <ButtonStatic className="k-calendar-title" text={calendarHeaderText} fillMode="flat"></ButtonStatic>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                <ButtonStatic className="k-nav-prev" icon="arrow-chevron-left" fillMode="flat"></ButtonStatic>
                {showToday && <span className="k-nav-today">Today</span>}
                <ButtonStatic className="k-nav-next" icon="arrow-chevron-right" fillMode="flat"></ButtonStatic>
            </span>
        </div>
    );
}

CalendarHeaderStatic.defaultProps = {
    ...globalDefaultProps,
    calendarHeaderText: 'October 2021',
    showToday: true,
    calendarView: 'month',
    verticalCalendar: false,
};

CalendarHeaderStatic.propTypes = {
    className: typeof '',

    calendarHeaderText: typeof '',
    showToday: typeof true,
    verticalCalendar: typeof false,
    calendarView: typeof [ 'month', 'year', 'decade', 'century' ],

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarHeader, CalendarHeaderStatic };
