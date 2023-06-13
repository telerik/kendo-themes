import { DateTimePicker, DateTimePickerNormal } from '../../datetimepicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateTimePicker Flat</span>
            <span>DateTimePicker Flat RTL</span>

            <div>
                <DateTimePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateTimePicker.states ].map((state) => (
                <>
                    <div>
                        <DateTimePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <DateTimePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateTimePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
