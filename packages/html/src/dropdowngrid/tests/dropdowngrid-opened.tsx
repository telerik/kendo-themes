import { DropdownGridPopup } from '../../dropdowngrid';

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

            <span>DropdownGrid</span>
            <span>DropdownGrid RTL</span>

            <div>
                <DropdownGridPopup value="Opened" />
            </div>
            <div dir="rtl">
                <DropdownGridPopup value="Opened" />
            </div>

        </div>
    </>
);
