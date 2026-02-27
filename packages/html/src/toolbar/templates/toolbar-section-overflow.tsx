import { Toolbar } from "../toolbar.spec";
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SplitButton } from '../../split-button';
import { ToolbarSeparator } from "../toolbar-separator";
import ToolbarPopup from "../toolbar-popup.spec";

export const ToolbarSectionOverflow = ({ fillMode, size, ...other }: any) => (
    <>
        <Toolbar section fillMode={fillMode} size={size} children={[
            <Button key="toolbar-button" fillMode={fillMode} size={size}>Button</Button>,
            <ButtonGroup key="toolbar-button-group" fillMode={fillMode}>
                <Button className="k-group-start" icon="align-left" fillMode={fillMode} size={size}>Left</Button>
                <Button icon="align-center" fillMode={fillMode} size={size}>Center</Button>
                <Button className="k-group-end" icon="align-right" fillMode={fillMode} size={size}>Right</Button>
            </ButtonGroup>,
            <ToolbarSeparator key="sep" className="k-toolbar-button-separator" />,
            <Button key="overflow-btn"
                icon="more-horizontal"
                className="k-toolbar-overflow-button"
                fillMode="flat"
                size={size}
                rounded="none"
                id="overflow-section-btn"
                aria-label="More options"
                aria-expanded="true"
                aria-controls="overflow-section-list"
            ></Button>
        ]}
        {...other}>
        </Toolbar>
        <ToolbarPopup size={size} fillMode={fillMode}>
            <span
                id="overflow-section-list"
                className="k-toolbar-items-list"
                role="toolbar"
                aria-labelledby="overflow-section-btn"
            >
                <SplitButton key="toolbar-split-button" fillMode={fillMode} size={size}>Split button</SplitButton>
                <Button key="toolbar-button" fillMode={fillMode} size={size}>Button</Button>
            </span>
        </ToolbarPopup>
    </>
);
