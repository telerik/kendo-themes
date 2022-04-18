import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { DropdownList } from '../../dropdownlist';
import { Combobox } from '../../combobox';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Menu button</span>
            <section>
                <div className="k-widget k-toolbar">
                    <MenuButton text="Normal"></MenuButton>
                    <MenuButton hover text="Hover"></MenuButton>
                    <MenuButton focus text="Focus"></MenuButton>
                    <MenuButton disabled text="Disabled"></MenuButton>
                </div>
            </section>


            <span>Split button</span>
            <section>
                <div className="k-widget k-toolbar">
                    <SplitButton>Normal</SplitButton>
                    <SplitButton hover>Hover</SplitButton>
                    <SplitButton focus>Focus</SplitButton>
                    <SplitButton disabled>Disabled</SplitButton>
                </div>
            </section>

            <span>Button group</span>
            <section>
                <div className="k-widget k-toolbar">
                    <div className="k-button-group">
                        <Button icon="align-left">Normal</Button>
                        <Button icon="align-center" hover>Hover</Button>
                        <Button icon="align-right" focus>Focus</Button>
                        <Button icon="bold" active>Active</Button>
                        <Button icon="bold" selected>Selected</Button>
                        <Button icon="italic" disabled>Disabled</Button>
                    </div>
                    <div className="k-button-group">
                        <Button>Adjacent</Button>
                        <Button>Button group</Button>
                    </div>
                </div>
            </section>

            <span>Dropdownlist in Toolbar</span>
            <section>
                <div className="k-widget k-toolbar">
                    <div>
                        <DropdownList value="Normal" />
                    </div>
                    <div>
                        <DropdownList value="Hover" hover />
                    </div>
                    <div>
                        <DropdownList value="Focus" focus />
                    </div>
                    <div>
                        <DropdownList value="Disabled" disabled />
                    </div>
                </div>
            </section>


            <span>Combobox in Toolbar</span>
            <section>
                <div className="k-widget k-toolbar">
                    <div>
                        <Combobox value="Normal" />
                    </div>
                    <div>
                        <Combobox value="Hover" hover />
                    </div>
                    <div>
                        <Combobox value="Focus" focus />
                    </div>
                    <div>
                        <Combobox value="Disabled" disabled />
                    </div>
                </div>
            </section>

        </div>
    </>
);
