import React from 'react';
import ReactDOM from 'react-dom/client';
import { RadioButton } from '../../radio';

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
                <RadioButton size="small" id="rad1" checked />
                <label className="k-radio-label" htmlFor="rad1">Checked</label>
            </div>
            <div>
                <RadioButton size="medium" id="rad1" checked />
                <label className="k-radio-label" htmlFor="rad1">Checked</label>
            </div>
            <div>
                <RadioButton size="large" id="rad1" checked />
                <label className="k-radio-label" htmlFor="rad1">Checked</label>
            </div>

            <span></span>
            <div>
                <RadioButton size="small" id="rad3" checked disabled />
                <label className="k-radio-label" htmlFor="rad3">Checked</label>
            </div>
            <div>
                <RadioButton size="medium" id="rad3" checked disabled />
                <label className="k-radio-label" htmlFor="rad3">Checked</label>
            </div>
            <div>
                <RadioButton size="large" id="rad3" checked disabled />
                <label className="k-radio-label" htmlFor="rad3">Checked</label>
            </div>

            <span></span>
            <div>
                <RadioButton size="small" id="rad2" />
                <label className="k-radio-label" htmlFor="rad2">Unchecked</label>
            </div>
            <div>
                <RadioButton size="medium" id="rad2" />
                <label className="k-radio-label" htmlFor="rad2">Unchecked</label>
            </div>
            <div>
                <RadioButton size="large" id="rad2" />
                <label className="k-radio-label" htmlFor="rad2">Unchecked</label>
            </div>

            <span></span>
            <div>
                <RadioButton size="small" id="rad4" disabled />
                <label className="k-radio-label" htmlFor="rad4">Unchecked</label>
            </div>
            <div>
                <RadioButton size="medium" id="rad4" disabled />
                <label className="k-radio-label" htmlFor="rad4">Unchecked</label>
            </div>
            <div>
                <RadioButton size="large" id="rad4" disabled />
                <label className="k-radio-label" htmlFor="rad4">Unchecked</label>
            </div>

            <span></span>
            <div>
                <RadioButton size="small" id="radRequired" invalid required/>
                <label className="k-radio-label" htmlFor="radRequired">Invalid</label>
            </div>
            <div>
                <RadioButton size="medium" id="radRequired" invalid required/>
                <label className="k-radio-label" htmlFor="radRequired">Invalid</label>
            </div>
            <div>
                <RadioButton size="large" id="radRequired" invalid required/>
                <label className="k-radio-label" htmlFor="radRequired">Invalid</label>
            </div>
        </div>
    </>
);
