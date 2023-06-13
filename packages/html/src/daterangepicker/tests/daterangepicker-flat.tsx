import { DateRangePicker, DateRangePickerNormal } from '../../daterangepicker';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>DateRangePicker Flat</span>
            <span>DateRangePicker Flat RTL</span>

            {[ 'normal', ...DateRangePicker.states ].map((state) => (
                <>
                    <div>
                        <span>{state}</span>
                        <DateRangePickerNormal { ...{ [state]: true }} fillMode="flat"/>
                    </div>
                    <div dir="rtl">
                        <span>{state}</span>
                        <DateRangePickerNormal { ...{ [state]: true }} fillMode="flat"/>
                    </div>
                </>
            ))}

            <div>
                <span>With Swap Button</span>
                <DateRangePickerNormal fillMode="flat" swapButton />
            </div>
            <div dir="rtl">
                <span>With Swap Button RTL</span>
                <DateRangePickerNormal fillMode="flat" swapButton />
            </div>
        </div>
    </>
);
