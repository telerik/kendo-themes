import { MultiSelectVirtualizationCustomValue } from '..';

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

            <span>MultiSelect Virtualization Custom Value</span>
            <span>MultiSelect Virtualization Custom Value RTL</span>

            <div>
                <MultiSelectVirtualizationCustomValue focus />
            </div>
            <div dir="rtl">
                <MultiSelectVirtualizationCustomValue focus />
            </div>
        </div>
    </>
);
