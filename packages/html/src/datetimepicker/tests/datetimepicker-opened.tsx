import { DateTimePicker } from '..';


const styles = `
    #test-area {
        max-width: 740px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateTimePicker</span>
            <span>DateTimePicker RTL</span>

            <div>
                <DateTimePicker value="Opened Date" opened />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Opened Date" opened />
            </div>

            <div>
                <DateTimePicker value="Opened Time" opened tab="time" />
            </div>
            <div dir="rtl">
                <DateTimePicker value="Opened Time" opened tab="time" />
            </div>

        </div>
    </>
);
