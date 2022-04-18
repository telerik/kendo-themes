import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorPicker } from '../../colorpicker';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span></span>
            <span>No Color</span>
            <span>Opacity</span>
            <span>Selected Color</span>
            <span>Icon</span>
            <span>Icon Opacity</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Disabled</span>

            <span>Small</span>
            <section>
                <ColorPicker size="small" />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" size="small" />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="small" />
            </section>

            <section>
                <ColorPicker value="fuchsia" valueIconName="edit-tools" size="small" />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" valueIconName="edit-tools" size="small" />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="small" hover />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="small" focus />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="small" disabled />
            </section>

            <span>Medium</span>
            <section>
                <ColorPicker />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" />
            </section>

            <section>
                <ColorPicker value="fuchsia" />
            </section>

            <section>
                <ColorPicker value="fuchsia" valueIconName="edit-tools" size="medium" />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" valueIconName="edit-tools" size="medium" />
            </section>

            <section>
                <ColorPicker value="fuchsia" hover />
            </section>

            <section>
                <ColorPicker value="fuchsia" focus />
            </section>

            <section>
                <ColorPicker value="fuchsia" disabled />
            </section>

            <span>Large</span>
            <section>
                <ColorPicker size="large" />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" size="large" />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="large" />
            </section>

            <section>
                <ColorPicker value="fuchsia" valueIconName="edit-tools" size="large" />
            </section>

            <section>
                <ColorPicker value="rgba(255, 0, 255, 0.5)" valueIconName="edit-tools" size="large" />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="large" hover />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="large" focus />
            </section>

            <section>
                <ColorPicker value="fuchsia" size="large" disabled />
            </section>

        </div>
    </>
);
