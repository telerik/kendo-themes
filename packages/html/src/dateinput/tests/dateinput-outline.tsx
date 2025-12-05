import { DateInput, DateInputNormal } from '../../dateinput';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateInput Outline</span>
            <span>DateInput Outline RTL</span>

            <div>
                <label htmlFor="dateinput-outline-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-outline-1" showClearButton showSpinButton fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-outline-rtl-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-outline-rtl-1" showClearButton showSpinButton fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`dateinput-outline-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-outline-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`dateinput-outline-rtl-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-outline-rtl-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="dateinput-outline-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-outline-invalid-focus" showClearButton showSpinButton value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-outline-rtl-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-outline-rtl-invalid-focus" showClearButton showSpinButton value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
