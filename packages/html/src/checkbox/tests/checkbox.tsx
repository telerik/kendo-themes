import { CheckboxWithLabel } from '../templates/checkbox-with-label';
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
                <CheckboxWithLabel id="ch1" checked >Checked</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="ch1-rtl" checked >Checked</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Checked
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="ch2" disabled checked >Checked</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="ch2-rtl" disabled checked >Checked</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled checked />
                    Checked
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="ch3" >Unchecked</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="ch3-rtl" >Unchecked</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Unchecked
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="ch4" disabled >Unchecked</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="ch4-rtl" disabled >Unchecked</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Unchecked
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="chInd" indeterminate >Indeterminate</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="chInd-rtl" indeterminate >Indeterminate</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Indeterminate
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="chIndDis" indeterminate disabled >Indeterminate</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="chIndDis-rtl" indeterminate disabled >Indeterminate</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Indeterminate
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="chError" invalid required >Invalid</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="chError-rtl" invalid required >Invalid</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid required/>
                    Invalid
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="chFocus" focus >Focus</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="chFocus-rtl" focus >Focus</CheckboxWithLabel>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Focus
                </label>
            </div>

            <div className="k-ripple-container">
                <CheckboxWithLabel id="chRipple" focus >Ripple</CheckboxWithLabel>
            </div>
            <div className="k-ripple-container">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <CheckboxWithLabel id="chRipple-rtl" focus >Ripple</CheckboxWithLabel>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-checkbox-label">
                    <CheckboxNormal focus/>
                    Ripple
                </label>
            </div>

            <div>
                <CheckboxWithLabel id="chLong" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxWithLabel>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>
            <div dir="rtl">
                <CheckboxWithLabel id="chLong-rtl" checked >Long label Vivamus a arcu lacus. Integer augue leo.</CheckboxWithLabel>
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
