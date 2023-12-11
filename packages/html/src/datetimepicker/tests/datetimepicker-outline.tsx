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

            <span>DateTimePicker Outline</span>
            <span>DateTimePicker Outline RTL</span>

            <div>
                <DateTimePickerNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateTimePicker.states ].map((state) => (
                <>
                    <div>
                        <DateTimePickerNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <DateTimePickerNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateTimePickerNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>

            <div>
                <DateTimePickerNormal value="valid focus" fillMode="outline" valid focus />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal value="valid focus" fillMode="outline" valid focus />
            </div>
        </div>
    </>
);
