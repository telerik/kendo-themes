import { Searchbox } from '../../searchbox';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Searchbox Flat</span>
            <span>Searchbox Flat RTL</span>

            <div>
                <Searchbox fillMode="flat" placeholder="Searchbox..." />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" placeholder="Searchbox..." />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Normal" />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Normal" />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Hover" hover />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Hover" hover />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Focus" focus />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Focus" focus />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Disabled" disabled />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Invalid" invalid />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Invalid focus" invalid focus />
            </div>

            <div>
                <Searchbox fillMode="flat" value="Loading" loading />
            </div>
            <div dir="rtl">
                <Searchbox fillMode="flat" value="Loading" loading />
            </div>

        </div>
    </>
);
