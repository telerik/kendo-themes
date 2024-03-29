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

            <span>TimePicker Flat</span>
            <span>TimePicker Flat RTL</span>

            <div>
                <TimePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TimePickerNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...TimePicker.states ].map((state) => (
                <>
                    <div>
                        <TimePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <TimePickerNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <TimePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <TimePickerNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
