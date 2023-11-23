import { PDFViewer, PDFViewerPage } from "..";

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
