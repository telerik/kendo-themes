import { DateTimePickerPopup } from '../../datetimepicker';


const styles = `
    #test-area {
        max-width: 860px;
    }

    #test-area > div {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateTimePicker</span>
            <span>DateTimePicker RTL</span>

            <div>
                <DateTimePickerPopup value="Opened Date" />
            </div>
            <div>
                <DateTimePickerPopup value="Opened Date" dir="rtl" />
            </div>

            <div>
                <DateTimePickerPopup value="Opened Time" tab="time" />
            </div>
            <div>
                <DateTimePickerPopup value="Opened Time" tab="time" dir="rtl" />
            </div>

        </div>
    </>
);
