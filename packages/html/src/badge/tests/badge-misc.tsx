import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-badge-container {
        padding: 5px;
        width: 80px;
        min-height: 30px;
        box-sizing: border-box;
        background-color: skyblue;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-6">

            <span></span>
            <span className="col">Baseline</span>
            <span className="col">Rectangle</span>
            <span className="col">Rounded</span>
            <span className="col">Pill</span>
            <span className="col">Circle</span>


            <span>Small</span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-success">99</span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-success"><Icon className="k-badge-icon" name="check" /></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-success k-badge-rounded"><Icon className="k-badge-icon" name="check" /></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-success k-badge-pill"><Icon className="k-badge-icon" name="check" /></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-success k-badge-circle"><Icon className="k-badge-icon" name="check" /></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary">99</span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-rounded"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-pill"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-circle"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>


            <span>Normal</span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info">99</span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info"><Icon className="k-badge-icon" name="calendar" /></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-rounded"><Icon className="k-badge-icon" name="calendar" /></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-pill"><Icon className="k-badge-icon" name="calendar" /></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-circle"><Icon className="k-badge-icon" name="calendar" /></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-tertiary">99</span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-tertiary"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-tertiary k-badge-rounded"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-tertiary k-badge-pill"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-tertiary k-badge-circle"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>


            <span>Large</span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning">99</span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning"><Icon className="k-badge-icon" name="bell" /></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-rounded"><Icon className="k-badge-icon" name="bell" /></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-pill"><Icon className="k-badge-icon" name="bell" /></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-circle"><Icon className="k-badge-icon" name="bell" /></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error">99</span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-rounded"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-pill"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-circle"><span className="k-badge-icon k-svg-icon"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" /></svg></span></span></span>


            <span></span>
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>
            <span>Dot</span>


            <span>Inline</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-rounded">Round</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-pill">Pill</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-circle">99+</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-dot"></span>
            </div>

            <span>Edge</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-edge k-top-end">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-rounded k-badge-edge k-top-end">Round</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-pill k-badge-edge k-top-end">Pill</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-circle k-badge-edge k-top-end">99+</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-border-cutout k-badge-dot k-badge-edge k-top-end"></span>
            </div>

        </div>
    </>
);
