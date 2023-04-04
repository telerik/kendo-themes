import ReactDOM from 'react-dom/client';
import { Signature } from '../../signature';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    div[dir="rtl"] {
        display: flex;
        justify-content: end;
    }
    .k-signature-minimize {
        transform: rotate(180deg);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Signature</span>
            <span>Signature RTL</span>

            <div>
                <Signature/>
            </div>
            <div dir="rtl">
                <Signature/>
            </div>

            <div>
                <Signature hover />
            </div>
            <div dir="rtl">
                <Signature hover />
            </div>

            <div>
                <Signature focus />
            </div>
            <div dir="rtl">
                <Signature focus />
            </div>

            <div>
                <Signature invalid />
            </div>
            <div dir="rtl">
                <Signature invalid />
            </div>

            <div>
                <Signature invalid focus />
            </div>
            <div dir="rtl">
                <Signature invalid focus />
            </div>

            <div>
                <Signature disabled />
            </div>
            <div dir="rtl">
                <Signature disabled />
            </div>

            <div className="k-colspan-all k-col-span-full">
                <Signature maximized />
            </div>

        </div>
    </>
);
