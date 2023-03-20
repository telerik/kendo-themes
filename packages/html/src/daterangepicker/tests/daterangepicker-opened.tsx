import ReactDOM from 'react-dom/client';
import { DateRangePicker } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateRangePicker Opened</span>
            <span>DateRangePicker Opened RTL</span>

            <div>
                <DateRangePicker opened />
            </div>
            <div dir="rtl">
                <DateRangePicker opened />
            </div>
        </div>
    </>
);
