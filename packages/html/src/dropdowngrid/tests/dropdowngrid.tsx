import { DropdownGrid } from '../../dropdowngrid';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownGrid</span>
            <span>DropdownGrid RTL</span>

            <div>
                <DropdownGrid placeholder="DropdownGrid..." />
            </div>
            <div dir="rtl">
                <DropdownGrid placeholder="DropdownGrid..." />
            </div>

            <div>
                <DropdownGrid value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Normal" />
            </div>

            <div>
                <DropdownGrid value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Hover" hover />
            </div>

            <div>
                <DropdownGrid value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Focus" focus />
            </div>

            <div>
                <DropdownGrid value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Disabled" disabled />
            </div>

            <div>
                <DropdownGrid value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Invalid" invalid />
            </div>

            <div>
                <DropdownGrid value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownGrid value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownGrid value="Loading..." loading />
            </div>

        </div>
    </>
);
