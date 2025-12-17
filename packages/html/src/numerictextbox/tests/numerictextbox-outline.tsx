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
                <NumericTextboxNormal fillMode="outline" />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="outline" />
            </div>
            <div>
                <NumericTextboxNormal fillMode="outline" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal fillMode="outline" placeholder="NumericTextBox..." />
            </div>

            {[ 'normal', ...NumericTextbox.states ].map((state) => (
                <>
                    <div>
                        <NumericTextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <NumericTextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <NumericTextboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
