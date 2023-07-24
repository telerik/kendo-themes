import { RadioButton, RadioButtonLabel, RadioButtonInsideLabel } from '../../radio';

const styles = `
    .k-ripple-container .k-radio:focus::after,
    .k-ripple-container .k-radio.k-focus::after {
        transform: translate(-50%, -50%) scale(1);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>Radio button</span>
            <span>In label</span>
            <span dir="rtl">Radio button RTL</span>
            <span dir="rtl">In label RTL</span>

            {[ 'unchecked', ...RadioButton.states ].map((state) => (
                <>
                    <div>
                        <RadioButtonLabel id={'rad-' + [ state ]} { ...{ [state]: true }}>{state}</RadioButtonLabel>
                    </div>
                    <div>
                        <RadioButtonInsideLabel { ...{ [state]: true }} >{state}</RadioButtonInsideLabel>
                    </div>

                    <div dir="rtl">
                        <RadioButtonLabel id={'rad-' + [ state ] + '-rtl'} { ...{ [state]: true }}>{state}</RadioButtonLabel>
                    </div>
                    <div dir="rtl">
                        <RadioButtonInsideLabel { ...{ [state]: true }} >{state}</RadioButtonInsideLabel>
                    </div>
                </>
            ))}

            <div>
                <RadioButtonLabel id="rad-disabled-checked" disabled checked>disabled checked</RadioButtonLabel>
            </div>
            <div>
                <RadioButtonInsideLabel disabled checked >disabled checked</RadioButtonInsideLabel>
            </div>
            <div dir="rtl">
                <RadioButtonLabel id="rad-disabled-checked-rtl" disabled checked>disabled checked</RadioButtonLabel>
            </div>
            <div dir="rtl">
                <RadioButtonInsideLabel disabled checked >disabled checked</RadioButtonInsideLabel>
            </div>

            <div className="k-ripple-container">
                <RadioButtonLabel id="rad-ripple" focus>ripple</RadioButtonLabel>
            </div>
            <div className="k-ripple-container">
                <RadioButtonInsideLabel focus >ripple</RadioButtonInsideLabel>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <RadioButtonLabel id="rad-ripple-rtl" focus>ripple</RadioButtonLabel>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <RadioButtonInsideLabel focus >ripple</RadioButtonInsideLabel>
            </div>

            <div>
                <RadioButtonLabel id="rad-long" checked>Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonLabel>
            </div>
            <div>
                <RadioButtonInsideLabel checked >Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonInsideLabel>
            </div>
            <div dir="rtl">
                <RadioButtonLabel id="rad-long-rtl" checked>Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonLabel>
            </div>
            <div dir="rtl">
                <RadioButtonInsideLabel checked >Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonInsideLabel>
            </div>
        </div>
    </>
);
