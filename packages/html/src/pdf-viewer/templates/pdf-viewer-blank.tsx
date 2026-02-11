import { PDFViewer } from '../pdf-viewer.spec';
import { Button } from "../../button/button.spec";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { Combobox } from "../../combobox/combobox.spec";
import { MenuButton } from "../../menu-button/menu-button.spec";
import { PagerInput } from "../../pager/templates/pager-input";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { ToolbarSeparator } from "../../toolbar/toolbar-separator";

export const PDFViewerBlank = (props) => (
    <PDFViewer blank
        toolbar={
            <Toolbar resizable fillMode="flat">
                <MenuButton disabled icon="menu" fillMode="flat" showArrow={false} />
                <ToolbarSeparator />
                <PagerInput disabled pageSizes={false} refresh={false} info={false} />
                <span className="k-spacer"></span>
                <ButtonGroup fillMode="flat">
                    <Button disabled fillMode="flat" className="k-group-start" icon="zoom-out" />
                    <Button disabled fillMode="flat" className="k-group-end" icon="zoom-in" />
                </ButtonGroup>
                <Combobox disabled value="Automatic Width" fillMode="flat" />
                <ButtonGroup fillMode="flat">
                    <Button disabled fillMode="flat" className="k-group-start" icon="pointer" />
                    <Button disabled fillMode="flat" className="k-group-end" icon="hand" />
                </ButtonGroup>
                <span className="k-spacer"></span>
                <Button disabled fillMode="flat" icon="search" />
                {/* Toggleable button */}
                <Button disabled fillMode="flat" icon="edit-annotations" />
                <Button disabled fillMode="flat" icon="comment" />
            </Toolbar>
        }
        {...props}
    />
);
