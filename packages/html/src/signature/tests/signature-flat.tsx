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
                <Signature fillMode="flat"/>
            </div>
            <div dir="rtl">
                <Signature fillMode="flat"/>
            </div>

            <div>
                <Signature fillMode="flat" hover />
            </div>
            <div dir="rtl">
                <Signature fillMode="flat" hover />
            </div>

            <div>
                <Signature fillMode="flat" focus />
            </div>
            <div dir="rtl">
                <Signature fillMode="flat" focus />
            </div>

            <div>
                <Signature fillMode="flat" invalid />
            </div>
            <div dir="rtl">
                <Signature fillMode="flat" invalid />
            </div>

            <div>
                <Signature fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <Signature fillMode="flat" invalid focus />
            </div>

            <div>
                <Signature fillMode="flat" disabled />
            </div>
            <div dir="rtl">
                <Signature fillMode="flat" disabled />
            </div>

            <div className="k-colspan-all k-col-span-full">
                <Signature fillMode="flat" maximized />
            </div>

        </div>
    </>
);
