import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-ripple-container .k-checkbox:focus::after,
    .k-ripple-container .k-checkbox.k-focus::after {
        transform: translate(-50%, -50%) scale(1);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Checkbox</span>
            <span>In label</span>
            <span dir="rtl">Checkbox RTL</span>
            <span dir="rtl">In label RTL</span>

            <div>
                <Checkbox id="ch1" checked />
                <label className="k-checkbox-label" htmlFor="ch1">Checked</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="ch1-rtl" checked />
                <label className="k-checkbox-label" htmlFor="ch1-rtl">Checked</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox checked />
                    Checked
                </label>
            </div>

            <div>
                <Checkbox id="ch2" disabled checked />
                <label className="k-checkbox-label" htmlFor="ch2">Checked</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox disabled checked />
                    Checked
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="ch2-rtl" disabled checked />
                <label className="k-checkbox-label" htmlFor="ch2-rtl">Checked</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox disabled checked />
                    Checked
                </label>
            </div>

            <div>
                <Checkbox id="ch3" />
                <label className="k-checkbox-label" htmlFor="ch3">Unchecked</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="ch3-rtl" />
                <label className="k-checkbox-label" htmlFor="ch3-rtl">Unchecked</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox />
                    Unchecked
                </label>
            </div>

            <div>
                <Checkbox id="ch4" disabled />
                <label className="k-checkbox-label" htmlFor="ch4">Unchecked</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox disabled />
                    Unchecked
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="ch4-rtl" disabled />
                <label className="k-checkbox-label" htmlFor="ch4-rtl">Unchecked</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox disabled />
                    Unchecked
                </label>
            </div>

            <div>
                <Checkbox id="chInd" indeterminate />
                <label className="k-checkbox-label" htmlFor="chInd">Indeterminate</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox indeterminate />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="chInd-rtl" indeterminate />
                <label className="k-checkbox-label" htmlFor="chInd-rtl">Indeterminate</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox indeterminate />
                    Indeterminate
                </label>
            </div>

            <div>
                <Checkbox id="chIndDis" indeterminate disabled />
                <label className="k-checkbox-label" htmlFor="chIndDis">Indeterminate</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox indeterminate disabled />
                    Indeterminate
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="chIndDis-rtl" indeterminate disabled />
                <label className="k-checkbox-label" htmlFor="chIndDis-rtl">Indeterminate</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox indeterminate disabled />
                    Indeterminate
                </label>
            </div>

            <div>
                <Checkbox id="chError" invalid required/>
                <label className="k-checkbox-label" htmlFor="chError">Invalid</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox invalid required/>
                    Invalid
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="chError-rtl" invalid required/>
                <label className="k-checkbox-label" htmlFor="chError-rtl">Invalid</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox invalid required/>
                    Invalid
                </label>
            </div>

            <div>
                <Checkbox id="chFocus" focus/>
                <label className="k-checkbox-label" htmlFor="chFocus">Focus</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox focus/>
                    Focus
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="chFocus-rtl" focus/>
                <label className="k-checkbox-label" htmlFor="chFocus-rtl">Focus</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox focus/>
                    Focus
                </label>
            </div>

            <div className="k-ripple-container">
                <Checkbox id="chRipple" focus/>
                <label className="k-checkbox-label" htmlFor="chRipple">Ripple</label>
            </div>
            <div className="k-ripple-container">
                <label className="k-checkbox-label">
                    <Checkbox focus/>
                    Ripple
                </label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <Checkbox id="chRipple-rtl" focus/>
                <label className="k-checkbox-label" htmlFor="chRipple-rtl">Ripple</label>
            </div>
            <div className="k-ripple-container" dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox focus/>
                    Ripple
                </label>
            </div>

            <div>
                <Checkbox id="chLong" checked />
                <label className="k-checkbox-label" htmlFor="chLong">Long label Vivamus a arcu lacus. Integer augue leo.</label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <Checkbox checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>
            <div dir="rtl">
                <Checkbox id="chLong-rtl" checked />
                <label className="k-checkbox-label" htmlFor="chLong-rtl">Long label Vivamus a arcu lacus. Integer augue leo.</label>
            </div>
            <div dir="rtl">
                <label className="k-checkbox-label">
                    <Checkbox checked />
                    Long label Vivamus a arcu lacus. Integer augue leo.
                </label>
            </div>

        </div>
    </>
);
