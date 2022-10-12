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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Button</span>
            <span>Menu button</span>
            <span>Split button</span>
            <span>Button group</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
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
                        <MenuList>
                            <MenuItem text="MenuButton" disabled></MenuItem>
                            <MenuItem text="Normal" icon="plus"></MenuItem>
                            <MenuItem text="Hover" icon="plus" hover></MenuItem>
                            <MenuItem text="Focus" icon="plus" focus></MenuItem>
                            <MenuItem text="Active" icon="plus" active></MenuItem>
                            <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                            <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="SplitButton"></MenuItem>
                            <MenuItem text="Normal" icon="plus"></MenuItem>
                            <MenuItem text="Hover" icon="plus" hover></MenuItem>
                            <MenuItem text="Focus" icon="plus" focus></MenuItem>
                            <MenuItem text="Active" icon="plus" active></MenuItem>
                            <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                            <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                            <MenuItem text="Disabled focus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
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
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="MenuButton" disabled></MenuItem>
                            <MenuItem text="Normal" icon="plus"></MenuItem>
                            <MenuItem text="Hover" icon="plus" hover></MenuItem>
                            <MenuItem text="Focus" icon="plus" focus></MenuItem>
                            <MenuItem text="Active" icon="plus" active></MenuItem>
                            <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                            <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="SplitButton"></MenuItem>
                            <MenuItem text="Normal" icon="plus"></MenuItem>
                            <MenuItem text="Hover" icon="plus" hover></MenuItem>
                            <MenuItem text="Focus" icon="plus" focus></MenuItem>
                            <MenuItem text="Active" icon="plus" active></MenuItem>
                            <MenuItem text="Disabled" icon="plus" disabled></MenuItem>
                            <MenuItem text="Disabled focus" icon="plus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <div className="k-toolbar-popup k-popup k-menu-popup">
                        <MenuList>
                            <MenuItem text="Normal"></MenuItem>
                            <MenuItem text="Hover" hover></MenuItem>
                            <MenuItem text="Focus" focus></MenuItem>
                            <MenuItem text="Active" active></MenuItem>
                            <MenuItem text="Disabled" disabled></MenuItem>
                            <MenuItem text="Disabled focus" disabled focus></MenuItem>
                        </MenuList>
                    </div>
                </div>
            </section>

        </div>
    </>
);
