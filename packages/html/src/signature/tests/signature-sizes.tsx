import { Signature, SignatureNormal } from '../../signature';


const styles = `
    div[dir="rtl"] {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Signature</span>
            <span>Signature RTL</span>

            { Signature.options.size.map(( size ) =>(
                <>
                    <div>
                        <span>{size}</span>
                        <SignatureNormal size={size} />
                    </div>
                    <div dir="rtl">
                        <span>{size}</span>
                        <SignatureNormal size={size} />
                    </div>
                </>
            ))}
        </div>
    </>
);
