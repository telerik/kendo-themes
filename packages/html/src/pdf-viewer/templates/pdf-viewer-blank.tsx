import { PDFViewer } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { MenuButton } from "../../menu-button";
import { PagerInput } from "../../pager";
import { Toolbar, ToolbarSeparator } from "../../toolbar";

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
