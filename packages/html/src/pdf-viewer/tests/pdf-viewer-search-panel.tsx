import { PDFViewerWithAnnotations, PDFViewerWithSearchPanel } from '../../pdf-viewer';
import { FloatingToolbar } from '../../toolbar/floating-toolbar.spec';
import { ToolbarSeparator } from '../../toolbar/toolbar-separator';
import { Textbox } from '../../textbox/textbox.spec';
import { Button } from '../../button/button.spec';

const styles = `
    #test-area .k-pdf-viewer {
        height: 250px;
    }

    .k-animation-container {
        position: relative;
        bottom: 213px;
        left: 300px;
    }

    .k-animation-container:has(.annotations-search-panel) {
        bottom: 155px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>PDF Viewer with Search Panel</span>
            <PDFViewerWithSearchPanel />

            <span>PDF Viewer + Annotations Toolbar with Search Panel</span>
            <PDFViewerWithAnnotations />
            <FloatingToolbar className="annotations-search-panel">
                <Button className="k-search-dialog-draghandle" fillMode="flat" icon="handle-drag-dots"/>
                <ToolbarSeparator />
                <Textbox fillMode="flat" placeholder="Search" suffix={<Button className="k-match-case-button" fillMode="flat" icon="convert-lowercase" />}  />
                <div className="k-search-matches">
                   <span>0</span> of <span>0</span>
                </div>
                <ToolbarSeparator />
                <Button fillMode="flat" icon="arrow-up" />
                <Button fillMode="flat" icon="arrow-down" />
                <ToolbarSeparator />
                <Button fillMode="flat" icon="x" />
            </FloatingToolbar>
        </div>
    </>
);
