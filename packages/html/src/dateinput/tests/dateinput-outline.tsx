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
                <DateInputNormal showSpinButton={true} fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateInputNormal showSpinButton={true} fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state) => (
                <>
                    <div>
                        <DateInputNormal { ...{ [state]: true }} showSpinButton={true} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <DateInputNormal { ...{ [state]: true }} showSpinButton={true} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateInputNormal showSpinButton={true} value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <DateInputNormal showSpinButton={true} value="invalid focus" fillMode="outline" invalid focus />
            </div>

            <div>
                <DateInputNormal showSpinButton={true} value="valid focus" fillMode="outline" valid focus />
            </div>
            <div dir="rtl">
                <DateInputNormal showSpinButton={true} value="valid focus" fillMode="outline" valid focus />
            </div>
        </div>
    </>
);
