import { PDFViewer, PDFViewerPage } from "..";
import { Button, ButtonGroup, Combobox, MenuButton, Pager, Toolbar, ToolbarSeparator } from "../..";

export const PDFViewerWithAnnotations = (props) => (
    <PDFViewer
        annotations={true}
        toolbar={
            <Toolbar resizable fillMode="flat">
                <MenuButton icon="menu" fillMode="flat" showArrow={false} />
                <ToolbarSeparator />
                <Pager type="input" pageSizes={false} refresh={false} info={false} />
                <span className="k-spacer"></span>
                <ButtonGroup fillMode="flat">
                    <Button fillMode="flat" className="k-group-start" icon="zoom-out" />
                    <Button fillMode="flat" className="k-group-end" icon="zoom-in" />
                </ButtonGroup>
                <Combobox value="Automatic Width" fillMode="flat" />
                <ButtonGroup fillMode="flat">
                    <Button fillMode="flat" className="k-group-start" icon="pointer" />
                    <Button fillMode="flat" className="k-group-end" icon="hand" />
                </ButtonGroup>
                <span className="k-spacer"></span>
                <Button fillMode="flat" icon="search" />
                {/* Toggleable button */}
                <Button fillMode="flat" icon="edit-annotations" selected />
                <Button fillMode="flat" icon="comment" />
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
