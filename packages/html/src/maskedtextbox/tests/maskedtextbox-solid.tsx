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
                <MaskedTextboxNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="solid" />
            </div>
            <div>
                <MaskedTextboxNormal fillMode="solid" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="solid" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state) => (
                <>
                    <div>
                        <MaskedTextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <MaskedTextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
