import { TimePicker, TimePickerNormal } from '../../timepicker';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>TimePicker Outline</span>
            <span>TimePicker Outline RTL</span>

            <div>
                <TimePickerNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TimePickerNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...TimePicker.states ].map((state) => (
                <>
                    <div>
                        <TimePickerNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <TimePickerNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TimePickerNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <TimePickerNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
