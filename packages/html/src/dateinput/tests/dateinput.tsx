import { DateInput, DateInputNormal } from '..';


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
                <DateInputNormal showClearButton showSpinButton placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateInputNormal showClearButton showSpinButton placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state) => (
                <>
                    <div>
                        <DateInputNormal showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>

                    <div dir="rtl">
                        <DateInputNormal showClearButton { ...{ [state]: true }} showSpinButton value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateInputNormal showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateInputNormal showClearButton showSpinButton value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
