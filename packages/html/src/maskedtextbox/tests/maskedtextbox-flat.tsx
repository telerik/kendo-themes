import { MaskedTextbox } from '../../maskedtextbox';


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
                <MaskedTextbox fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" placeholder="(___) ___-__-__-__" />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Normal" />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <MaskedTextbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
