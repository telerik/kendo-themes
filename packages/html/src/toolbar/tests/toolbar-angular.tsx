import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { ToolbarAngularNormal, ToolbarSeparator } from '../../toolbar';
import { ButtonGroup } from '../../button-group';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Angular specific rendering and spacing</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarAngularNormal>
                    <Button>Button</Button>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <SplitButton>Split button</SplitButton>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <MenuButton text="Menu button"></MenuButton>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left"></Button>
                        <Button icon="align-center"></Button>
                        <Button icon="align-right"></Button>
                        <Button className="k-group-end" icon="align-justify"></Button>
                    </ButtonGroup>
                </ToolbarAngularNormal>
            </section>


            <span>wrapped</span>
            <span>rtl</span>

            <section>
                <ToolbarAngularNormal>
                    <Button>Button</Button>
                    <SplitButton>Split button</SplitButton>
                    <MenuButton text="Menu button"></MenuButton>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button className="k-group-end" icon="align-justify">Justify</Button>
                    </ButtonGroup>
                </ToolbarAngularNormal>
            </section>
            <section dir="rtl">
                <ToolbarAngularNormal>
                    <Button>Button</Button>
                    <SplitButton>Split button</SplitButton>
                    <MenuButton text="Menu button"></MenuButton>
                    <ButtonGroup>
                        <Button className="k-group-start" icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button className="k-group-end" icon="align-justify">Justify</Button>
                    </ButtonGroup>
                </ToolbarAngularNormal>
            </section>

        </div>
    </>
);
