import { classNames } from '../misc';
import { ImageEditorToolbar } from './imageeditor-toolbar';
import { ImageEditorSidebar } from './imageeditor-sidebar';
import { Overlay } from '../overlay';
import { Loader } from '../loader';

import { KendoComponent } from '../_types/component';
import { IMAGEEDITOR_FOLDER_NAME, IMAGEEDITOR_MODULE_NAME } from './constants';
export const IMAGEEDITOR_CLASSNAME = `k-imageeditor`;

const states = [];

const options = {};

export type KendoImageEditorProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    actionPane?: React.JSX.Element | React.JSX.Element[];
    sidebarItems?: React.JSX.Element | React.JSX.Element[];
    placeholder?: React.JSX.Element;
    contentHeight?: string;
    exporting?: boolean;
    /** Renders the mobile layout: canvas, then the pane and sidebar docked at the bottom. */
    adaptive?: boolean;
    sidebarScrollable?: boolean;
    sidebarScrollingPosition?: 'start' | 'end' | 'both';
};

const defaultOptions = {};

/**
 * @aria {role="img"} Indicates the canvas role as an image. Applicable when an image is loaded.
 * @aria {aria-label|aria-labelledby} Provides an accessible name for the canvas by describing the image content. Applicable when an image is loaded.
 * @aria {role="status"} Announces the busy overlay shown while `exporting` is true.
 * @ux {Canvas} Renders the image on an editable canvas.
 * @ux {Crop} A crop tool lets the user select and apply a cropping region.
 * @ux {Pan and zoom} The canvas can be panned by dragging and zoomed with the mouse wheel.
 * @ux {Undo / Redo} All edit operations can be undone and redone.
 * @ux {Export} The edited image can be saved or downloaded.
 * @ux {Exporting} While `exporting` is true, a busy overlay covers the editor and interaction is blocked.
 */
export const ImageEditor: KendoComponent<KendoImageEditorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoImageEditorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        actionPane,
        sidebarItems,
        placeholder,
        contentHeight,
        exporting,
        adaptive,
        sidebarScrollable,
        sidebarScrollingPosition,
        children,
        ...other
    } = props;

    const canvasContainer = (
        <div className="k-imageeditor-canvas-container">
            {placeholder ?? (
                <div className="k-imageeditor-canvas">
                    {children}
                </div>
            )}
        </div>
    );

    const pane = actionPane &&
        <div className="k-imageeditor-action-pane">{actionPane}</div>;

    const sidebar = <ImageEditorSidebar sidebarItems={sidebarItems} scrollable={sidebarScrollable} scrollingPosition={sidebarScrollingPosition} />;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITOR_CLASSNAME,
                { [`${IMAGEEDITOR_CLASSNAME}-adaptive`]: adaptive }
            )}>
            <div className="k-imageeditor-header">
                <ImageEditorToolbar toolbarItems={toolbarItems} />
            </div>

            <div className="k-imageeditor-content" style={{ height: contentHeight }}>
                {adaptive
                    ? <>{canvasContainer}{pane}{sidebar}</>
                    : <>{sidebar}{pane}{canvasContainer}</>
                }
            </div>

            {exporting &&
            <div className="k-loader-container k-loader-top" role="status" aria-live="polite" aria-label="Exporting">
                <Overlay className="k-loader-container-overlay" />
                <div className="k-loader-container-inner k-loader-container-panel">
                    <Loader animation="pulsing" themeColor="base" size="medium" aria-label="Exporting" />
                    <div className="k-loader-container-label">Exporting</div>
                </div>
            </div>
            }
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
 * @keyboard {Alt/Opt(Mac) + Number} Focuses the component.
 * @keyboard {Tab} Focuses the next focusable item.
 * @keyboard {Shift + Tab} Focuses the previous focusable item.
 * @keyboard {Enter} Presses the focused button.
 * @keyboard {Space} Presses the focused button.
 * @keyboard {Control/Cmd(Mac) + Z} Undo the operation.
 * @keyboard {Control/Cmd(Mac) + Y} Redo the operation.
 * @keyboard {Escape} Deselect / Cancel operation.
 * @keyboard {Delete} Delete selected element.
 * @keyboard {Control/Cmd(Mac) + Plus} Zooms in on the image. Conflicts with the browser zoom in all browsers; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + Minus} Zooms out from the image. Conflicts with the browser zoom out in all browsers; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + O} Opens the image browser to import a new image. Conflicts with the Open File dialog in all browsers; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + D} Duplicates the selected element. Conflicts with Bookmark Page in all browsers; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + Shift + S} Exports the image. Conflicts with the Firefox Screenshot tool; requires `preventDefault` when the component is focused.
 * @keyboard {Shift + 1} Fit to screen.
 * @keyboard {Shift + 0} Zoom to 100%.
 * @keyboard {Control/Cmd(Mac) + F3} Moves keyboard focus directly to the Side Panel.
 * @keyboard {R} Inserts a rectangle shape and selects it. The Floating Toolbar appears, but the side panel remains closed.
 * @keyboard {O} Inserts an oval shape and selects it. The Floating Toolbar appears, but the side panel remains closed.
 * @keyboard {L} Inserts a line shape and selects it. The Floating Toolbar appears, but the side panel remains closed.
 * @keyboard {T} Inserts a text box with a typing cursor and selects it. The Floating Toolbar appears, but the side panel remains closed.
 * @keyboard {ArrowLeft} Moves the selected object left.
 * @keyboard {ArrowRight} Moves the selected object right.
 * @keyboard {ArrowUp} Moves the selected object up.
 * @keyboard {ArrowDown} Moves the selected object down.
 * @keyboard {Control/Cmd(Mac) + B} Bolds the text. Conflicts with the Firefox Bookmarks Sidebar; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + I} Italicizes the text. Conflicts with Firefox Page Info; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + U} Underlines the text. Conflicts with View Source in Chrome, Firefox, and Edge; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + Shift + L} Left-aligns the text.
 * @keyboard {Control/Cmd(Mac) + Shift + E} Center-aligns the text. Conflicts with Firefox Search in Tabs; requires `preventDefault` when the component is focused.
 * @keyboard {Control/Cmd(Mac) + Shift + R} Right-aligns the text. Conflicts with Hard Refresh in all browsers; requires `preventDefault` when the component is focused.
 *
 * @see https://pauljadam.com/demos/canvas.html HTML Canvas Accessibility
 */

export default ImageEditor;
