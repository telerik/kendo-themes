import { DatePickerPopup } from '../../datepicker';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }

    .k-popup {
        width: max-content;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DatePicker</span>
            <span>DatePicker RTL</span>

            <div>
                <DatePickerPopup value="Opened" />
            </div>
            <div dir="rtl">
                <DatePickerPopup value="Opened" dir="rtl" />
            </div>

        </div>
    </>
);