import { Signature } from '../../signature';


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
