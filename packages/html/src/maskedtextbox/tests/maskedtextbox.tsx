import { MaskedTextbox, MaskedTextboxNormal } from '../../maskedtextbox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>MaskedTextBox</span>
            <span>MaskedTextBox RTL</span>

            <div>
                <MaskedTextboxNormal />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal />
            </div>
            <div>
                <MaskedTextboxNormal placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state) => (
                <>
                    <div>
                        <MaskedTextboxNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <MaskedTextboxNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
