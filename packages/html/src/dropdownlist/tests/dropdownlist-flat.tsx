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

            <span>DropdownList Flat</span>
            <span>DropdownList Flat RTL</span>

            <div>
                <DropdownList fillMode="flat" placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Normal" />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Valid" valid />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Valid" valid />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Valid Focus" valid focus />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Valid Focus" valid focus />
            </div>

            <div>
                <DropdownList fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownList fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
