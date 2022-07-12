import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch } from '../../switch';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span className="k-colspan-2 k-col-span-2">small</span>
            <span className="k-colspan-2 k-col-span-2">medium</span>
            <span className="k-colspan-2 k-col-span-2">large</span>

            <span>null</span>
            <span>
                <Switch checked size="small" onLabel="On" trackRounded={null} thumbRounded={null} />
            </span>
            <span>
                <Switch size="small" offLabel="Off" trackRounded={null} thumbRounded={null} />
            </span>
            <span>
                <Switch checked size="medium" onLabel="On" trackRounded={null} thumbRounded={null} />
            </span>
            <span>
                <Switch size="medium" offLabel="Off" trackRounded={null} thumbRounded={null} />
            </span>
            <span>
                <Switch checked size="large" onLabel="On" trackRounded={null} thumbRounded={null} />
            </span>
            <span>
                <Switch size="large" offLabel="Off" trackRounded={null} thumbRounded={null} />
            </span>

            <span>small</span>
            <span>
                <Switch checked size="small" onLabel="On" trackRounded="small" thumbRounded="small" />
            </span>
            <span>
                <Switch size="small" offLabel="Off" trackRounded="small" thumbRounded="small" />
            </span>
            <span>
                <Switch checked size="medium" onLabel="On" trackRounded="small" thumbRounded="small" />
            </span>
            <span>
                <Switch size="medium" offLabel="Off" trackRounded="small" thumbRounded="small" />
            </span>
            <span>
                <Switch checked size="large" onLabel="On" trackRounded="small" thumbRounded="small" />
            </span>
            <span>
                <Switch size="large" offLabel="Off" trackRounded="small" thumbRounded="small" />
            </span>

            <span>medium</span>
            <span>
                <Switch checked size="small" onLabel="On" trackRounded="medium" thumbRounded="medium" />
            </span>
            <span>
                <Switch size="small" offLabel="Off" trackRounded="medium" thumbRounded="medium" />
            </span>
            <span>
                <Switch checked size="medium" onLabel="On" trackRounded="medium" thumbRounded="medium" />
            </span>
            <span>
                <Switch size="medium" offLabel="Off" trackRounded="medium" thumbRounded="medium" />
            </span>
            <span>
                <Switch checked size="large" onLabel="On" trackRounded="medium" thumbRounded="medium" />
            </span>
            <span>
                <Switch size="large" offLabel="Off" trackRounded="medium" thumbRounded="medium" />
            </span>

            <span>large</span>
            <span>
                <Switch checked size="small" onLabel="On" trackRounded="large" thumbRounded="large" />
            </span>
            <span>
                <Switch size="small" offLabel="Off" trackRounded="large" thumbRounded="large" />
            </span>
            <span>
                <Switch checked size="medium" onLabel="On" trackRounded="large" thumbRounded="large" />
            </span>
            <span>
                <Switch size="medium" offLabel="Off" trackRounded="large" thumbRounded="large" />
            </span>
            <span>
                <Switch checked size="large" onLabel="On" trackRounded="large" thumbRounded="large" />
            </span>
            <span>
                <Switch size="large" offLabel="Off" trackRounded="large" thumbRounded="large" />
            </span>

            <span>full</span>
            <span>
                <Switch checked size="small" onLabel="On" trackRounded="full" thumbRounded="full" />
            </span>
            <span>
                <Switch size="small" offLabel="Off" trackRounded="full" thumbRounded="full" />
            </span>
            <span>
                <Switch checked size="medium" onLabel="On" trackRounded="full" thumbRounded="full" />
            </span>
            <span>
                <Switch size="medium" offLabel="Off" trackRounded="full" thumbRounded="full" />
            </span>
            <span>
                <Switch checked size="large" onLabel="On" trackRounded="full" thumbRounded="full" />
            </span>
            <span>
                <Switch size="large" offLabel="Off" trackRounded="full" thumbRounded="full" />
            </span>
        </div>
    </>
);
