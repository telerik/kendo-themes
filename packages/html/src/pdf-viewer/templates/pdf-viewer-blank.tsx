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
                <MenuButton disabled icon="menu" fillMode="flat" showArrow={false} aria-label="Menu" />
                <ToolbarSeparator />
                <PagerInput disabled pageSizes={false} refresh={false} info={false} />
                <span className="k-spacer"></span>
                <ButtonGroup fillMode="flat">
                    <Button disabled fillMode="flat" className="k-group-start" icon="zoom-out" aria-label="Zoom out" />
                    <Button disabled fillMode="flat" className="k-group-end" icon="zoom-in" aria-label="Zoom in" />
                </ButtonGroup>
                <Combobox disabled value="Automatic Width" fillMode="flat" aria-label="Zoom level" />
                <ButtonGroup fillMode="flat">
                    <Button disabled fillMode="flat" className="k-group-start" icon="pointer" aria-label="Selection tool" />
                    <Button disabled fillMode="flat" className="k-group-end" icon="hand" aria-label="Hand tool" />
                </ButtonGroup>
                <span className="k-spacer"></span>
                <Button disabled fillMode="flat" icon="search" aria-haspopup="dialog" aria-label="Search" />
                {/* Toggleable button */}
                <Button disabled fillMode="flat" icon="edit-annotations" aria-label="Annotations" />
                <Button disabled fillMode="flat" icon="comment" aria-label="Comments" />
            </Toolbar>
        }
        {...props}
    />
);
