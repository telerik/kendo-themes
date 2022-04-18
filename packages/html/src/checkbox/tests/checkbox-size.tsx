import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkbox } from '../../checkbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <span></span>
            <div>
                <Checkbox size="small" id="ch1" checked />
                <label className="k-checkbox-label" htmlFor="ch1">Checked</label>
            </div>
            <div>
                <Checkbox size="medium" id="ch1" checked />
                <label className="k-checkbox-label" htmlFor="ch1">Checked</label>
            </div>
            <div>
                <Checkbox size="large" id="ch1" checked />
                <label className="k-checkbox-label" htmlFor="ch1">Checked</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="ch2" disabled checked />
                <label className="k-checkbox-label" htmlFor="ch2">Checked</label>
            </div>
            <div>
                <Checkbox size="medium" id="ch2" disabled checked />
                <label className="k-checkbox-label" htmlFor="ch2">Checked</label>
            </div>
            <div>
                <Checkbox size="large" id="ch2" disabled checked />
                <label className="k-checkbox-label" htmlFor="ch2">Checked</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="ch3" />
                <label className="k-checkbox-label" htmlFor="ch3">Unchecked</label>
            </div>
            <div>
                <Checkbox size="medium" id="ch3" />
                <label className="k-checkbox-label" htmlFor="ch3">Unchecked</label>
            </div>
            <div>
                <Checkbox size="large" id="ch3" />
                <label className="k-checkbox-label" htmlFor="ch3">Unchecked</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="ch4" disabled />
                <label className="k-checkbox-label" htmlFor="ch4">Unchecked</label>
            </div>
            <div>
                <Checkbox size="medium" id="ch4" disabled />
                <label className="k-checkbox-label" htmlFor="ch4">Unchecked</label>
            </div>
            <div>
                <Checkbox size="large" id="ch4" disabled />
                <label className="k-checkbox-label" htmlFor="ch4">Unchecked</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="chInd" indeterminate />
                <label className="k-checkbox-label" htmlFor="chInd">Indeterminate</label>
            </div>
            <div>
                <Checkbox size="medium" id="chInd" indeterminate />
                <label className="k-checkbox-label" htmlFor="chInd">Indeterminate</label>
            </div>
            <div>
                <Checkbox size="large" id="chInd" indeterminate />
                <label className="k-checkbox-label" htmlFor="chInd">Indeterminate</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="chIndDis" indeterminate disabled />
                <label className="k-checkbox-label" htmlFor="chIndDis">Indeterminate</label>
            </div>
            <div>
                <Checkbox size="medium" id="chIndDis" indeterminate disabled />
                <label className="k-checkbox-label" htmlFor="chIndDis">Indeterminate</label>
            </div>
            <div>
                <Checkbox size="large" id="chIndDis" indeterminate disabled />
                <label className="k-checkbox-label" htmlFor="chIndDis">Indeterminate</label>
            </div>

            <span></span>
            <div>
                <Checkbox size="small" id="chError" invalid required/>
                <label className="k-checkbox-label" htmlFor="chError">Invalid</label>
            </div>
            <div>
                <Checkbox size="medium" id="chError" invalid required/>
                <label className="k-checkbox-label" htmlFor="chError">Invalid</label>
            </div>
            <div>
                <Checkbox size="large" id="chError" invalid required/>
                <label className="k-checkbox-label" htmlFor="chError">Invalid</label>
            </div>

        </div>
    </>
);
