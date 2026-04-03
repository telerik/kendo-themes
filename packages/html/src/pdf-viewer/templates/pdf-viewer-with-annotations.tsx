import { PDFViewer, PDFViewerPage } from "..";
import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { Combobox } from "../../combobox";
import { MenuButton } from "../../menu-button";
import { PagerInput } from "../../pager";
import { Toolbar, ToolbarSeparator } from "../../toolbar";

export const PDFViewerWithAnnotations = (props) => (
    <PDFViewer
        annotations={true}
        toolbar={
            <Toolbar resizable fillMode="flat">
                <MenuButton icon="menu" fillMode="flat" showArrow={false} aria-label="Menu" />
                <ToolbarSeparator />
                <PagerInput pageSizes={false} refresh={false} info={false} />
                <span className="k-spacer"></span>
                <ButtonGroup fillMode="flat">
                    <Button fillMode="flat" className="k-group-start" icon="zoom-out" aria-label="Zoom out" />
                    <Button fillMode="flat" className="k-group-end" icon="zoom-in" aria-label="Zoom in" />
                </ButtonGroup>
                <Combobox value="Automatic Width" fillMode="flat" aria-label="Zoom level" />
                <ButtonGroup fillMode="flat">
                    <Button fillMode="flat" className="k-group-start" icon="pointer" aria-label="Selection tool" />
                    <Button fillMode="flat" className="k-group-end" icon="hand" aria-label="Hand tool" />
                </ButtonGroup>
                <span className="k-spacer"></span>
                <Button fillMode="flat" icon="search" aria-haspopup="dialog" aria-label="Search" />
                {/* Toggleable button */}
                <Button fillMode="flat" icon="edit-annotations" selected aria-label="Annotations" />
                <Button fillMode="flat" icon="comment" aria-label="Comments" />
            </Toolbar>
        }
        children={
            <>
                <PDFViewerPage />
                <PDFViewerPage />
            </>
        }
        {...props}
    />
);
