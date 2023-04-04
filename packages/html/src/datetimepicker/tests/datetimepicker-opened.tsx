import ReactDOM from 'react-dom/client';
import { DateTimePicker } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 740px;
    }
`;

root.render(
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
