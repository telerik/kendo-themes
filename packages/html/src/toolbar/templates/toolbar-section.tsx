import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { MenuButton } from '../../menu-button';
import { SplitButton } from '../../split-button';
import { ToolbarSeparator } from "../toolbar-separator";
import ToolbarPopup from "../toolbar-popup.spec";

export const ToolbarSection = ({ fillMode, size, ...other }: any) => (
    <>
        <Toolbar section fillMode={fillMode} size={size} children={[
            <Button key="toolbar-button" fillMode={fillMode} size={size}>Button</Button>,
            <ButtonGroup key="toolbar-button-group" fillMode={fillMode}>
                <Button className="k-group-start" icon="align-left" fillMode={fillMode} size={size}>Left</Button>
                <Button icon="align-center" fillMode={fillMode} size={size}>Center</Button>
                <Button className="k-group-end" icon="align-right" fillMode={fillMode} size={size}>Right</Button>
            </ButtonGroup>,
            <ToolbarSeparator className="k-toolbar-button-separator" />,
            <Button icon="more-horizontal" className="k-toolbar-overflow-button" fillMode="flat" size={size} rounded={null}></Button>
        ]}
        {...other}>
        </Toolbar>
        <ToolbarPopup size={size} fillMode={fillMode} section {...other} >
            <SplitButton key="toolbar-split-button" fillMode={fillMode} size={size}>Split button</SplitButton>
            <Button key="toolbar-button" fillMode={fillMode} size={size}>Button</Button>
            <ToolbarSeparator />
            <MenuButton key="toolbar-menu-button" text="Menu button" fillMode={fillMode} size={size}></MenuButton>
            <ButtonGroup key="toolbar-button-group" fillMode={fillMode}>
                <Button className="k-group-start" icon="align-left" fillMode={fillMode} size={size}>Left</Button>
                <Button icon="align-center" fillMode={fillMode} size={size}>Center</Button>
                <Button className="k-group-end" icon="align-right" fillMode={fillMode} size={size}>Right</Button>
            </ButtonGroup>
        </ToolbarPopup>
    </>
);
