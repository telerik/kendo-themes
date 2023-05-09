import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { ToolbarAngular, ToolbarSeparator } from '../../toolbar';
import { ButtonGroup } from '../../button-group';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Angular specific rendering and spacing</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarAngular>
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
                        <Button icon="align-left"></Button>
                        <Button icon="align-center"></Button>
                        <Button icon="align-right"></Button>
                        <Button icon="align-justify"></Button>
                    </ButtonGroup>
                </ToolbarAngular>
            </section>


            <span>wrapped</span>
            <span>rtl</span>

            <section>
                <ToolbarAngular>
                    <Button>Button</Button>
                    <SplitButton>Split button</SplitButton>
                    <MenuButton text="Menu button"></MenuButton>
                    <ButtonGroup>
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button icon="align-justify">Justify</Button>
                    </ButtonGroup>
                </ToolbarAngular>
            </section>
            <section dir="rtl">
                <ToolbarAngular>
                    <Button>Button</Button>
                    <SplitButton>Split button</SplitButton>
                    <MenuButton text="Menu button"></MenuButton>
                    <ButtonGroup>
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button icon="align-justify">Justify</Button>
                    </ButtonGroup>
                </ToolbarAngular>
            </section>

        </div>
    </>
);
