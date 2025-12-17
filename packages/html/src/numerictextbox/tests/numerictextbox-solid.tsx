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
                <NumericTextboxNormal />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal />
            </div>
            <div>
                <NumericTextboxNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state) => (
                <>
                    <div>
                        <NumericTextboxNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <NumericTextboxNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <NumericTextboxNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
