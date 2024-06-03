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

            <span>DropdownList Outline</span>
            <span>DropdownList Outline RTL</span>

            <div>
                <DropdownList fillMode="outline" />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" />
            </div>
            <div>
                <DropdownList fillMode="outline" placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Normal" />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Valid" valid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Valid" valid />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownList fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
