import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { MenuButton } from '../../menu-button/menu-button.spec';
import { SplitButton } from '../../split-button/split-button.spec';

export const ToolbarScrollableButtonsHidden = ({scrollingPosition = "start", ...props}: any) => (
    <Toolbar scrollable scrollButtons="hidden" scrollingPosition={scrollingPosition} {...props} children={[
        <Button key="toolbar-button">Button</Button>,
        <MenuButton key="toolbar-menu-button" text="Menu button"></MenuButton>,
        <SplitButton key="toolbar-split-button">Split button</SplitButton>,
        <ButtonGroup key="toolbar-button-group">
            <Button className="k-group-start" icon="align-left">Left</Button>
            <Button icon="align-center">Center</Button>
            <Button className="k-group-end" icon="align-right">Right</Button>
        </ButtonGroup>,
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
