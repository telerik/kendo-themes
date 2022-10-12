import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuItem, MenuList } from '../../menu';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList size="small">
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                            <MenuItem text="Disabled focus" disabled focus></MenuItem>
                            <div className="k-separator k-separator-horizontal"></div>
                            <MenuItem text="Item after separator"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList size="medium">
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                            <MenuItem text="Disabled focus" disabled focus></MenuItem>
                            <div className="k-separator k-separator-horizontal"></div>
                            <MenuItem text="Item after separator"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList size="large">
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                            <MenuItem text="Disabled focus" disabled focus></MenuItem>
                            <div className="k-separator k-separator-horizontal"></div>
                            <MenuItem text="Item after separator"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

        </div>
    </>
);
