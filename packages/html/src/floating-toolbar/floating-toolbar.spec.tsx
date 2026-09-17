import { classNames, Size, FillMode  } from '../misc';
import { Popup, KendoPopupProps } from '../popup';
import { Toolbar, KendoToolbarOptions, KendoToolbarProps } from '../toolbar';
import { Button } from '../button/button.spec';
import { ToolbarSeparator } from '../toolbar/toolbar-separator';

import { KendoComponent } from '../_types/component';
import { FLOATING_TOOLBAR_FOLDER_NAME, FLOATING_TOOLBAR_MODULE_NAME } from './constants';

export const FLOATING_TOOLBAR_CLASSNAME = `k-floating-toolbar`;
export const FLOATING_TOOLBAR_DRAG_HANDLE_CLASSNAME = `k-floating-toolbar-drag-handle`;

const states = [];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.outline, FillMode.flat],
};

const defaultOptions = {
    scrollButtons: 'around'
};

export type KendoFloatingToolbarOptions = KendoToolbarOptions;

export type KendoFloatingToolbarProps = KendoFloatingToolbarOptions & KendoPopupProps & KendoToolbarProps & {
    /** Renders a permanently-visible drag handle that bypasses the toolbar's overflow/scroll strategy. */
    draggable?: boolean;
    /** Accessible name for the drag handle button. */
    dragHandleAriaLabel?: string;
    /** Pins the toolbar in place within its scrolling container. */
    sticky?: boolean;
};

/**
 * @aria {aria-label="Drag to reposition"} The drag handle button requires an accessible name; override via `dragHandleAriaLabel`.
 * @ux {Contextual display} Appears near selected content (e.g., selected text in an editor).
 * @ux {Floating position} Rendered as a floating layer above the page, not in the document flow.
 * @ux {Action buttons} Contains formatting or context-specific action buttons.
 * @ux {Drag handle} When draggable, a persistent handle stays visible and is never hidden behind the overflow menu.
 * @ux {Sticky} When sticky, pins in place while its scrolling container's content moves beneath it.
 */
export const FloatingToolbar: KendoComponent<KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        fillMode,
        resizable,
        scrollable,
        scrollButtons,
        scrollingPosition,
        section,
        draggable,
        dragHandleAriaLabel = 'Drag to reposition',
        sticky,
        ...other
    } = props;

    const dragHandleItems: React.ReactNode[] = draggable ? [
        <Button
            key="drag-handle"
            className={FLOATING_TOOLBAR_DRAG_HANDLE_CLASSNAME}
            fillMode={fillMode}
            aria-label={dragHandleAriaLabel}
            icon="handle-drag-dots"
        />,
        <ToolbarSeparator key="drag-handle-separator" />
    ] : [];

    const toolbarChildren = [
        ...dragHandleItems,
        ...(Array.isArray(props.children) ? props.children : [props.children])
    ];

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                FLOATING_TOOLBAR_CLASSNAME,
                {
                    [`${FLOATING_TOOLBAR_CLASSNAME}-sticky`]: sticky,
                }
            )}>
            <Toolbar
                size={size}
                fillMode={fillMode}
                resizable={resizable}
                scrollable={scrollable}
                scrollButtons={scrollButtons}
                scrollingPosition={scrollingPosition}
                section={section}>
                    {toolbarChildren}
            </Toolbar>
        </Popup>
    );
};

FloatingToolbar.states = states;
FloatingToolbar.options = options;
FloatingToolbar.className = FLOATING_TOOLBAR_CLASSNAME;
FloatingToolbar.defaultOptions = defaultOptions;
FloatingToolbar.moduleName = FLOATING_TOOLBAR_MODULE_NAME;
FloatingToolbar.folderName = FLOATING_TOOLBAR_FOLDER_NAME;

/**
 * @keyboard {—(inherited)} Inherits the Toolbar component's own keyboard map in full (roving tabindex, arrow-key navigation, Home/End, Enter, Alt+ArrowDown/Up).
 * @keyboard {M} When draggable, activates the keyboard-driven "Move" mode on the drag handle (accessible equivalent to pointer drag).
 * @keyboard {ArrowLeft} While Move mode is active, moves the toolbar left.
 * @keyboard {ArrowRight} While Move mode is active, moves the toolbar right.
 * @keyboard {ArrowUp} While Move mode is active, moves the toolbar up.
 * @keyboard {ArrowDown} While Move mode is active, moves the toolbar down.
 * @keyboard {Enter} While Move mode is active, locks the toolbar in its new position and exits Move mode.
 */

export default FloatingToolbar;
