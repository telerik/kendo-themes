import { PDFViewer } from '../pdf-viewer.spec';
import { PDFViewerPage } from '../pdf-viewer-page';

export const PDFViewerWithSearchPanel = (props) => (
    <PDFViewer
        showSearchPanel
        children={
            <>
                <PDFViewerPage />
                <PDFViewerPage />
            </>
        }
        {...props}
    />
);
