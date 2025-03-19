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
                <CheckboxWithLabelAfter id="ch2" disabled checked >Checked Disabled</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked disabled />
                    Checked Disabled
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="ch2-rtl" disabled checked >Checked Disabled</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxChecked disabled />
                    Checked Disabled
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
                <CheckboxWithLabelAfter id="ch4" disabled >Unchecked Disabled</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked Disabled
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="ch4-rtl" disabled >Unchecked Disabled</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked Disabled
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

            <div>
                <CheckboxWithLabelAfter id="chIndDis" indeterminate disabled >Indeterminate Disabled</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate Disabled
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chIndDis-rtl" indeterminate disabled >Indeterminate Disabled</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate Disabled
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chError" invalid required >Invalid</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chError-rtl" invalid required >Invalid</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chFocus" hover >Hover</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal hover />
                    Hover
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chFocus-rtl" hover >Hover</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal hover />
                    Hover
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chFocus" hover checked >Hover Checked</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal hover checked />
                    Hover Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chFocus-rtl" hover checked >Hover Checked</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal hover checked />
                    Hover Checked
                </label>
            </div>


            <div>
                <CheckboxWithLabelAfter id="chFocus" focus >Focus</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chFocus-rtl" focus >Focus</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>

            <div>
                <CheckboxWithLabelAfter id="chFocus" focus checked >Focus Checked</CheckboxWithLabelAfter>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal focus checked />
                    Focus Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabelAfter id="chFocus-rtl" focus checked >Focus Checked</CheckboxWithLabelAfter>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus checked />
                    Focus Checked
                </label>
            </div>

            <div className="k-ripple-container">
                <CheckboxWithLabelAfter id="chRipple" focus >Ripple</CheckboxWithLabelAfter>
            </div>
            <div className="k-ripple-container">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <CheckboxWithLabelAfter id="chRipple-rtl" focus >Ripple</CheckboxWithLabelAfter>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
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
