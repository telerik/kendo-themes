import { PDFViewer, PDFViewerPage } from "..";

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

export default PDFViewerNormal;
