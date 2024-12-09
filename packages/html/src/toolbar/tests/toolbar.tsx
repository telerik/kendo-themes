import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { ColorPicker } from '../../colorpicker';
import { Switch } from '../../switch';
import { ButtonGroup } from '../../button-group';
import { ToolbarNormal, ToolbarResizable, ToolbarItem, ToolbarSeparator } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarResizable>
                    <Button icon="bold"></Button>
                    <Button>Button</Button>
                    <Button>Toggle</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button className="k-group-end" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button themeColor="primary">Primary</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ToolbarItem>
                        <label>Label:</label>
                        <ColorPicker />
                    </ToolbarItem>
                    <Switch checked />
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </ToolbarResizable>
            </section>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <section className="k-colspan-all k-col-span-full" dir="rtl">
                <ToolbarResizable>
                    <Button icon="bold"></Button>
                    <Button>Button</Button>
                    <Button>Toggle</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button className="k-group-end" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button themeColor="primary">Primary</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ToolbarItem>
                        <label>Label:</label>
                        <ColorPicker />
                    </ToolbarItem>
                    <Switch checked />
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </ToolbarResizable>
            </section>


            <span className="k-colspan-all k-col-span-full">Button states</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarResizable>
                    <Button>Normal</Button>
                    <Button hover>Hover</Button>
                    <Button focus>Focus</Button>
                    <Button active>Active</Button>
                    <Button selected>Selected</Button>
                    <Button disabled>Disabled</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button icon="bold"></Button>
                    <Button icon="bold" hover></Button>
                    <Button icon="bold" focus></Button>
                    <Button icon="bold" active></Button>
                    <Button icon="bold" selected></Button>
                    <Button icon="bold" disabled></Button>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null} hover></Button>
                </ToolbarResizable>
            </section>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarResizable>
                    <Button icon="align-left">Normal</Button>
                    <Button icon="align-left" hover>Hover</Button>
                    <Button icon="align-left" focus>Focus</Button>
                    <Button icon="align-left" active>Active</Button>
                    <Button icon="align-left" selected>Selected</Button>
                    <Button icon="align-left" disabled>Disabled</Button>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null} focus></Button>
                </ToolbarResizable>
            </section>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarResizable>
                    <Button themeColor="primary" icon="align-left">Normal</Button>
                    <Button themeColor="primary" icon="align-left" hover>Hover</Button>
                    <Button themeColor="primary" icon="align-left" focus>Focus</Button>
                    <Button themeColor="primary" icon="align-left" active>Active</Button>
                    <Button themeColor="primary" icon="align-left" selected>Selected</Button>
                    <Button themeColor="primary" icon="align-left" disabled>Disabled</Button>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null} active></Button>
                </ToolbarResizable>
            </section>

            <span className="k-colspan-all k-col-span-full">Disabled focus state of buttons</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarResizable>
                    <Button disabled focus>Button</Button>
                    <MenuButton disabled focus text="Menu button"></MenuButton>
                    <SplitButton disabled focus>Split button</SplitButton>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left" disabled focus>Button 1</Button>
                        <Button className="k-group-end" icon="align-center" disabled>Button 2</Button>
                    </ButtonGroup>
                    <ToolbarSeparator className="k-toolbar-button-separator" />
                    <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null} disabled focus></Button>
                </ToolbarResizable>
            </section>

            <span>wrapped</span>
            <span>wrapped rtl</span>
            <section>
                <ToolbarNormal />
            </section>

            <section dir="rtl">
                <ToolbarNormal />
            </section>

        </div>
    </>
);
