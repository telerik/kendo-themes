import { DatePicker, DatePickerNormal } from '../../datepicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DatePicker Flat</span>
            <span>DatePicker Flat RTL</span>

            <div>
                <DatePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DatePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DatePicker.states ].map((state) => (
                <>
                    <div>
                        <DatePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <DatePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DatePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <DatePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
