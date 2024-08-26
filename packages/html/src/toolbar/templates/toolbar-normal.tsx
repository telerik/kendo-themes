import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { MenuButton } from '../../menu-button';
import { SplitButton } from '../../split-button';

export const ToolbarNormal = (props) => (
    <Toolbar children={[
        <Button key="toolbar-button">Button</Button>,
        <MenuButton key="toolbar-menu-button" text="Menu button"></MenuButton>,
        <SplitButton key="toolbar-split-button">Split button</SplitButton>,
        <ButtonGroup key="toolbar-button-group">
            <Button className="k-group-start" icon="align-left">Left</Button>
            <Button icon="align-center">Center</Button>
            <Button className="k-group-end" icon="align-right">Right</Button>
        </ButtonGroup>
    ]}
    {...props}>
    </Toolbar>
);

export default ToolbarNormal;
