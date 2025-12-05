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
            <span>MaskedTextBox</span>
            <span>MaskedTextBox RTL</span>

            <div>
                <label htmlFor="maskedtextbox-solid-1" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-1" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-solid-2" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-2" />
            </div>
            <div>
                <label htmlFor="maskedtextbox-solid-3" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-3" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-solid-4" className="k-label">Phone number</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-4" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`maskedtextbox-solid-state-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-solid-state-${index}`} { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`maskedtextbox-solid-state-rtl-${index}`} className="k-label">Phone number ({state})</label>
                        <MaskedTextboxNormal id={`maskedtextbox-solid-state-rtl-${index}`} { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="maskedtextbox-solid-invalid-focus" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-invalid-focus" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="maskedtextbox-solid-invalid-focus-rtl" className="k-label">Phone number (invalid focus)</label>
                <MaskedTextboxNormal id="maskedtextbox-solid-invalid-focus-rtl" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
