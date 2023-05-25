import { CheckboxLabel } from '../templates/checkbox-label';
import { CheckboxNormal } from '../templates/checkbox-normal';


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
                <CheckboxLabel id="ch1" checked >Checked</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="ch1-rtl" checked >Checked</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Checked
                </label>
            </div>

            <div>
                <CheckboxLabel id="ch2" disabled checked >Checked</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="ch2-rtl" disabled checked >Checked</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled checked />
                    Checked
                </label>
            </div>

            <div>
                <CheckboxLabel id="ch3" >Unchecked</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="ch3-rtl" >Unchecked</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>

            <div>
                <CheckboxLabel id="ch4" disabled >Unchecked</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="ch4-rtl" disabled >Unchecked</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked
                </label>
            </div>

            <div>
                <CheckboxLabel id="chInd" indeterminate >Indeterminate</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="chInd-rtl" indeterminate >Indeterminate</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>

            <div>
                <CheckboxLabel id="chIndDis" indeterminate disabled >Indeterminate</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="chIndDis-rtl" indeterminate disabled >Indeterminate</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate
                </label>
            </div>

            <div>
                <CheckboxLabel id="chError" invalid required >Invalid</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="chError-rtl" invalid required >Invalid</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>

            <div>
                <CheckboxLabel id="chFocus" focus >Focus</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="chFocus-rtl" focus >Focus</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>

            <div className="k-ripple-container">
                <CheckboxLabel id="chRipple" focus >Ripple</CheckboxLabel>
            </div>
            <div className="k-ripple-container">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <CheckboxLabel id="chRipple-rtl" focus >Ripple</CheckboxLabel>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Ripple
                </label>
            </div>

            <div>
                <CheckboxLabel id="chLong" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>
            <div dir="rtl">
                <CheckboxLabel id="chLong-rtl" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>

        </div>
    </>
);
