import { Button } from '../button';
import { DropzoneNormal } from '../dropzone';
import { classNames, stateClassNames, States, } from '../misc';
import { Pager } from '../pager';
import { Textbox } from '../textbox';
import { Toolbar } from '../toolbar';
import { UploadNormal } from '../upload';

export const PDFVIEWER_CLASSNAME = `k-pdf-viewer`;

const states = [
    States.disabled,
];

const options = {};

export type KendoPDFViewerProps = {
    toolbar?: JSX.Element;
    showSearchPanel?: boolean;
    blank?: boolean;
};

export type KendoPDFViewerState = { [K in (typeof states)[number]]?: boolean };

const defaultToolbar =
<>
    <Toolbar resizable>
        <Pager type="input" pageSizes={false} refresh={false} info={false} />
        <span className="k-spacer"></span>
        <Button fillMode="flat" icon="search"></Button>
        <Button fillMode="flat" icon="file-pdf"></Button>
        <Button fillMode="flat" icon="print"></Button>
        <Button fillMode="flat" icon="fullscreen"></Button>
    </Toolbar>
</>;

const defaultProps = {
    toolbar: defaultToolbar,
    showSearchPanel: false,
    blank: false,
};

export const PDFViewer = (
    props: KendoPDFViewerState & KendoPDFViewerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar,
        showSearchPanel,
        blank,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PDFVIEWER_CLASSNAME,
                stateClassNames(PDFVIEWER_CLASSNAME, { disabled }),
            )}
        >
            {toolbar}
            <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto k-enable-text-select">

                {showSearchPanel &&
                <div className="k-search-panel k-pos-sticky k-top-center">
                    <Button fillMode="flat" icon="handle-drag" className="k-search-dialog-draghandle"></Button>
                    <Textbox
                        suffix={
                            <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase"></Button>
                        }
                    />
                    <span className="k-search-matches">
                        <span>0</span> of <span>1</span>
                    </span>
                    <Button fillMode="flat" icon="arrow-up"></Button>
                    <Button fillMode="flat" icon="arrow-down"></Button>
                    <Button fillMode="flat" icon="x"></Button>
                </div>
                }

                <div className="k-pdf-viewer-pages">
                    {blank
                        ?
                        <div className="k-page k-blank-page">
                            <DropzoneNormal />
                            <UploadNormal empty status="upload"></UploadNormal>
                        </div>
                        :
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

PDFViewer.states = states;
PDFViewer.options = options;
PDFViewer.className = PDFVIEWER_CLASSNAME;
PDFViewer.defaultProps = defaultProps;

export default PDFViewer;
