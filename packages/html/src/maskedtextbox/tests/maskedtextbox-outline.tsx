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
            <span>MaskedTextBox Outline</span>
            <span>MaskedTextBox Outline RTL</span>

            <div>
                <MaskedTextbox fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" placeholder="(___) ___-__-__-__" />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Normal" />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <MaskedTextbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <MaskedTextbox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
