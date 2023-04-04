import ReactDOM from 'react-dom/client';
import { DateInput } from '../../dateinput';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateInput</span>
            <span>DateInput RTL</span>

            <div>
                <DateInput placeholder="DateInput..." />
            </div>
            <div dir="rtl">
                <DateInput placeholder="DateInput..." />
            </div>

            <div>
                <DateInput value="Normal" />
            </div>
            <div dir="rtl">
                <DateInput value="Normal" />
            </div>

            <div>
                <DateInput value="Hover" hover />
            </div>
            <div dir="rtl">
                <DateInput value="Hover" hover />
            </div>

            <div>
                <DateInput value="Focus" focus />
            </div>
            <div dir="rtl">
                <DateInput value="Focus" focus />
            </div>

            <div>
                <DateInput value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DateInput value="Disabled" disabled />
            </div>

            <div>
                <DateInput value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DateInput value="Invalid" invalid />
            </div>

            <div>
                <DateInput value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateInput value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DateInput value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DateInput value="Loading..." loading />
            </div>

        </div>
    </>
);
