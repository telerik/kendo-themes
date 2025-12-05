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
            <span>NumericTextBox Flat</span>
            <span>NumericTextBox Flat RTL</span>

            <div>
                <label htmlFor="numerictextbox-flat-1" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-flat-1" fillMode="flat" />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-flat-2" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-flat-2" fillMode="flat" />
            </div>

            <div>
                <label htmlFor="numerictextbox-flat-3" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-flat-3" fillMode="flat" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-flat-4" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-flat-4" fillMode="flat" placeholder="NumericTextBox..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`numerictextbox-flat-${state}-${index * 2 + 5}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-flat-${state}-${index * 2 + 5}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-flat-${state}-${index * 2 + 6}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-flat-${state}-${index * 2 + 6}`} { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="numerictextbox-flat-invalid-focus" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-flat-invalid-focus" value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-flat-invalid-focus-rtl" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-flat-invalid-focus-rtl" value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
