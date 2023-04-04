import ReactDOM from 'react-dom/client';
import { DatePicker } from '../../datepicker';

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

            <span>DatePicker Outline</span>
            <span>DatePicker Outline RTL</span>

            <div>
                <DatePicker fillMode="outline" placeholder="DatePicker..." />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" placeholder="DatePicker..." />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Normal" />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DatePicker fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DatePicker fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
