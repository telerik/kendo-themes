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
            <span>NumericTextBox Outline</span>
            <span>NumericTextBox Outline RTL</span>

            <div>
                <label htmlFor="numerictextbox-outline-1" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-outline-1" fillMode="outline" />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-outline-2" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-outline-2" fillMode="outline" />
            </div>
            <div>
                <label htmlFor="numerictextbox-outline-3" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-outline-3" fillMode="outline" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-outline-4" className="k-label">Enter number</label>
                <NumericTextboxNormal id="numerictextbox-outline-4" fillMode="outline" placeholder="NumericTextBox..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`numerictextbox-outline-${state}-${index * 2 + 5}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-outline-${state}-${index * 2 + 5}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`numerictextbox-outline-${state}-${index * 2 + 6}`} className="k-label">Enter number {state !== 'normal' ? `(${state})` : ''}</label>
                        <NumericTextboxNormal id={`numerictextbox-outline-${state}-${index * 2 + 6}`} { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="numerictextbox-outline-invalid-focus" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-outline-invalid-focus" value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="numerictextbox-outline-invalid-focus-rtl" className="k-label">Enter number (invalid focus)</label>
                <NumericTextboxNormal id="numerictextbox-outline-invalid-focus-rtl" value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
