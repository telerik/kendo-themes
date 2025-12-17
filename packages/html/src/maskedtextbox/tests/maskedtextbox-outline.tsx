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
            <span>MaskedTextBox Outline</span>
            <span>MaskedTextBox Outline RTL</span>

            <div>
                <MaskedTextboxNormal fillMode="outline" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="outline" />
            </div>
            <div>
                <MaskedTextboxNormal fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state) => (
                <>
                    <div>
                        <MaskedTextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <MaskedTextboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
