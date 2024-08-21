import { TimeDurationPickerNormal } from '../../timedurationpicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <TimeDurationPickerNormal placeholder="02 days : 01 hours : 30 mins" />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal placeholder="02 days : 01 hours : 30 mins" />
            </div>

            <div>
                <TimeDurationPickerNormal value="Normal" />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Normal" />
            </div>

            <div>
                <TimeDurationPickerNormal value="Hover" hover />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Hover" hover />
            </div>

            <div>
                <TimeDurationPickerNormal value="Focus" focus />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Focus" focus />
            </div>

            <div>
                <TimeDurationPickerNormal value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Disabled" disabled />
            </div>

            <div>
                <TimeDurationPickerNormal value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Invalid" invalid />
            </div>

            <div>
                <TimeDurationPickerNormal value="Valid" valid />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Valid" valid />
            </div>

            <div>
                <TimeDurationPickerNormal value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Invalid Focus" invalid focus />
            </div>

            <div>
                <TimeDurationPickerNormal value="Loading..." loading />
            </div>
            <div dir="rtl">
                <TimeDurationPickerNormal value="Loading..." loading />
            </div>

        </div>
    </>
);
