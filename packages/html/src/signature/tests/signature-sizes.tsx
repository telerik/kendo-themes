import ReactDOM from 'react-dom/client';
import { Signature } from '../../signature';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    div[dir="rtl"] {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Signature</span>
            <span>Signature RTL</span>

            <div>
                <span>Small</span>
                <Signature size="small" />
            </div>
            <div dir="rtl">
                <span>Small</span>
                <Signature size="small" />
            </div>

            <div>
                <span>Medium</span>
                <Signature size="medium" />
            </div>
            <div dir="rtl">
                <span>Medium</span>
                <Signature size="medium" />
            </div>

            <div>
                <span>Large</span>
                <Signature size="large" />
            </div>
            <div dir="rtl">
                <span>Large</span>
                <Signature size="large" />
            </div>
        </div>
    </>
);
