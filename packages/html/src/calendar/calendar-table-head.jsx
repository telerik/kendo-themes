import { CalendarCellStatic } from '../calendar/index';
import { Component, globalDefaultProps } from '../component/index';

class CalendarTableHead extends Component {
    render() {
        return <CalendarTableHeadStatic {...this.props} />;
    }
}

function CalendarTableHeadStatic(props) {

    const {
        className: ownClassName,

        showWeek,

        aria,

        ...htmlAttributes

    } = props;


    let ariaAttr = aria
        ? {}
        : {};


    let CalendarTableHeadClasses = [
        ownClassName,
        "k-calendar-thead"
    ];


    return (
        <thead className={CalendarTableHeadClasses} {...ariaAttr} {...htmlAttributes} >
            <tr className="k-calendar-tr">
                {showWeek && <CalendarCellStatic weekCell headerCell /> }
                <CalendarCellStatic text="Su" headerCell />
                <CalendarCellStatic text="Mo" headerCell />
                <CalendarCellStatic text="Tu" headerCell />
                <CalendarCellStatic text="We" headerCell />
                <CalendarCellStatic text="Th" headerCell />
                <CalendarCellStatic text="Fr" headerCell />
                <CalendarCellStatic text="Sa" headerCell />
            </tr>
        </thead>
    );
}

CalendarTableHeadStatic.defaultProps = {
    ...globalDefaultProps,
    showWeek: false,
};

CalendarTableHeadStatic.propTypes = {
    className: typeof '',

    showWeek: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarTableHead, CalendarTableHeadStatic };
