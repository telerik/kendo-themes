import { classNames } from '../misc';

export const PDFVIEWERPAGE_CLASSNAME = `k-page`;

export type KendoPDFViewerPageProps = {
    width?: string;
    height?: string;
};

export const PDFViewerPage = (
    props: KendoPDFViewerPageProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        width = "720px",
        height = "360px",
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PDFVIEWERPAGE_CLASSNAME,
            )}
            style={{ width, height }}
        >
        </div>
    );
};

PDFViewerPage.className = PDFVIEWERPAGE_CLASSNAME;

export default PDFViewerPage;
