import { ComboboxPopup, ComboboxNoData, ComboboxWithIcons } from '../../combobox';

const styles = `
    #test-area {
        max-width: 660px;
    }
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ComboBox Popup Opened</span>
            <span>ComboBox Popup Opened RTL</span>

            <div>
                <ComboboxPopup value="Opened" />
            </div>
            <div dir="rtl">
                <ComboboxPopup value="Opened" />
            </div>

            <span>ComboBox No Data</span>
            <span>ComboBox With Icons</span>

            <div>
                <ComboboxNoData value="No results" />
            </div>
            <div>
                <ComboboxWithIcons value="With icons" />
            </div>
        </div>
    </>
);
