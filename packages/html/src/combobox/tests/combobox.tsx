import { Combobox } from '../../combobox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ComboBox</span>
            <span>ComboBox RTL</span>

            <div>
                <Combobox placeholder="ComboBox..." />
            </div>
            <div dir="rtl">
                <Combobox placeholder="ComboBox..." />
            </div>

            <div>
                <Combobox value="Normal" />
            </div>
            <div dir="rtl">
                <Combobox value="Normal" />
            </div>

            <div>
                <Combobox value="Hover" hover />
            </div>
            <div dir="rtl">
                <Combobox value="Hover" hover />
            </div>

            <div>
                <Combobox value="Focus" focus />
            </div>
            <div dir="rtl">
                <Combobox value="Focus" focus />
            </div>

            <div>
                <Combobox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Combobox value="Disabled" disabled />
            </div>

            <div>
                <Combobox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Combobox value="Invalid" invalid />
            </div>

            <div>
                <Combobox value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Combobox value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Combobox value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Combobox value="Loading..." loading />
            </div>

        </div>
    </>
);
