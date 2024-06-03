import { Textbox, TextboxNormal } from '../../textbox';

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
                <TextboxNormal fillMode="outline" />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="outline" />
            </div>
            <div>
                <TextboxNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="outline" placeholder="placeholder..." />
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
        </div>
    </>
);
