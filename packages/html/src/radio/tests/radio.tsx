import { RadioButton } from '../../radio';


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

            <div>
                <RadioButton id="rad1" checked />
                <label className="k-radio-label" htmlFor="rad1">Checked</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="rad1-rtl" checked />
                <label className="k-radio-label" htmlFor="rad1-rtl">Checked</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton checked />
                    Checked
                </label>
            </div>

            <div>
                <RadioButton id="rad2" disabled checked />
                <label className="k-radio-label" htmlFor="rad2">Checked</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton disabled checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="rad2-rtl" disabled checked />
                <label className="k-radio-label" htmlFor="rad2-rtl">Checked</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton disabled checked />
                    Checked
                </label>
            </div>

            <div>
                <RadioButton id="rad3" />
                <label className="k-radio-label" htmlFor="rad3">Unchecked</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="rad3-rtl" />
                <label className="k-radio-label" htmlFor="rad3-rtl">Unchecked</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton />
                    Unchecked
                </label>
            </div>

            <div>
                <RadioButton id="rad4" disabled />
                <label className="k-radio-label" htmlFor="rad4">Unchecked</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton disabled />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="rad4-rtl" disabled />
                <label className="k-radio-label" htmlFor="rad4-rtl">Unchecked</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton disabled />
                    Unchecked
                </label>
            </div>

            <div>
                <RadioButton id="radError" invalid required />
                <label className="k-radio-label" htmlFor="radError">Invalid</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton invalid required />
                    Invalid
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="radError-rtl" invalid required />
                <label className="k-radio-label" htmlFor="radError-rtl">Invalid</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton invalid required />
                    Invalid
                </label>
            </div>

            <div>
                <RadioButton id="radFocus" focus />
                <label className="k-radio-label" htmlFor="radFocus">Focus</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton focus />
                    Focus
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="radFocus-rtl" focus />
                <label className="k-radio-label" htmlFor="radFocus-rtl">Focus</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton focus />
                    Focus
                </label>
            </div>

            <div className="k-ripple-container">
                <RadioButton id="radRipple" focus />
                <label className="k-radio-label" htmlFor="radRipple">Ripple</label>
            </div>
            <div className="k-ripple-container">
                <label className="k-radio-label">
                    <RadioButton focus />
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <RadioButton id="radRipple-rtl" focus />
                <label className="k-radio-label" htmlFor="radRipple-rtl">Ripple</label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-radio-label">
                    <RadioButton focus />
                    Ripple
                </label>
            </div>

            <div>
                <RadioButton id="radLong" checked />
                <label className="k-radio-label" htmlFor="radLong">Long label Vivamus a arcu lacus. Integer augue leo.</label>
            </div>
            <div>
                <label className="k-radio-label">
                    <RadioButton checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>
            <div dir="rtl">
                <RadioButton id="radLong-rtl" checked />
                <label className="k-radio-label" htmlFor="radLong-rtl">Long label Vivamus a arcu lacus. Integer augue leo.</label>
            </div>
            <div dir="rtl">
                <label className="k-radio-label">
                    <RadioButton checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>

        </div>
    </>
);
