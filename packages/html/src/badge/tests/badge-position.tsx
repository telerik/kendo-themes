import React from 'react';
import ReactDOM from 'react-dom/client';

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
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>
            <span>Dot</span>


            <span>Inline</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded">Round</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-pill">Pill</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-circle">99+</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-dot"></span>
            </div>

            <span>^ RTL</span>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-outline k-badge-primary">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-outline k-badge-primary k-badge-rounded">Round</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-outline k-badge-primary k-badge-pill">Pill</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-outline k-badge-primary k-badge-circle">99+</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-outline k-badge-primary k-badge-dot"></span>
            </div>

            <span className="col-6"></span>

            <span></span>
            <span>top start</span>
            <span>top end</span>
            <span>bottom start</span>
            <span>bottom end</span>
            <span></span>


            <span>Inside</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-top-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-top-end">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-bottom-end">Rect</span>
            </div>
            <span></span>

            <span>Edge</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-top-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-top-end">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-bottom-end">Rect</span>
            </div>
            <span></span>

            <span className="col-6">{' '}</span>

            <span>Outside</span>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-top-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-top-end">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-bottom-end">Rect</span>
            </div>
            <span></span>

            <span className="col-6">{' '}</span>

            <span>Inside RTL</span>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-top-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-top-end">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-inside k-bottom-end">Rect</span>
            </div>
            <span></span>

            <span>Edge RTL</span>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-top-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-top-end">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-edge k-bottom-end">Rect</span>
            </div>
            <span></span>

            <span className="col-6">{' '}</span>

            <span>Outside RTL</span>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-top-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-top-end">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-bottom-start">Rect</span>
            </div>
            <div className="k-badge-container k-rtl">
                <span className="k-badge k-badge-md k-badge-solid k-badge-primary k-badge-rounded k-badge-outside k-bottom-end">Rect</span>
            </div>
            <span></span>
        </div>
    </>
);
