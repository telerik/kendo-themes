import { DateRangePicker } from '..';

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateRangePicker Opened</span>
            <span>DateRangePicker Opened RTL</span>

            <div>
                <DateRangePicker opened />
            </div>
            <div dir="rtl">
                <DateRangePicker opened dir="rtl" />
            </div>
        </div>
    </>
);
