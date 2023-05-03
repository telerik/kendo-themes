import { DropdownListPopup } from '../../dropdownlist';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownList</span>
            <span>DropdownList RTL</span>

            <div>
                <DropdownListPopup value="Opened" />
            </div>
            <div dir="rtl">
                <DropdownListPopup value="Opened" />
            </div>

        </div>
    </>
);
