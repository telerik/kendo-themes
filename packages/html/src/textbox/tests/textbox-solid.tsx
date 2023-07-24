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

            <span>TextBox</span>
            <span>TextBox RTL</span>

            <div>
                <TextboxNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TextboxNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...Textbox.states ].map((state) => (
                <>
                    <div>
                        <TextboxNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <TextboxNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <TextboxNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TextboxNormal value="invalid focus" invalid focus />
            </div>

            <div>
                <TextboxPrefix></TextboxPrefix>
            </div>
            <div dir="rtl">
                <TextboxPrefix></TextboxPrefix>
            </div>

            <div>
                <TextboxSuffix></TextboxSuffix>
            </div>
            <div dir="rtl">
                <TextboxSuffix></TextboxSuffix>
            </div>
        </div>
    </>
);
