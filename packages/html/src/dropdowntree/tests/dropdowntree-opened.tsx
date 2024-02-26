import { DropdownTreePopup, DropdownTreeFiltering } from '../../dropdowntree';

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

            <span>DropdownTree</span>
            <span>DropdownTree RTL</span>

            <div>
                <DropdownTreePopup value="Opened" />
            </div>
            <div>
                <DropdownTreePopup value="Opened" dir="rtl" />
            </div>

            <div>
                <DropdownTreeFiltering value="Filtering" />
            </div>
            <div>
                <DropdownTreeFiltering value="Filtering" dir="rtl" />
            </div>

        </div>
    </>
);
