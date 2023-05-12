import { DateInput } from '../../dateinput';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateInput Flat</span>
            <span>DateInput Flat RTL</span>

            <div>
                <DateInput fillMode="flat" placeholder="DateInput..." />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" placeholder="DateInput..." />
            </div>

            <div>
                <DateInput fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Normal" />
            </div>

            <div>
                <DateInput fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <DateInput fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <DateInput fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <DateInput fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <DateInput fillMode="flat" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DateInput fillMode="flat" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DateInput fillMode="flat" value="Loading..." loading />
            </div>

        </div>
    </>
);
