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

            <span>TextBox Solid</span>
            <span>TextBox Solid RTL</span>

            <div>
                <TextboxNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="solid" />
            </div>

            <div>
                <TextboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textbox.states ].map((state) => (
                <>
                    <div>
                        <TextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <TextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
