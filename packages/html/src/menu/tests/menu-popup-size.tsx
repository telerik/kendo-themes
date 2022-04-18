import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuList, MenuItem } from '../../menu';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        grid-template-columns: 120px 1fr 1fr 1fr;
    }
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

            <span></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>no arrow</span>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="small">
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Focus & Active" active focus></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Focus & Active" active focus></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="large">
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Focus & Active" active focus></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <span>default arrow</span>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="small">
                            <MenuItem text="Normal" showArrow></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="Normal" showArrow></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="large">
                            <MenuItem text="Normal" showArrow></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <span>custom arrow</span>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="small">
                            <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-menu-popup">
                        <MenuList size="large">
                            <MenuItem text="Normal" showArrow arrowIconName="chevron-right"></MenuItem>
                            <MenuItem text="No arrow"></MenuItem>
                            <MenuItem text="With icon" icon="folder" showArrow arrowIconName="chevron-right"></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

        </div>

    </>
);
