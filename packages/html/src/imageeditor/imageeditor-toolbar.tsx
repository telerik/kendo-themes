import { KendoToolbarProps, Toolbar, ToolbarItem, ToolbarSeparator } from '../toolbar';
import { classNames } from '../misc';
import { Button } from '../button';
import { Autocomplete } from '../autocomplete';

export const IMAGEEDITORTOOLBAR_CLASSNAME = `k-imageeditor-toolbar`;

const states = [];

const options = {};

export type KendoImageEditorToolbarProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    /** Omits the zoom-level combobox. */
    adaptive?: boolean;
    /** Disables the image-dependent actions (no image loaded). */
    disabled?: boolean;
};

const defaultOptions = {};

export const ImageEditorToolbar = (
    props: KendoToolbarProps &
        KendoImageEditorToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        adaptive,
        disabled,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORTOOLBAR_CLASSNAME,
            )}
            fillMode="flat"
        >
            {toolbarItems ?? (
                // A freshly-loaded image has no edit history, so undo and redo are always disabled
                <>
                    <Button fillMode="flat" icon="image-add" aria-label="Image Add"></Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button fillMode="flat" disabled icon="undo" aria-label="Undo"></Button>
                    <Button fillMode="flat" disabled icon="redo" aria-label="Redo"></Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button fillMode="flat" disabled={disabled} icon="download" aria-label="Download"></Button>
                    <div className="k-spacer"></div>
                    <Button fillMode="flat" disabled={disabled} icon="zoom-in" aria-label="Zoom In"></Button>
                    {!adaptive &&
                    <ToolbarItem>
                        <Autocomplete fillMode="flat" disabled={disabled} value="Fit" showClearButton={false} aria-label="Zoom options" />
                    </ToolbarItem>
                    }
                    <Button fillMode="flat" disabled={disabled} icon="zoom-out" aria-label="Zoom Out"></Button>
                </>
            )}
        </Toolbar>
    );
};

ImageEditorToolbar.states = states;
ImageEditorToolbar.options = options;
ImageEditorToolbar.className = IMAGEEDITORTOOLBAR_CLASSNAME;
ImageEditorToolbar.defaultOptions = defaultOptions;

export default ImageEditorToolbar;
