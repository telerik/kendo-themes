import { TimePicker } from '../../timepicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimePicker</span>
            <span>TimePicker RTL</span>

            <div>
                <TimePicker placeholder="TimePicker..." />
            </div>
            <div dir="rtl">
                <TimePicker placeholder="TimePicker..." />
            </div>

            <div>
                <TimePicker value="Normal" />
            </div>
            <div dir="rtl">
                <TimePicker value="Normal" />
            </div>

            <div>
                <TimePicker value="Hover" hover />
            </div>
            <div dir="rtl">
                <TimePicker value="Hover" hover />
            </div>

            <div>
                <TimePicker value="Focus" focus />
            </div>
            <div dir="rtl">
                <TimePicker value="Focus" focus />
            </div>

            <div>
                <TimePicker value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <TimePicker value="Disabled" disabled />
            </div>

            <div>
                <TimePicker value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <TimePicker value="Invalid" invalid />
            </div>

            <div>
                <TimePicker value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <TimePicker value="Invalid Focus" invalid focus />
            </div>

            <div>
                <TimePicker value="Loading..." loading />
            </div>
            <div dir="rtl">
                <TimePicker value="Loading..." loading />
            </div>

        </div>
    </>
);
