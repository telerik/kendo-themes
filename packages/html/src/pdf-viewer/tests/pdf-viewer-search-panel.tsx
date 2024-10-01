import { PDFViewerWithAnnotations, PDFViewerWithSearchPanel } from '../../pdf-viewer';

const styles = `
    #test-area .k-pdf-viewer {
        height: 250px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>PDF Viewer with Search Panel</span>
            <PDFViewerWithSearchPanel />

            <span>PDF Viewer + Annotations Toolbar with Search Panel</span>
            <PDFViewerWithAnnotations showSearchPanel />
        </div>
    </>
);
