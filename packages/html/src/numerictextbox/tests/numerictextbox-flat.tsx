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
                <NumericTextboxNormal fillMode="flat" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="flat" placeholder="NumericTextBox..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state) => (
                <>
                    <div>
                        <NumericTextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <NumericTextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <NumericTextboxNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
