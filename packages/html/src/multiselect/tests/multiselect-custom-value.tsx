import { MultiSelectCustomValue } from '../templates/multiselect-custom-value';
import { MultiSelectGroupingCustomValue } from '../templates/multiselect-grouping-custom-value';
import { MultiSelectGroupingVirtualCustomValue } from '../templates/multiselect-grouping-virtual-custom-value';

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

            <span>Custom Value and MultiSelect Grouping</span>
            <span>Custom Value and MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGroupingCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectGroupingCustomValue focus />
            </div>

            <span>Custom Value + Virtualization + MultiSelect Grouping</span>
            <span>Custom Value + Virtualization + MultiSelect Grouping RTL</span>

            <div>
                <MultiSelectGroupingVirtualCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectGroupingVirtualCustomValue focus />
            </div>
        </div>
    </>
);
