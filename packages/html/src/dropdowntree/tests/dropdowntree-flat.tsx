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

            <span>DropdownTree Flat</span>
            <span>DropdownTree Flat RTL</span>

            <div>
                <DropdownTree fillMode="flat" placeholder="DropdownTree..." />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" placeholder="DropdownTree..." />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Normal" />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownTree fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
