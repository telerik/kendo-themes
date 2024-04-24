import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { Switch } from '../../switch';
import { ButtonGroup } from '../../button-group';
import { ToolbarItem, ToolbarSeparator, ToolbarResizable, Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            { Toolbar.options.size.map((size) => (
                <>
                    <span className="k-colspan-all k-col-span-full">{size}</span>
                    <section className="k-colspan-all k-col-span-full">
                        <ToolbarResizable size={size}>
                            <Button size={size} icon="bold"></Button>
                            <Button size={size}>Button</Button>
                            <Button size={size}>Toggle</Button>
                            <ToolbarSeparator></ToolbarSeparator>
                            <ButtonGroup>
                                <Button className="k-group-start" size={size} icon="align-left">Left</Button>
                                <Button size={size} icon="align-center">Center</Button>
                                <Button className="k-group-end" size={size} icon="align-right">Right</Button>
                            </ButtonGroup>
                            <ToolbarSeparator></ToolbarSeparator>
                            <Button size={size} themeColor="primary">Primary</Button>
                            <ToolbarSeparator></ToolbarSeparator>
                            <ToolbarItem>
                                <label>Label:</label>
                                <ColorPicker size={size} />
                            </ToolbarItem>
                            <Switch size={size} checked />
                            <Button size={size} icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                        </ToolbarResizable>
                    </section>
                </>
            ))}
        </div>
    </>
);
