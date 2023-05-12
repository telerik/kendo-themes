import { Signature } from '../../signature';


const styles = `
    div[dir="rtl"] {
        display: flex;
        justify-content: end;
    }
    .k-signature-minimize {
        transform: rotate(180deg);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Signature</span>
            <span>Signature RTL</span>

            <div>
                <Signature fillMode="outline"/>
            </div>
            <div dir="rtl">
                <Signature fillMode="outline"/>
            </div>

            <div>
                <Signature fillMode="outline" hover />
            </div>
            <div dir="rtl">
                <Signature fillMode="outline" hover />
            </div>

            <div>
                <Signature fillMode="outline" focus />
            </div>
            <div dir="rtl">
                <Signature fillMode="outline" focus />
            </div>

            <div>
                <Signature fillMode="outline" invalid />
            </div>
            <div dir="rtl">
                <Signature fillMode="outline" invalid />
            </div>

            <div>
                <Signature fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <Signature fillMode="outline" invalid focus />
            </div>

            <div>
                <Signature fillMode="outline" disabled />
            </div>
            <div dir="rtl">
                <Signature fillMode="outline" disabled />
            </div>

            <div className="k-colspan-all k-col-span-full">
                <Signature fillMode="outline" maximized />
            </div>

        </div>
    </>
);
