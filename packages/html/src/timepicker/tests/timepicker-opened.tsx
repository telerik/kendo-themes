import { TimePickerPopup } from '..';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimePicker</span>
            <span>TimePicker RTL</span>

            <div>
                <TimePickerPopup value="Opened" />
            </div>
            <div dir="rtl">
                <TimePickerPopup value="Opened" />
            </div>

        </div>
    </>
);
