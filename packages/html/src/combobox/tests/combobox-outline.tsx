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

            <span>ComboBox Outline</span>
            <span>ComboBox Outline RTL</span>

            <div>
                <Combobox fillMode="outline" placeholder="ComboBox..." />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" placeholder="ComboBox..." />
            </div>

            <div>
                <Combobox fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Normal" />
            </div>

            <div>
                <Combobox fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <Combobox fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <Combobox fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <Combobox fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <Combobox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Combobox fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Combobox fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
