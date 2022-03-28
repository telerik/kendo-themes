import React from 'react';
import ReactDOM from 'react-dom/client';
import { Badge } from '../badge';

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
                <Badge>Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium">Round</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full">Pill</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full">1</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="full"></Badge>
            </div>

            <span>^ RTL</span>
            <div className="k-badge-container k-rtl">
                <Badge fillMode="outline">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge fillMode="outline" rounded="medium">Round</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge fillMode="outline" rounded="full">Pill</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge fillMode="outline" rounded="full">1</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge fillMode="outline" rounded="full"></Badge>
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
                <Badge rounded="medium" position="inside" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="inside" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="inside" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="inside" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

            <span>Edge</span>
            <div className="k-badge-container">
                <Badge rounded="medium" position="edge" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="edge" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="edge" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="edge" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Outside</span>
            <div className="k-badge-container">
                <Badge rounded="medium" position="outside" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="outside" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="outside" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container">
                <Badge rounded="medium" position="outside" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Inside RTL</span>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="inside" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="inside" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="inside" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="inside" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

            <span>Edge RTL</span>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="edge" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="edge" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="edge" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="edge" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

            <span className="col-6"></span>

            <span>Outside RTL</span>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="outside" align="top-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="outside" align="top-end">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="outside" align="bottom-start">Rect</Badge>
            </div>
            <div className="k-badge-container k-rtl">
                <Badge rounded="medium" position="outside" align="bottom-end">Rect</Badge>
            </div>
            <span></span>

        </div>
    </>
);
