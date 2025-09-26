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
                <NumericTextboxNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="solid" />
            </div>
            <div>
                <NumericTextboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state) => (
                <>
                    <div>
                        <NumericTextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <NumericTextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <NumericTextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
