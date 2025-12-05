import { MaskedTextbox, MaskedTextboxNormal } from '../../maskedtextbox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>MaskedTextBox Flat</span>
            <span>MaskedTextBox Flat RTL</span>

            <div>
                <label htmlFor="maskedtextbox-flat-1" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-1" fillMode="flat" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-flat-2" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-2" fillMode="flat" />
            </div>
            <div>
                <label htmlFor="maskedtextbox-flat-3" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-3" fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-flat-4" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-4" fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`maskedtextbox-flat-state-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-flat-state-${index}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`maskedtextbox-flat-state-rtl-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-flat-state-rtl-${index}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="maskedtextbox-flat-invalid-focus" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-invalid-focus" value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-flat-invalid-focus-rtl" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-flat-invalid-focus-rtl" value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
