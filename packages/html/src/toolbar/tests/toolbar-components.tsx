import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { DropdownList } from '../../dropdownlist';
import { Combobox } from '../../combobox';
import { Toolbar } from '../../toolbar';
import { ButtonGroup } from '../../button-group';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Menu button</span>
            <section>
                <Toolbar>
                    <MenuButton text="Normal"></MenuButton>
                    <MenuButton hover text="Hover"></MenuButton>
                    <MenuButton focus text="Focus"></MenuButton>
                    <MenuButton disabled text="Disabled"></MenuButton>
                </Toolbar>
            </section>


            <span>Split button</span>
            <section>
                <Toolbar>
                    <SplitButton>Normal</SplitButton>
                    <SplitButton hover>Hover</SplitButton>
                    <SplitButton focus>Focus</SplitButton>
                    <SplitButton disabled>Disabled</SplitButton>
                </Toolbar>
            </section>

            <span>Button group</span>
            <section>
                <Toolbar>
                    <ButtonGroup>
                        <Button icon="align-left">Normal</Button>
                        <Button icon="align-center" hover>Hover</Button>
                        <Button icon="align-right" focus>Focus</Button>
                        <Button icon="bold" active>Active</Button>
                        <Button icon="bold" selected>Selected</Button>
                        <Button icon="italic" disabled>Disabled</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Adjacent</Button>
                        <Button>Button group</Button>
                    </ButtonGroup>
                </Toolbar>
            </section>

            <span>Dropdownlist in Toolbar</span>
            <section>
                <Toolbar>
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
                </Toolbar>
            </section>


            <span>Combobox in Toolbar</span>
            <section>
                <Toolbar>
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
                </Toolbar>
            </section>

        </div>
    </>
);
