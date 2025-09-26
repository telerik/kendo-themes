import { DateTimePicker, DateTimePickerNormal } from '..';


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
                <DateTimePickerNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateTimePicker.states ].map((state) => (
                <>
                    <div>
                        <DateTimePickerNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DateTimePickerNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateTimePickerNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DateTimePickerNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
