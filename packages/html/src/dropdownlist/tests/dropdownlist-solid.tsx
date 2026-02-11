import { DropdownList } from '../dropdownlist.spec';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownList Solid</span>
            <span>DropdownList Solid RTL</span>

            <div>
                <DropdownList fillMode="solid" />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" />
            </div>
            <div>
                <DropdownList fillMode="solid" placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Normal" />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Hover" hover />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Focus" focus />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Disabled" disabled />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Invalid" invalid />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Valid" valid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Valid" valid />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownList fillMode="solid" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="solid" value="Loading..." loading />
            </div>

        </div>
    </>
);
