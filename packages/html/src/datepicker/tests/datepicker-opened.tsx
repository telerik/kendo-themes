import ReactDOM from 'react-dom/client';
import { DatePicker } from '..';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);


const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-popup {
        width: max-content;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DatePicker</span>
            <span>DatePicker RTL</span>

            <div>
                <DatePicker value="Opened" opened />
            </div>
            <div dir="rtl">
                <DatePicker value="Opened" opened dir="rtl" />
            </div>

        </div>
    </>
);
