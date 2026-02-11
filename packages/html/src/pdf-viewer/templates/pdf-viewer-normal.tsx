import { PDFViewer } from '../pdf-viewer.spec';
import { PDFViewerPage } from '../pdf-viewer-page';

export const PDFViewerNormal = (props) => (
    <PDFViewer
        children={
            <>
                <PDFViewerPage />
                <PDFViewerPage />
            </>
        }
        {...props}
    />
);
