import { RadioButtonWithLabelAfter, RadioButtonInsideLabel } from '../../radio';

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

            {[ 'unchecked', 'checked' ].map((state) => (
                <>
                    <div>
                        <RadioButtonWithLabelAfter id={'rad-' + [ state ]} { ...{ [state]: true }}>{state}</RadioButtonWithLabelAfter>
                    </div>
                    <div>
                        <RadioButtonInsideLabel { ...{ [state]: true }} >{state}</RadioButtonInsideLabel>
                    </div>

                    <div dir="rtl">
                        <RadioButtonWithLabelAfter id={'rad-' + [ state ] + '-rtl'} { ...{ [state]: true }}>{state}</RadioButtonWithLabelAfter>
                    </div>
                    <div dir="rtl">
                        <RadioButtonInsideLabel { ...{ [state]: true }} >{state}</RadioButtonInsideLabel>
                    </div>
                </>
            ))}

            <div className="k-ripple-container">
                <RadioButtonWithLabelAfter id="rad-ripple" focus className="k-ripple-focus">ripple</RadioButtonWithLabelAfter>
            </div>
            <div className="k-ripple-container">
                <RadioButtonInsideLabel focus className="k-ripple-focus" >ripple</RadioButtonInsideLabel>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <RadioButtonWithLabelAfter id="rad-ripple-rtl" focus className="k-ripple-focus">ripple</RadioButtonWithLabelAfter>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <RadioButtonInsideLabel focus className="k-ripple-focus">ripple</RadioButtonInsideLabel>
            </div>

            <div>
                <RadioButtonWithLabelAfter id="rad-long" checked>Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonWithLabelAfter>
            </div>
            <div>
                <RadioButtonInsideLabel checked >Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonInsideLabel>
            </div>
            <div dir="rtl">
                <RadioButtonWithLabelAfter id="rad-long-rtl" checked>Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonWithLabelAfter>
            </div>
            <div dir="rtl">
                <RadioButtonInsideLabel checked >Long label Vivamus a arcu lacus. Integer augue leo.</RadioButtonInsideLabel>
            </div>
        </div>
    </>
);
