import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { MenuButton } from '../../menu-button';
import { SplitButton } from '../../split-button';
import { ToolbarSeparator } from "../toolbar-separator";

export const ToolbarResizable = (props) => (
    <Toolbar resizable children={[
        <Button key="toolbar-button">Button</Button>,
        <MenuButton key="toolbar-menu-button" text="Menu button"></MenuButton>,
        <SplitButton key="toolbar-split-button">Split button</SplitButton>,
        <ButtonGroup key="toolbar-button-group">
            <Button className="k-group-start" icon="align-left">Left</Button>
            <Button icon="align-center">Center</Button>
            <Button className="k-group-end" icon="align-right">Right</Button>
        </ButtonGroup>,
        <ToolbarSeparator className="k-toolbar-button-separator" />,
        <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
    ]}
    {...props}>
    </Toolbar>
);
