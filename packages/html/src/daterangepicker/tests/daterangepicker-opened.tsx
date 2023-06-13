import { DateRangePickerPopup } from '..';

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
                <DateRangePickerPopup />
            </div>
            <div dir="rtl">
                <DateRangePickerPopup dir="rtl" />
            </div>
        </div>
    </>
);
