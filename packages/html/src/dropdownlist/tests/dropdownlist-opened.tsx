import { DropdownListPopup } from '../../dropdownlist';


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

            <span>DropdownList Popup Opened</span>
            <span>DropdownList Popup Opened RTL</span>

            <div>
                <DropdownListPopup value="Opened" />
            </div>
            <div dir="rtl">
                <DropdownListPopup value="Opened" />
            </div>

        </div>
    </>
);
