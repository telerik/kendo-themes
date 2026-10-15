import { CalendarRevampMonth, CalendarRevampMonthSelect, CalendarRevampYearSelect } from '../templates/calendar-revamp';

const styles = `
    #test-area {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
    }
    .resizable {
        width: 298px;
        height: 378px;
        min-width: 180px;
        min-height: 200px;
        max-width: 100%;
        overflow: hidden;
        resize: both;
        box-sizing: content-box;
        padding: 0 16px 16px 0;
        position: relative;
        outline: 1px dashed #94a3b8;
        outline-offset: 2px;
    }
    .resizable::after {
        content: "";
        position: absolute;
        right: 2px;
        bottom: 2px;
        width: 12px;
        height: 12px;
        pointer-events: none;
        background: linear-gradient(135deg, transparent 50%, #64748b 50%, #64748b 58%, transparent 58%, transparent 72%, #64748b 72%, #64748b 80%, transparent 80%);
    }
    .resizable > .k-calendar {
        inline-size: 100%;
        block-size: 100%;
    }
    .resizable.no-week {
        width: 274px;
    }
    .resizable.wide {
        width: 598px;
        height: 498px;
    }
`;

const Demo = ({ title, className = '', children }: { title: string, className?: string, children: React.ReactNode }) => (
    <section>
        <h4>{title}</h4>
        <div className={`resizable ${className}`.trim()}>
            {children}
        </div>
    </section>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <Demo title="Month view with week numbers (Today below)">
                <CalendarRevampMonth showWeek />
            </Demo>

            <Demo title="Month view without week numbers (Today below)" className="no-week">
                <CalendarRevampMonth />
            </Demo>

            <Demo title="Month view, wide (Today in the header)" className="wide">
                <CalendarRevampMonth showWeek />
            </Demo>

            <Demo title="Month view, Today forced to the header" className="wide">
                <CalendarRevampMonth showWeek todayPlacement="header" />
            </Demo>

            <Demo title="Month view, Today forced to the footer" className="wide">
                <CalendarRevampMonth showWeek todayPlacement="footer" />
            </Demo>

            <Demo title="Month view with custom footer">
                <CalendarRevampMonth showWeek showCalendarFooter />
            </Demo>

            <Demo title="Month selection view">
                <CalendarRevampMonthSelect />
            </Demo>

            <Demo title="Month selection view, wide" className="wide">
                <CalendarRevampMonthSelect />
            </Demo>

            <Demo title="Year selection view">
                <CalendarRevampYearSelect />
            </Demo>

            <Demo title="Year selection view, wide" className="wide">
                <CalendarRevampYearSelect />
            </Demo>
        </div>
    </>
);
