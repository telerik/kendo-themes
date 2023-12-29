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

            <span>TextBox Flat</span>
            <span>TextBox Flat RTL</span>

            <div>
                <TextboxNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textbox.states ].map((state) => (
                <>
                    <div>
                        <TextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <TextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextboxNormal fillMode="flat" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="flat" value="invalid focus" invalid focus />
            </div>

            <div>
                <TextboxNormal fillMode="flat" value="valid focus" valid focus />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="flat" value="valid focus" valid focus />
            </div>
        </div>
    </>
);
