import { Textbox, TextboxNormal, TextboxPrefix, TextboxSuffix } from '../../textbox';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TextBox Outline</span>
            <span>TextBox Outline RTL</span>

            <div>
                <TextboxNormal fillMode="outline" placeholder="TextBox..." />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="outline" placeholder="TextBox..." />
            </div>

            {[ 'normal', ...Textbox.states ].map((state) => (
                <>
                    <div>
                        <TextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <TextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextboxNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>

            <div>
                <TextboxPrefix fillMode="outline"></TextboxPrefix>
            </div>
            <div dir="rtl">
                <TextboxPrefix fillMode="outline"></TextboxPrefix>
            </div>

            <div>
                <TextboxSuffix fillMode="outline"></TextboxSuffix>
            </div>
            <div dir="rtl">
                <TextboxSuffix fillMode="outline"></TextboxSuffix>
            </div>
        </div>
    </>
);
