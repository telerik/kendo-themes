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
            <span>MaskedTextBox Flat</span>
            <span>MaskedTextBox Flat RTL</span>

            <div>
                <MaskedTextboxNormal fillMode="flat" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="flat" />
            </div>
            <div>
                <MaskedTextboxNormal fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>

            {[ 'normal', ...MaskedTextbox.states ].map((state) => (
                <>
                    <div>
                        <MaskedTextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <MaskedTextboxNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <MaskedTextboxNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextboxNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
