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

            <span>DateTimePicker</span>
            <span>DateTimePicker RTL</span>

            <div>
                <DateTimePickerNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateTimePicker.states ].map((state) => (
                <>
                    <div>
                        <DateTimePickerNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DateTimePickerNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateTimePickerNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
