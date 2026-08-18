import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { Combobox } from '../combobox';
import { DropzoneNormal } from '../dropzone';
import { MenuButton } from '../menu-button';
import { classNames, stateClassNames, States, } from '../misc';
import { PagerInput } from '../pager';
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
    blank: false,
    annotations: false,
    annotationsToolbar: defaultAnnotationsToolbar,
};

/**
 * @aria {tabindex="0"} Defines the focusable page container element.
 * @aria {aria-label} Describes the purpose of the focusable container.
 * @aria {role="document"} Defines that content should be evaluated in reader mode by assistive technologies.
 * @aria {aria-haspopup="dialog"} Describes that the Search tool button opens a dialog element.
 * @aria {role="dialog"} Describes the role of the Search panel.
 * @aria {aria-label} Label for the Search panel, same label as the Search tool.
 * @ux {Page navigation} Previous and next buttons step through the document pages.
 * @ux {Page jump} A numeric input allows jumping directly to a specific page.
 * @ux {Zoom} Zoom in/out buttons and a zoom-level selector adjust the view scale.
 * @ux {Text search} A search panel finds and highlights matching text in the document.
 * @ux {Download} A toolbar button downloads the PDF file to the user's device.
 */
export const PDFViewer: KendoComponent<KendoPDFViewerState & KendoPDFViewerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPDFViewerState & KendoPDFViewerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar = defaultOptions.toolbar,
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
 * @keyboard {ArrowUp} Scrolls up the container.
 * @keyboard {ArrowDown} Scrolls down the container.
 * @keyboard {PageUp} Scrolls up the container.
 * @keyboard {PageDown} Scrolls down the container.
 * @keyboard {Shift + Tab} Returns focus to the toolbar.
 */

export default PDFViewer;
