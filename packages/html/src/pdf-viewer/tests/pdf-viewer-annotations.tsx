import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Combobox } from '../../combobox/combobox.spec';
import { MenuButton } from '../../menu-button/menu-button.spec';
import { PagerInput } from "../../pager/templates/pager-input";
import { PDFViewerWithAnnotations } from '../../pdf-viewer/templates/pdf-viewer-with-annotations';
import { Toolbar } from "../../toolbar/toolbar.spec";
import { ToolbarSeparator } from "../../toolbar/toolbar-separator";

const styles = `
    #test-area .k-pdf-viewer {
        height: 250px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>PDF Viewer Full Featured Annotations Toolbar</span>
            <PDFViewerWithAnnotations />

            <span>PDF Viewer v1 Annotations Toolbar</span>
            <PDFViewerWithAnnotations
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
                    </Toolbar>
                }
                annotationsToolbar={
                    <Toolbar resizable fillMode="flat">
                        <Button fillMode="flat" className="k-group-start" icon="highlight" />
                        <ToolbarSeparator />
                        <Button fillMode="flat" icon="free-text" />
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" icon="x" />
                    </Toolbar>
                } />
        </div>
    </>
);
