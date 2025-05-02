import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { DropdownList } from '../../dropdownlist';
import { Combobox } from '../../combobox';
import { ToolbarNormal, ToolbarScrollable } from '../../toolbar';
import { ButtonGroup } from '../../button-group';
import { Badge } from '../../badge';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Menu button</span>
            <section>
                <ToolbarNormal>
                    <MenuButton text="Normal"></MenuButton>
                    <MenuButton hover text="Hover"></MenuButton>
                    <MenuButton focus text="Focus"></MenuButton>
                    <MenuButton disabled text="Disabled"></MenuButton>
                </ToolbarNormal>
            </section>


            <span>Split button</span>
            <section>
                <ToolbarNormal>
                    <SplitButton>Normal</SplitButton>
                    <SplitButton hover>Hover</SplitButton>
                    <SplitButton focus>Focus</SplitButton>
                    <SplitButton disabled>Disabled</SplitButton>
                </ToolbarNormal>
            </section>

            <span>Button group</span>
            <section>
                <ToolbarNormal>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left">Normal</Button>
                        <Button icon="align-center" hover>Hover</Button>
                        <Button icon="align-right" focus>Focus</Button>
                        <Button icon="bold" active>Active</Button>
                        <Button icon="bold" selected>Selected</Button>
                        <Button className="k-group-end" icon="italic" disabled>Disabled</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button className="k-group-start">Adjacent</Button>
                        <Button className="k-group-end">Button group</Button>
                    </ButtonGroup>
                </ToolbarNormal>
            </section>

            <span>Dropdownlist in Toolbar</span>
            <section>
                <ToolbarNormal>
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
                </ToolbarNormal>
            </section>


            <span>Combobox in Toolbar</span>
            <section>
                <ToolbarNormal>
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
                </ToolbarNormal>
            </section>

            <span>Button with Badge in Scrollable Toolbar</span>
            <section>
                <ToolbarScrollable children={[
                    <div className="k-badge-container">
                        <Button icon="filter">Filter</Button>
                        <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder></Badge>
                    </div>,
                    <div className="k-badge-container">
                        <Button icon="arrows-swap">Sort</Button>
                        <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder></Badge>
                    </div>,
                    <div className="k-badge-container">
                        <Button icon="group">Group</Button>
                        <Badge position="edge" rounded="full" align="top-end" size="medium" cutoutBorder></Badge>
                    </div>
                ]}/>
            </section>

        </div>
    </>
);
