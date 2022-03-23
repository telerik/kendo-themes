import { CalendarCellStatic, CalendarTableHeadStatic } from '../calendar/index';
import { Component, globalDefaultProps } from '../component/index';

class CalendarTable extends Component {
    render() {
        return <CalendarTableStatic {...this.props} />;
    }
}

function CalendarTableStatic(props) {

    const {
        className: ownClassName,

        calendarView,
        showOtherMonth,
        showWeek,
        showCalendarCaption,

        aria,

        ...htmlAttributes

    } = props;

    const tableHeadAttributes = {
        showWeek,
    };

    const calendarCellAttributes = {
        showOtherMonth,
    };

    let ariaAttr = aria
        ? {}
        : {};

    let CalendarTableClasses = [
        ownClassName,
        "k-calendar-table"
    ];

    if(calendarView === 'year') {
        return (
            <table className={CalendarTableClasses} {...ariaAttr} {...htmlAttributes}>
                {showCalendarCaption && <caption className="k-calendar-caption">2022</caption> }
                <tbody className="k-calendar-tbody">
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="Jan" />
                        <CalendarCellStatic text="Feb" />
                        <CalendarCellStatic text="Mar" />
                        <CalendarCellStatic text="Apr" />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="May" />
                        <CalendarCellStatic text="Jun" hover />
                        <CalendarCellStatic text="Jul" focus />
                        <CalendarCellStatic text="Au" selected />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="Sep" />
                        <CalendarCellStatic text="Oct" today />
                        <CalendarCellStatic text="Nov" />
                        <CalendarCellStatic text="Dec" />
                    </tr>
                </tbody>
            </table>
        );
    } else if (calendarView === 'decade') {
        return (
            <table className={CalendarTableClasses} {...ariaAttr} {...htmlAttributes}>
                {showCalendarCaption && <caption className="k-calendar-caption">2020-2029</caption> }
                <tbody className="k-calendar-tbody">
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic className="k-out-of-range" />
                        <CalendarCellStatic text="2020" />
                        <CalendarCellStatic text="2021" today />
                        <CalendarCellStatic text="2022" />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="2023" />
                        <CalendarCellStatic text="2024" hover />
                        <CalendarCellStatic text="2025" focus />
                        <CalendarCellStatic text="2026" selected />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="2027" />
                        <CalendarCellStatic text="2028" />
                        <CalendarCellStatic text="2029" />
                        <CalendarCellStatic className="k-out-of-range" />
                    </tr>
                </tbody>
            </table>
        )
    } else if (calendarView === 'century') {
        return (
            <table className={CalendarTableClasses} {...ariaAttr} {...htmlAttributes}>
                {showCalendarCaption && <caption className="k-calendar-caption">2000-2099</caption> }
                <tbody className="k-calendar-tbody">
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="1990 - 1999" />
                        <CalendarCellStatic text="2000 - 2009" />
                        <CalendarCellStatic text="2010 - 2019" today />
                        <CalendarCellStatic text="2020 - 2029" />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="2030 - 2039" />
                        <CalendarCellStatic text="2040 - 2049" hover />
                        <CalendarCellStatic text="2050 - 2059" focus />
                        <CalendarCellStatic text="2060 - 2069" selected />
                    </tr>
                    <tr className="k-calendar-tr">
                        <CalendarCellStatic text="2070 - 2079" />
                        <CalendarCellStatic text="2080 - 2089" />
                        <CalendarCellStatic text="2090 - 2099" />
                        <CalendarCellStatic className="k-out-of-range" />
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <table className={CalendarTableClasses} {...ariaAttr} {...htmlAttributes}>
                {showCalendarCaption && <caption className="k-calendar-caption">October 2021</caption> }
                <CalendarTableHeadStatic {...tableHeadAttributes} />
                <tbody className="k-calendar-tbody">
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="39" weekCell /> }
                        <CalendarCellStatic text="30" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="1" />
                        <CalendarCellStatic text="2" />
                        <CalendarCellStatic text="3" />
                        <CalendarCellStatic text="4" />
                        <CalendarCellStatic text="5" />
                        <CalendarCellStatic text="6" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="40" weekCell /> }
                        <CalendarCellStatic text="7" weekend />
                        <CalendarCellStatic text="8" />
                        <CalendarCellStatic text="9" hover />
                        <CalendarCellStatic text="10" focus />
                        <CalendarCellStatic text="11" selected />
                        <CalendarCellStatic text="12" />
                        <CalendarCellStatic text="13" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="41" weekCell /> }
                        <CalendarCellStatic text="14" weekend />
                        <CalendarCellStatic text="15" />
                        <CalendarCellStatic text="16" hover focus />
                        <CalendarCellStatic text="17" selected />
                        <CalendarCellStatic text="18" selected />
                        <CalendarCellStatic text="19" />
                        <CalendarCellStatic text="20" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="42" weekCell /> }
                        <CalendarCellStatic text="21" weekend />
                        <CalendarCellStatic text="22" />
                        <CalendarCellStatic text="23" />
                        <CalendarCellStatic text="24" />
                        <CalendarCellStatic text="25" />
                        <CalendarCellStatic text="26" />
                        <CalendarCellStatic text="27" weekend />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="43" weekCell /> }
                        <CalendarCellStatic text="28" weekend />
                        <CalendarCellStatic text="29" today />
                        <CalendarCellStatic text="30" />
                        <CalendarCellStatic text="31" />
                        <CalendarCellStatic text="1" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="2" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="3" otherMonth weekend {...calendarCellAttributes} />
                    </tr>
                    <tr className="k-calendar-tr">
                        {showWeek && <CalendarCellStatic text="44" weekCell /> }
                        <CalendarCellStatic text="4" otherMonth weekend {...calendarCellAttributes} />
                        <CalendarCellStatic text="5" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="6" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="7" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="8" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="9" otherMonth {...calendarCellAttributes} />
                        <CalendarCellStatic text="10" otherMonth weekend {...calendarCellAttributes} />
                    </tr>
                </tbody>
            </table>
        );
    }


}

CalendarTableStatic.defaultProps = {
    ...globalDefaultProps,
    calendarView: 'month',
    showOtherMonth: false,
    showWeek: false,
    showCalendarCaption: false,
};

CalendarTableStatic.propTypes = {
    className: typeof '',

    calendarView: typeof [ 'month', 'year', 'decade', 'century' ],
    showOtherMonth: typeof false,
    showWeek: typeof false,
    showCalendarCaption: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarTable, CalendarTableStatic };
