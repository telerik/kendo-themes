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
            <span>NumericTextBox</span>
            <span>NumericTextBox RTL</span>

            <div>
                <NumericTextbox placeholder="NumericTextBox..." />
            </div>
            <div dir="rtl">
                <NumericTextbox placeholder="NumericTextBox..." />
            </div>

            <div>
                <NumericTextbox value="Normal" />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Normal" />
            </div>

            <div>
                <NumericTextbox value="Hover" hover />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Hover" hover />
            </div>

            <div>
                <NumericTextbox value="Focus" focus />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Focus" focus />
            </div>

            <div>
                <NumericTextbox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Disabled" disabled />
            </div>

            <div>
                <NumericTextbox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Invalid" invalid />
            </div>

            <div>
                <NumericTextbox value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <NumericTextbox value="Invalid Focus" invalid focus />
            </div>
        </div>
    </>
);
