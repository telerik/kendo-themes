import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { Combobox } from '../combobox';
import { DropzoneNormal } from '../dropzone';
import { MenuButton } from '../menu-button';
import { classNames, stateClassNames, States, } from '../misc';
import { PagerInput } from '../pager';
import { Textbox } from '../textbox';
import { Toolbar, ToolbarSeparator } from '../toolbar';
import { UploadNormal } from '../upload';

import { KendoComponent } from '../_types/component';
import { PDF_VIEWER_FOLDER_NAME, PDF_VIEWER_MODULE_NAME } from './constants';
export const PDFVIEWER_CLASSNAME = `k-pdf-viewer`;

const states = [
    States.disabled,
];

const options = {};

export type KendoPDFViewerProps = {
    toolbar?: React.JSX.Element;
    annotations?: boolean;
    annotationsToolbar?: React.JSX.Element;
    showSearchPanel?: boolean;
    blank?: boolean;
};

export type KendoPDFViewerState = { [K in (typeof states)[number]]?: boolean };

const defaultToolbar =
    <Toolbar resizable fillMode="flat">
        <MenuButton icon="menu" fillMode="flat" showArrow={false} aria-label="Menu" />
        <ToolbarSeparator />
        <PagerInput pageSizes={false} refresh={false} info={false} />
        <span className="k-spacer"></span>
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="zoom-out" aria-label="Zoom out" />
            <Button fillMode="flat" className="k-group-end" icon="zoom-in" aria-label="Zoom in" />
        </ButtonGroup>
        <Combobox value="Automatic Width" fillMode="flat" aria-label="Zoom level" />
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="pointer" aria-label="Selection tool" />
            <Button fillMode="flat" className="k-group-end" icon="hand" aria-label="Hand tool" />
        </ButtonGroup>
        <span className="k-spacer"></span>
        <Button fillMode="flat" icon="search" aria-haspopup="dialog" aria-label="Search" />
        {/* Toggleable button */}
        <Button fillMode="flat" icon="edit-annotations" aria-label="Annotations" />
        <Button fillMode="flat" icon="comment" aria-label="Comments" />
    </Toolbar>
;

const defaultAnnotationsToolbar =
    <Toolbar resizable fillMode="flat">
        {/* Toggleable button group */}
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="highlight" aria-label="Highlight" />
            <Button fillMode="flat" icon="underline" aria-label="Underline" />
            <Button fillMode="flat" className="k-group-end" icon="strikethrough" aria-label="Strikethrough" />
        </ButtonGroup>
        <ToolbarSeparator />
        {/* Toggleable button */}
        <Button fillMode="flat" icon="free-text" aria-label="Free text" />
        <ToolbarSeparator />
        <MenuButton icon="shapes" fillMode="flat" showArrow={true} aria-label="Shapes" />
        <ToolbarSeparator />
        <MenuButton icon="stamp" fillMode="flat" showArrow={true} aria-label="Stamp" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="sticky-note" aria-label="Sticky note" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="ruler" aria-label="Ruler" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="comment" aria-label="Comment" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="eraser" aria-label="Eraser" />
        <span className="k-spacer"></span>
        <Button fillMode="flat" icon="x" aria-label="Close" />
    </Toolbar>
;

const defaultOptions = {
    toolbar: defaultToolbar,
    showSearchPanel: false,
    blank: false,
    annotations: false,
    annotationsToolbar: defaultAnnotationsToolbar,
};

export const PDFViewer: KendoComponent<KendoPDFViewerState & KendoPDFViewerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPDFViewerState & KendoPDFViewerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar = defaultOptions.toolbar,
        showSearchPanel = defaultOptions.showSearchPanel,
        blank = defaultOptions.blank,
        annotations,
        annotationsToolbar = defaultOptions.annotationsToolbar,
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
            {annotations && annotationsToolbar}
            <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto k-enable-text-select"
                tabIndex={0}
                aria-label="PDF document"
                role="document"
            >

                {showSearchPanel &&
                <div className="k-search-panel k-pos-sticky k-top-center" role="dialog" aria-label="Search">
                    <Button fillMode="flat" icon="handle-drag" className="k-search-dialog-draghandle" aria-label="Drag handle" />
                    <Textbox
                        aria-label="Search text"
                        suffix={
                            <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase" aria-label="Match case" />
                        }
                    />
                    <span className="k-search-matches">
                        <span>0</span> of <span>0</span>
                    </span>
                    <Button fillMode="flat" icon="arrow-up" aria-label="Previous match" />
                    <Button fillMode="flat" icon="arrow-down" aria-label="Next match" />
                    <Button fillMode="flat" icon="x" aria-label="Close search" />
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
PDFViewer.defaultOptions = defaultOptions;
PDFViewer.moduleName = PDF_VIEWER_MODULE_NAME;
PDFViewer.folderName = PDF_VIEWER_FOLDER_NAME;

/**
 * @see Toolbar ariaSpec for the PDF viewer toolbar
 */
PDFViewer.ariaSpec = {
    selector: '.k-pdf-viewer',
    rules: [
        { selector: '.k-pdf-viewer .k-canvas', attribute: 'tabindex=0', usage: 'Defines the focusable page container element.' },
        { selector: '.k-pdf-viewer .k-canvas', attribute: 'aria-label', usage: 'Describes the purpose of the focusable container.' },
        { selector: '.k-pdf-viewer .k-canvas', attribute: 'role=document', usage: 'Defines that content should be evaluated in reader mode by assistive technologies.' },
        { selector: '.k-pdf-viewer .k-toolbar .k-button:has([class*="i-search"])', attribute: 'aria-haspopup=dialog', usage: 'Describes that the Search tool button opens a dialog element.' },
        { selector: '.k-pdf-viewer .k-canvas .k-search-panel', attribute: 'role=dialog', usage: 'Describes the role of the Search panel.' },
        { selector: '.k-pdf-viewer .k-canvas .k-search-panel', attribute: 'aria-label', usage: 'Label for the Search panel, same label as the Search tool.' },
    ]
};

export default PDFViewer;
