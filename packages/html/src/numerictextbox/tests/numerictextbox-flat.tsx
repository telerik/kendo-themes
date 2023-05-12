import { NumericTextbox } from '../../numerictextbox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>NumericTextBox Flat</span>
            <span>NumericTextBox Flat RTL</span>

            <div>
                <NumericTextbox fillMode="flat" placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" placeholder="NumericTextBox..." />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Normal" />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <NumericTextbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextbox fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
