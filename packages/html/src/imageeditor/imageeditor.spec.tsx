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

/**
 * @aria {role="img"} Indicates the canvas role as an image. Applicable when an image is loaded.
 * @aria {aria-label|aria-labelledby} Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded.
 * @ux {Canvas} Renders the image on an editable canvas.
 * @ux {Crop} A crop tool lets the user select and apply a cropping region.
 * @ux {Pan and zoom} The canvas can be panned by dragging and zoomed with the mouse wheel.
 * @ux {Undo / Redo} All edit operations can be undone and redone.
 * @ux {Export} The edited image can be saved or downloaded.
 */
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
 * @keyboard {Tab} Focuses next focusable element (the ToolBar or an input/button on the Edit pane).
 * @keyboard {Shift + Tab} Focuses previous focusable element.
 * @keyboard {Control + Z} Undo the last modification performed on the image.
 * @keyboard {Control + Y} Redo a modification performed on the image.
 *
 * @see https://pauljadam.com/demos/canvas.html HTML Canvas Accessibility
 */

export default ImageEditor;
