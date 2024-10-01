import { classNames } from '../misc';

export const PDFVIEWERPAGE_CLASSNAME = `k-page`;

export type KendoPDFViewerPageProps = {
    width?: string;
    height?: string;
};

const defaultOptions = {
    width: "720px",
    height: "360px",
};

export const PDFViewerPage = (
    props: KendoPDFViewerPageProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        width = defaultOptions.width,
        height = defaultOptions.height,
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
            {props.children}
        </div>
    );
};

PDFViewerPage.className = PDFVIEWERPAGE_CLASSNAME;
PDFViewerPage.defaultOptions = defaultOptions;

export default PDFViewerPage;
