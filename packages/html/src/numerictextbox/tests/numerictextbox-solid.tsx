import { NumericTextbox, NumericTextboxNormal } from '../../numerictextbox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>NumericTextBox</span>
            <span>NumericTextBox RTL</span>

            <div>
                <label htmlFor="numerictextbox-solid-1" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-solid-1" />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-solid-2" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-solid-2" />
            </div>
            <div>
                <label htmlFor="numerictextbox-solid-3" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-solid-3" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-solid-4" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-solid-4" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`numerictextbox-solid-${state}-${index * 2 + 5}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-solid-${state}-${index * 2 + 5}`} { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-solid-${state}-${index * 2 + 6}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-solid-${state}-${index * 2 + 6}`} { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="numerictextbox-solid-invalid-focus" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-solid-invalid-focus" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-solid-invalid-focus-rtl" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-solid-invalid-focus-rtl" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
