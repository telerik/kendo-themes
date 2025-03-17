import { CheckboxWithLabelAfter } from '../templates/checkbox-with-label-after';
import { CheckboxNormal } from '../templates/checkbox-normal';
import { CheckboxChecked } from '../templates/checkbox-checked';

const styles = `
    .k-ripple-container .k-checkbox:focus::after,
    .k-ripple-container .k-checkbox.k-focus::after {
        transform: translate(-50%, -50%) scale(1);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Checkbox</span>
            <span>In label</span>
            <span dir="rtl">Checkbox RTL</span>
            <span dir="rtl">In label RTL</span>

            <div>
                <CheckboxWithLabelAfter id="ch1" checked >Checked</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="ch1-rtl" checked >Checked</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxChecked />
                    Checked
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="ch3" >Unchecked</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="ch3-rtl" >Unchecked</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chInd" indeterminate >Indeterminate</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chInd-rtl" indeterminate >Indeterminate</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>

            <div className="k-ripple-container">
                <CheckboxWithLabelAfter id="chRipple" focus className="k-ripple-focus">Ripple</CheckboxWithLabelAfter>
            </div>
            <div className="k-ripple-container">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus className="k-ripple-focus" />
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <CheckboxWithLabelAfter id="chRipple-rtl" focus className="k-ripple-focus">Ripple</CheckboxWithLabelAfter>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus className="k-ripple-focus" />
                    Ripple
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chLong" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chLong-rtl" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxChecked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>

        </div>
    </>
);
