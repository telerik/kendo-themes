import { DateRangePicker, DateRangePickerNormal } from '../../daterangepicker';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>DateRangePicker</span>
            <span>DateRangePicker RTL</span>

            {[ 'normal', ...DateRangePicker.states ].map((state) => (
                <>
                    <div>
                        <span>{state}</span>
                        <DateRangePickerNormal { ...{ [state]: true }} />
                    </div>
                    <div dir="rtl">
                        <span>{state}</span>
                        <DateRangePickerNormal { ...{ [state]: true }} />
                    </div>
                </>
            ))}

            <div>
                <span>With Swap Button</span>
                <DateRangePickerNormal swapButton />
            </div>
            <div dir="rtl">
                <span>With Swap Button RTL</span>
                <DateRangePickerNormal swapButton />
            </div>
        </div>
    </>
);
