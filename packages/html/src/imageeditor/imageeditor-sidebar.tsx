import { classNames } from '../misc';
import { Button } from '../button/button.spec';

export const IMAGEEDITORSIDEBAR_CLASSNAME = `k-imageeditor-sidebar`;

export type ImageEditorSidebarTool = 'Resize' | 'Crop' | 'Rotate' | 'Text' | 'Shapes' | 'Blur' | 'Adjustments' | 'Filters' | 'Frame' | 'Shadow';

export type KendoImageEditorSidebarProps = {
    /** Replaces the default tool buttons. */
    sidebarItems?: React.JSX.Element | React.JSX.Element[];
    /** The tool whose pane is open; its button is pressed. */
    activeTool?: ImageEditorSidebarTool;
    /** Disables the tool buttons (no image loaded). */
    disabled?: boolean;
    /** Lays the rail out horizontally, so separators are vertical. */
    adaptive?: boolean;
    scrollable?: boolean;
    scrollingPosition?: 'start' | 'end' | 'both';
};

const defaultOptions = {
    scrollable: false,
};

/**
 * @aria {role="toolbar"} The component role, grouping the tool selection buttons.
 * @aria {aria-label="Tools"} Distinguishes the sidebar toolbar from the header toolbar.
 */
export const ImageEditorSidebar = (
    props: KendoImageEditorSidebarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        sidebarItems,
        activeTool,
        disabled,
        adaptive,
        scrollable = defaultOptions.scrollable,
        scrollingPosition,
        ...other
    } = props;

    const separatorClassName = adaptive ? 'k-separator k-separator-vertical' : 'k-separator';

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORSIDEBAR_CLASSNAME,
                {
                    [`${IMAGEEDITORSIDEBAR_CLASSNAME}-scrollable`]: scrollable,
                    [`${IMAGEEDITORSIDEBAR_CLASSNAME}-scrollable-${scrollingPosition}`]: scrollingPosition && scrollingPosition !== 'both',
                }
            )}
        >
            <div className="k-imageeditor-sidebar-items" role="toolbar" aria-label="Tools">
                {sidebarItems ?? (
                    <>
                        <Button fillMode="flat" togglable icon="image-resize" aria-label="Resize" selected={activeTool === 'Resize'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="crop" aria-label="Crop" selected={activeTool === 'Crop'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="rotate" aria-label="Rotate" selected={activeTool === 'Rotate'} disabled={disabled}></Button>
                        <div className={separatorClassName}></div>
                        <Button fillMode="flat" togglable icon="free-text" aria-label="Text" selected={activeTool === 'Text'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="shapes" aria-label="Shapes" selected={activeTool === 'Shapes'} disabled={disabled}></Button>
                        <div className={separatorClassName}></div>
                        <Button fillMode="flat" togglable icon="drop-half-pixelated" aria-label="Blur" selected={activeTool === 'Blur'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="sliders-horizontal" aria-label="Adjustments" selected={activeTool === 'Adjustments'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="circles-three-intersecting" aria-label="Filters" selected={activeTool === 'Filters'} disabled={disabled}></Button>
                        <div className={separatorClassName}></div>
                        <Button fillMode="flat" togglable icon="frame-corners" aria-label="Frame" selected={activeTool === 'Frame'} disabled={disabled}></Button>
                        <Button fillMode="flat" togglable icon="circle-half-tilted" aria-label="Shadow" selected={activeTool === 'Shadow'} disabled={disabled}></Button>
                    </>
                )}
            </div>
        </div>
    );
};
