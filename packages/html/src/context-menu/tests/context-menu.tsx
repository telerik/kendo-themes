import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .wrap,
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
    .child-menu {
        position: absolute;
        left: 100%;
        top: 0;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section className="wrap">
                <div className="k-animation-container">
                    <Popup className="k-menu-popup">
                        <MenuList className="k-context-menu">
                            <MenuItem text="Item 1" selected showArrow></MenuItem>
                            <MenuItem text="Item 2"></MenuItem>
                            <MenuItem text="Item 3"></MenuItem>
                        </MenuList>
                    </Popup>
                </div>

                <div className="k-animation-container child-menu">
                    <Popup className="k-menu-popup">
                        <MenuList className="k-context-menu">
                            <MenuItem text="Item 1.1"></MenuItem>
                            <MenuItem text="Item 1.2"></MenuItem>
                        </MenuList>
                    </Popup>
                </div>
            </section>
        </div>
    </>
);
