import { MultiSelectCustomValue, MultiSelectGroupingModernCustomValue } from '..';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 360px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>MultiSelect Custom Value</span>
            <span>MultiSelect Custom Value RTL</span>

            <div>
                <MultiSelectCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectCustomValue focus />
            </div>

            <span>Custom Value and Modern MultiSelect Grouping</span>
            <span>Custom Value and Modern MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGroupingModernCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectGroupingModernCustomValue focus />
            </div>
        </div>
    </>
);
