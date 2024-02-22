import { DropdownList } from '../../dropdownlist';


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
                <DropdownList placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownList placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownList value="Normal" />
            </div>

            <div>
                <DropdownList value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownList value="Hover" hover />
            </div>

            <div>
                <DropdownList value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownList value="Focus" focus />
            </div>

            <div>
                <DropdownList value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownList value="Disabled" disabled />
            </div>

            <div>
                <DropdownList value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownList value="Invalid" invalid />
            </div>

            <div>
                <DropdownList value="Valid" valid />
            </div>
            <div dir="rtl">
                <DropdownList value="Valid" valid />
            </div>

            <div>
                <DropdownList value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownList value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownList value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownList value="Loading..." loading />
            </div>

        </div>
    </>
);
