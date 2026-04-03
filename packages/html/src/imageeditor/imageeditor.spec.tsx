import { classNames } from '../misc';
import { ImageEditorToolbar } from './imageeditor-toolbar';

import { KendoComponent } from '../_types/component';
import { IMAGEEDITOR_FOLDER_NAME, IMAGEEDITOR_MODULE_NAME } from './constants';
export const IMAGEEDITOR_CLASSNAME = `k-imageeditor`;

const states = [];

const options = {};

export type KendoImageEditorProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    actionPane?: React.JSX.Element | React.JSX.Element[];
    contentHeight?: string;
};

const defaultOptions = {};

export const ImageEditor: KendoComponent<KendoImageEditorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoImageEditorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        actionPane,
        contentHeight,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITOR_CLASSNAME
            )}>
            <div className="k-imageeditor-header">
                <ImageEditorToolbar toolbarItems={toolbarItems} />
            </div>

            <div className="k-imageeditor-content" style={{ height: contentHeight }}>
                <div className="k-imageeditor-canvas-container">
                    <div className="k-imageeditor-canvas">
                        {children}
                    </div>
                </div>

                {actionPane &&
                <div className="k-imageeditor-action-pane">{actionPane}</div>
                }
            </div>
        </div>
    );
};

ImageEditor.states = states;
ImageEditor.options = options;
ImageEditor.className = IMAGEEDITOR_CLASSNAME;
ImageEditor.defaultOptions = defaultOptions;
ImageEditor.moduleName = IMAGEEDITOR_MODULE_NAME;
ImageEditor.folderName = IMAGEEDITOR_FOLDER_NAME;

/**
 * @see Toolbar ariaSpec for the image editor toolbar
 * @see Form ariaSpec for the crop/resize action pane
 */
ImageEditor.ariaSpec = {
    selector: '.k-imageeditor',
    rules: [
        // Canvas rules apply only when an image is loaded (the canvas element is not rendered without an image)
        { selector: '.k-imageeditor-canvas>canvas', attribute: 'role=img', usage: 'Indicates the canvas role as an image. Applicable when an image is loaded.' },
        { selector: '.k-imageeditor-canvas>canvas', attribute: 'aria-label or aria-labelledby', usage: 'Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded.' },
    ]
};

export default ImageEditor;
