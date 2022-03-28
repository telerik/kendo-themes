import React from 'react';
import ReactDOM from 'react-dom/client';
import { Badge } from '../badge';

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
            <span><Badge size="small" themeColor="secondary">Rectangle</Badge></span>
            <span><Badge size="small" themeColor="secondary"></Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="small">Rounded</Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="small"></Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="full">Pill</Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="full"></Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="full">1</Badge></span>
            <span><Badge size="small" themeColor="secondary" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge size="small" fillMode="outline">Rectangle</Badge></span>
            <span><Badge size="small" fillMode="outline"></Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="small">Rounded</Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="small"></Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="full">Pill</Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="full"></Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="full">1</Badge></span>
            <span><Badge size="small" fillMode="outline" rounded="full"></Badge></span>


            <span>Normal</span>
            <span><Badge themeColor="info">Rectangle</Badge></span>
            <span><Badge themeColor="info"></Badge></span>
            <span><Badge themeColor="info" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="info" rounded="medium"></Badge></span>
            <span><Badge themeColor="info" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="info" rounded="full"></Badge></span>
            <span><Badge themeColor="info" rounded="full">1</Badge></span>
            <span><Badge themeColor="info" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="info">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="info"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full"></Badge></span>


            <span>Large</span>
            <span><Badge size="large" themeColor="warning">Rectangle</Badge></span>
            <span><Badge size="large" themeColor="warning"></Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="large">Rounded</Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="large"></Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="full">Pill</Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="full"></Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="full">1</Badge></span>
            <span><Badge size="large" themeColor="warning" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge size="large" fillMode="outline" themeColor="error">Rectangle</Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error"></Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="large">Rounded</Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="large"></Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="full">Pill</Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="full"></Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="full">1</Badge></span>
            <span><Badge size="large" fillMode="outline" themeColor="error" rounded="full"></Badge></span>

        </div>
    </>
);
