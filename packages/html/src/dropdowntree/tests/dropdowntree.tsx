import { DropdownTree } from '../../dropdowntree';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownTree</span>
            <span>DropdownTree RTL</span>

            <div>
                <DropdownTree placeholder="DropdownTree..." />
            </div>
            <div dir="rtl">
                <DropdownTree placeholder="DropdownTree..." />
            </div>

            <div>
                <DropdownTree value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownTree value="Normal" />
            </div>

            <div>
                <DropdownTree value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownTree value="Hover" hover />
            </div>

            <div>
                <DropdownTree value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownTree value="Focus" focus />
            </div>

            <div>
                <DropdownTree value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownTree value="Disabled" disabled />
            </div>

            <div>
                <DropdownTree value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownTree value="Invalid" invalid />
            </div>

            <div>
                <DropdownTree value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTree value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownTree value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownTree value="Loading..." loading />
            </div>

        </div>
    </>
);
