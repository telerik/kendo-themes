import React from 'react';
import ReactDOM from 'react-dom/client';
import { Captcha } from '../../captcha';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Captcha</span>
            <section>
                <Captcha value="YR890" valid />
            </section>
        </div>
    </>
);
