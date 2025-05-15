import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Combobox } from '../../combobox';
import { MenuButton } from '../../menu-button';
import { PagerInput } from '../../pager';
import { PDFViewerWithAnnotations } from '../../pdf-viewer';
import { Toolbar, ToolbarSeparator } from '../../toolbar';

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
