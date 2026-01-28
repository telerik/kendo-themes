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
                <DateInputNormal fillMode="solid" showClearButton showSpinButton placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateInputNormal fillMode="solid" showClearButton showSpinButton placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state) => (
                <>
                    <div>
                        <DateInputNormal fillMode="solid" showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>

                    <div dir="rtl">
                        <DateInputNormal fillMode="solid" showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateInputNormal fillMode="solid" showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateInputNormal fillMode="solid" showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
