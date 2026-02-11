import { Button } from '../../button/button.spec';
import { ColorPicker } from '../../colorpicker/colorpicker.spec';
import { Switch } from '../../switch/switch.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Toolbar } from '../../toolbar/toolbar.spec';
import { ToolbarResizable } from '../../toolbar/templates/toolbar-resizable';
import { ToolbarItem } from '../../toolbar/toolbar-item.spec';
import { ToolbarSeparator } from '../../toolbar/toolbar-separator';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            { Toolbar.options.size.map((size) => (
                <>
                    <span className="k-colspan-all k-col-span-full">{`${size}`}</span>
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
                            <ToolbarSeparator className="k-toolbar-button-separator" />
                            <Button size={size} icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded="none"></Button>
                        </ToolbarResizable>
                    </section>
                </>
            ))}
        </div>
    </>
);
