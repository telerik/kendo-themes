import { PDFViewerWithSearchPanel } from '../../pdf-viewer';

const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <PDFViewerWithSearchPanel />
        </div>
    </>
);
