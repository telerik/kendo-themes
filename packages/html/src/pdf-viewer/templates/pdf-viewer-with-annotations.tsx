import { PDFViewer } from '../pdf-viewer.spec';
import { PDFViewerPage } from '../pdf-viewer-page';
import { Button } from "../../button/button.spec";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { Combobox } from "../../combobox/combobox.spec";
import { MenuButton } from "../../menu-button/menu-button.spec";
import { PagerInput } from "../../pager/templates/pager-input";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { ToolbarSeparator } from "../../toolbar/toolbar-separator";

export const PDFViewerWithAnnotations = (props) => (
    <PDFViewer
        annotations={true}
        toolbar={
            <Toolbar resizable fillMode="flat">
                <MenuButton icon="menu" fillMode="flat" showArrow={false} />
                <ToolbarSeparator />
                <PagerInput pageSizes={false} refresh={false} info={false} />
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
