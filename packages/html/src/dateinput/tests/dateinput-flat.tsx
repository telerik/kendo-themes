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

            <span>DateInput Flat</span>
            <span>DateInput Flat RTL</span>

            <div>
                <label htmlFor="dateinput-flat-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-flat-1" showClearButton showSpinButton fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-flat-rtl-1" className="k-label">Select date</label>
                <DateInputNormal id="dateinput-flat-rtl-1" showClearButton showSpinButton fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state, index) => (
                <>
                    <div>
                        <label htmlFor={`dateinput-flat-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-flat-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <label htmlFor={`dateinput-flat-rtl-${index + 2}`} className="k-label">Select date ({state})</label>
                        <DateInputNormal id={`dateinput-flat-rtl-${index + 2}`} showClearButton { ...{ [state]: true }} showSpinButton fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <label htmlFor="dateinput-flat-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-flat-invalid-focus" showClearButton showSpinButton value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <label htmlFor="dateinput-flat-rtl-invalid-focus" className="k-label">Select date (invalid focus)</label>
                <DateInputNormal id="dateinput-flat-rtl-invalid-focus" showClearButton showSpinButton value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
