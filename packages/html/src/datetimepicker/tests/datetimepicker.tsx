import { DateTimePicker } from '../../datetimepicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateTimePicker</span>
            <span>DateTimePicker RTL</span>

            <div>
                <DateTimePicker placeholder="DateTimePicker..." />
            </div>
            <div dir="rtl">
                <DateTimePicker placeholder="DateTimePicker..." />
            </div>

            <div>
                <DateTimePicker value="Normal" />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Normal" />
            </div>

            <div>
                <DateTimePicker value="Hover" hover />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Hover" hover />
            </div>

            <div>
                <DateTimePicker value="Focus" focus />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Focus" focus />
            </div>

            <div>
                <DateTimePicker value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Disabled" disabled />
            </div>

            <div>
                <DateTimePicker value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Invalid" invalid />
            </div>

            <div>
                <DateTimePicker value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DateTimePicker value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Loading..." loading />
            </div>

        </div>
    </>
);
