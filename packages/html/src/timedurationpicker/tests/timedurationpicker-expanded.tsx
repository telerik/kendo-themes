import { TimeDurationPickerPopup } from '../../timedurationpicker';


const style = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>

        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <TimeDurationPickerPopup placeholder="02 days : 01 hours : 30 mins" />
            </div>
            <div dir="rtl">
                <TimeDurationPickerPopup placeholder="02 days : 01 hours : 30 mins" />
            </div>
        </div>

    </>
);
