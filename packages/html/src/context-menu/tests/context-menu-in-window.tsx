import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        height: 300px;
    }

    .k-animation-container {
        top: 50px;
        left: 100px;
        overflow: visible;
        z-index: 12000;
    }

    .k-window {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <div className="k-widget k-window k-window-wrapper">
                    <div className="k-window-titlebar k-header">
                        <div className="k-window-title">Window</div>
                        <div className="k-window-actions">
                            <Button fillMode="flat" icon="window-minimize"></Button>
                            <Button fillMode="flat" icon="window-maximize"></Button>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content">Target</div>
                </div>

                <div className="k-animation-container">
                    <Popup className="k-menu-popup">
                        <MenuList className="k-context-menu">
                            <MenuItem text="Item 1" showArrow></MenuItem>
                            <MenuItem text="Item 2" showArrow></MenuItem>
                            <MenuItem text="Item 3" showArrow></MenuItem>
                            <MenuItem text="Item 4" showArrow></MenuItem>
                            <MenuItem text="Item 5" showArrow></MenuItem>
                            <MenuItem text="Item 6" showArrow></MenuItem>
                        </MenuList>
                    </Popup>
                </div>
            </section>
        </div>
    </>
);
