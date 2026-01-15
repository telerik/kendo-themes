import { DatePicker, DatePickerNormal } from '../../datepicker';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-popup {
        width: max-content;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DatePicker</span>
            <span>DatePicker RTL</span>

            <div>
                <DatePickerNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DatePickerNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DatePicker.states ].map((state) => (
                <>
                    <div>
                        <DatePickerNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DatePickerNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DatePickerNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DatePickerNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
