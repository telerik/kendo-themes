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

            <span>DropdownGrid Outline</span>
            <span>DropdownGrid Outline RTL</span>

            <div>
                <DropdownGrid fillMode="outline" placeholder="DropdownGrid..." />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" placeholder="DropdownGrid..." />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Normal" />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownGrid fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
