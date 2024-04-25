import { Signature, SignatureMaximized, SignatureNormal } from '../../signature';


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

            {[ "normal", ...Signature.states ].map(( state ) => (
                <>
                    <div>
                        <SignatureNormal fillMode="flat" {...{ [state]: true }}/>
                    </div>
                    <div dir="rtl">
                        <SignatureNormal fillMode="flat" {...{ [state]: true }}/>
                    </div>
                </>
            ))}

            <div>
                <SignatureNormal fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <SignatureNormal fillMode="flat" invalid focus />
            </div>

            <div className="k-colspan-all k-col-span-full">
                <SignatureMaximized fillMode="flat" />
            </div>

        </div>
    </>
);
