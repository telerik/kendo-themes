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

            <span>TimePicker</span>
            <span>TimePicker RTL</span>

            <div>
                <TimePickerNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <TimePickerNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...TimePicker.states ].map((state) => (
                <>
                    <div>
                        <TimePickerNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <TimePickerNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <TimePickerNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <TimePickerNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
