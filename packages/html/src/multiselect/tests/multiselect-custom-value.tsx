import { MultiSelectCustomValue, MultiSelectGroupingModernCustomValue, MultiSelectGroupingVirtualModernCustomValue } from '..';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 360px);
    }

    .k-animation-container {
        position: relative;
    }

    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
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

            <span>Custom Value + Virtualization + Modern MultiSelect Grouping</span>
            <span>Custom Value + Virtualization + Modern MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGroupingVirtualModernCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectGroupingVirtualModernCustomValue focus />
            </div>
        </div>
    </>
);
