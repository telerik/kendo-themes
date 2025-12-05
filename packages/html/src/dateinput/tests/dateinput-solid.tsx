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

            <span>DateInput</span>
            <span>DateInput RTL</span>

            <div>
                <label htmlFor="dateinput-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-1" showClearButton showSpinButton placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-rtl-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-rtl-1" showClearButton showSpinButton placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`dateinput-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`dateinput-rtl-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-rtl-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="dateinput-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-invalid-focus" showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-rtl-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-rtl-invalid-focus" showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
