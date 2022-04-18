import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span></span>
            <span className="col-2">Rectangle</span>
            <span className="col-2">Rounded</span>
            <span className="col-2">Pill</span>
            <span className="col">Circle</span>
            <span className="col">Dot</span>


            <span>Small</span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary">Rectangle</span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-sm k-badge-solid k-badge-secondary k-badge-dot"></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary">Rectangle</span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-sm k-badge-outline k-badge-primary k-badge-dot"></span></span>


            <span>Normal</span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info">Rectangle</span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info"></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-md k-badge-solid k-badge-info k-badge-dot"></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success">Rectangle</span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success"></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-md k-badge-outline k-badge-success k-badge-dot"></span></span>


            <span>Large</span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning">Rectangle</span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-lg k-badge-solid k-badge-warning k-badge-dot"></span></span>

            <span>^ outline</span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error">Rectangle</span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-rounded">Rounded</span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-rounded"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-pill">Pill</span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-pill"></span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-circle">99+</span></span>
            <span><span className="k-badge k-badge-lg k-badge-outline k-badge-error k-badge-dot"></span></span>

        </div>
    </>
);
