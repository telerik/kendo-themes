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
        <MenuButton icon="menu" fillMode="flat" showArrow={false} />
        <ToolbarSeparator />
        <PagerInput pageSizes={false} refresh={false} info={false} />
        <span className="k-spacer"></span>
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="zoom-out" />
            <Button fillMode="flat" className="k-group-end" icon="zoom-in" />
        </ButtonGroup>
        <Combobox value="Automatic Width" fillMode="flat" />
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="pointer" />
            <Button fillMode="flat" className="k-group-end" icon="hand" />
        </ButtonGroup>
        <span className="k-spacer"></span>
        <Button fillMode="flat" icon="search" />
        {/* Toggleable button */}
        <Button fillMode="flat" icon="edit-annotations" />
        <Button fillMode="flat" icon="comment" />
    </Toolbar>
;

const defaultAnnotationsToolbar =
    <Toolbar resizable fillMode="flat">
        {/* Toggleable button group */}
        <ButtonGroup fillMode="flat">
            <Button fillMode="flat" className="k-group-start" icon="highlight" />
            <Button fillMode="flat" icon="underline" />
            <Button fillMode="flat" className="k-group-end" icon="strikethrough" />
        </ButtonGroup>
        <ToolbarSeparator />
        {/* Toggleable button */}
        <Button fillMode="flat" icon="free-text" />
        <ToolbarSeparator />
        <MenuButton icon="shapes" fillMode="flat" showArrow={true} />
        <ToolbarSeparator />
        <MenuButton icon="stamp" fillMode="flat" showArrow={true} />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="sticky-note" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="ruler-outline" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="comment" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="eraser-outline" />
        <span className="k-spacer"></span>
        <Button fillMode="flat" icon="x" />
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
            <div className="k-canvas k-pdf-viewer-canvas k-pos-relative k-overflow-auto k-enable-text-select">

                {showSearchPanel &&
                <div className="k-search-panel k-pos-sticky k-top-center">
                    <Button fillMode="flat" icon="handle-drag" className="k-search-dialog-draghandle" />
                    <Textbox
                        suffix={
                            <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase" />
                        }
                    />
                    <span className="k-search-matches">
                        <span>0</span> of <span>0</span>
                    </span>
                    <Button fillMode="flat" icon="arrow-up" />
                    <Button fillMode="flat" icon="arrow-down" />
                    <Button fillMode="flat" icon="x" />
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

export default PDFViewer;
