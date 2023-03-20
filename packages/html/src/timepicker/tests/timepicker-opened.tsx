import ReactDOM from 'react-dom/client';
import { TimePicker } from '..';

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

            <span>TimePicker</span>
            <span>TimePicker RTL</span>

            <div>
                <TimePicker value="Opened" opened />
            </div>
            <div dir="rtl">
                <TimePicker value="Opened" opened />
            </div>

        </div>
    </>
);
