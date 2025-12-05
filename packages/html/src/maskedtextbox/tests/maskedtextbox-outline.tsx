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
            <span>MaskedTextBox Outline</span>
            <span>MaskedTextBox Outline RTL</span>

            <div>
                <label htmlFor="maskedtextbox-outline-1" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-1" fillMode="outline" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-outline-2" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-2" fillMode="outline" />
            </div>
            <div>
                <label htmlFor="maskedtextbox-outline-3" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-3" fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-outline-4" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-4" fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`maskedtextbox-outline-state-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-outline-state-${index}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`maskedtextbox-outline-state-rtl-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-outline-state-rtl-${index}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="maskedtextbox-outline-invalid-focus" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-invalid-focus" value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-outline-invalid-focus-rtl" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-outline-invalid-focus-rtl" value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
