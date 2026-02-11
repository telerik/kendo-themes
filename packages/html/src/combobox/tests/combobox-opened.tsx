import { ComboboxPopup } from '../../combobox/templates/combobox-popup';

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
        </div>
    </>
);
